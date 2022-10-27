import {createRouter , createWebHistory } from  "vue-router"
import Accueil from "../components/Accueil.vue"
import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
import Devis from "../components/Devis.vue"
import Test from "../components/Test.vue"
import AjouterDevis from "../components/AjouterDevis.vue"


const routes =[
    {
        path : "/",
        name  :'Login',
        component : Login
    },
    
    {
        path : "/AjouterDevis",
        name  :'AjouterDevis',
        component : AjouterDevis
    },

    {
        path : "/devis",
        name  :'Devis',
        component : Devis
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
        path : "/test",
        name  :'Test',
        component : Test
    },
]

const router = createRouter({
    history : createWebHistory(), 
    routes, 
})
export default router
