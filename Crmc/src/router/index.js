import {createRouter , createWebHistory } from  "vue-router"
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import About from "../components/About.vue"
import Signup from "../components/Signup.vue"


const routes =[
    {
        path : "/",
        name  :'Login',
        component : Login
    },
    {
        path : "/About",
        name  :'About',
        component : About
    },
    {
        path : "/Home",
        name  :'Home',
        component : Home
    },
    {
        path : "/Signup",
        name  :'Signup',
        component : Signup
    },
   
]

const router = createRouter({
    history : createWebHistory(), 
    routes, 
})
export default router
