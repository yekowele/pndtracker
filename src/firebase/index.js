import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"
import store from "@/store";
import firebaseConfig from "@/firebase/firebase.config";

/***
 *
 firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
 };
 *
 ***/


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();


firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            store.dispatch("fetchUser", user);
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

const clientsCollection = db.collection('clients');
const projectsCollection = db.collection('projects');



export {firebase,auth,db,clientsCollection,projectsCollection};
