import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "@/views/Register";
import firebase from "firebase/app";
import 'firebase/auth'
import Loading from "@/components/Loading";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:()=> import(/* webpackChunkName: "home" */'../views/Home.vue'),
    loading:Loading,
    meta:{
      requiresAuth : true,
    },
    children:[
      {
        path:'/',
        component :()=> import(/* webpackChunkName: "projects" */'../views/Projects.vue'),
        name : 'Home',
        loading:Loading,
      },
      {
        path:'/client-create',
        component :()=> import(/* webpackChunkName: "projects" */'../views/Clients/ClientCreate.vue'),
        name : 'ClientCreate',
        loading:Loading,
      },
      {
        path:'/project-create',
        component :()=> import(/* webpackChunkName: "projects" */'../views/Projects/CreateProject.vue'),
        name : 'ProjectCreate',
        loading:Loading,
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    loading:Loading,
    component: () => import(/* webpackChunkName: "login" */'../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to,from,next)=>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await firebase.getCurrentUser()){
    next('/login');
  }else{
    next();
  }
})


export default router
