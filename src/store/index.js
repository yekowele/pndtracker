import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import 'firebase/auth'
import router from "@/router";
import {clientsCollection, projectsCollection} from "@/firebase";

import('../firebase/index')
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        clients: [],
        projects: [],
    },
    getters: {
        isLoggedIn: (state) => {
            return !!state.user.loggedIn
        },
        displayName: (state) => {
            return state.user.data.displayName;
        },
        clients: (state) => {
            return state.clients;
        },

    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SIGN_OUT(state) {
            state.user.loggedIn = false;
            state.user.data = null;
        },
        SET_CLIENTS(state, data) {
            state.clients = data;
        },
        SET_PROJECTS(state, data) {
            state.projects = data;
        },

    },
    actions: {
        fetchUser({commit}, user) {
            commit('SET_LOGGED_IN', user !== null);
            if (user !== null) {
                commit('SET_USER', {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit('SET_USER', null)
            }
        },
        async signOut({commit}) {
            await firebase.auth().signOut();
            commit('SIGN_OUT');
            await router.push({name: 'Login'})
        },

        async fetchClients({commit}) {
            const snapshot = await clientsCollection.get();
            let clients = [];
            snapshot.forEach(doc => {
                clients.push({'id': doc.id, ...doc.data()})
            })
            commit('SET_CLIENTS', clients);

        },

        async addClient({commit, dispatch}, payload) {
            const res = await clientsCollection.add({
                name: payload.name,
                created_at: new Date().toISOString()
            });
            await dispatch('fetchClients');
        },

        async addProject({commit, dispatch}, payload) {
            const res = await projectsCollection.add({
                name: payload.name,
                clientID: payload.clientID,
                startDate: payload.startDate,
                endDate: payload.endDate,
                description: payload.description,
                created_at: new Date().toISOString(),
                status: payload.status,
            });

        },

        async getProjects({commit}) {
            const snapshot = await projectsCollection.get();
            let projects = [];
            snapshot.forEach(doc => {
                projects.push({'id': doc.id, ...doc.data()})
            });

            commit('SET_PROJECTS', projects)
        },

        filterProjects({commit, state, dispatch}, payload) {

            if (payload && payload.text.length > 0 || payload.status.length > 0) {
               let filtereds =  state.projects.filter(project => {
                   if(payload.status.length < 1){ // Not selected status. Search only Name.
                        return project.name.toLowerCase().includes(payload.text.toLowerCase())
                   }else{
                       return project.name.toLowerCase().includes(payload.text.toLowerCase()) && payload.status.toLowerCase().includes(project.status.toLowerCase())
                   }
                })

                commit('SET_PROJECTS',filtereds)
            } else {
                console.log('Else dispatching');
                /***
                  #TODO : Don't do dispatch.
                 ***/
                dispatch('getProjects');
            }
        }
    },
    modules: {}
})
