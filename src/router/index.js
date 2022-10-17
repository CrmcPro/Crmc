import {createRouter , createWebHistory } from  "vue-router"
import Accueil from "../components/Accueil.vue"
import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
import Home from "../components/Home.vue"
import Verif from "../components/Verif.vue"
import Upload from "../components/Upload.vue"


const routes =[
    {
        path : "/",
        name  :'Login',
        component : Login
    },
    
    {
        path : "/Upload",
        name  :'Upload',
        component : Upload
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
    {
        path : "/Accueil",
        name  :'Accueil',
        component : Accueil
    },
    {
        path : "/Verif",
        name  :'Verif',
        component : Verif
    },
]

const router = createRouter({
    history : createWebHistory(), 
    routes, 
})
export default router
