import {createRouter , createWebHistory } from  "vue-router"
import Accueil from "../components/Accueil.vue"
import Login from "../components/Login.vue"
import Signup1 from "../components/Signup/Signup1.vue"
import Signup2 from "../components/Signup/Signup2.vue"
import Signup3 from "../components/Signup/Signup3.vue"
import Utilisateur from "../components/Utilisateur.vue"
import Pochettes from "../components/Pochettes.vue"
import VerificationList from "../components/VerificationList.vue"
import store from '../store'

const routes =[
    {
        path : "/",
        name  :'Login',
        component : Login, 
        meta : { auth : false}

    },
    {
        path : "/Pochettes",
        name  :'Pochettes',
        component : Pochettes , 
        meta : { auth : true}

    },
    {
        path : "/Signup1",
        name  :'Signup1',
        component : Signup1 ,
        meta : { auth : false}


    },
    
    {
        path : "/Signup2",
        name  :'Signup2',
        component : Signup2 ,
        meta : { auth : false}


    },
    {
        path : "/Signup3",
        name  :'Signup3',
        component : Signup3 ,
        meta : { auth : false}


    },
    {
        path : "/Accueil",
        name  :'Accueil',
        component : Accueil  ,
        meta : { auth : true}
    },
    {
        path : "/Utilisateur",
        name  :'Utilisateur',
        component : Utilisateur  ,
        meta : { auth : true}
    },
    {
        path : "/VerificationList",
        name  :'VerificationList',
        component : VerificationList ,
        meta : { auth : true}

    },

]

const router = createRouter({
    history : createWebHistory(), 
    routes, 
})


router.beforeEach((to, from, next)=>{
    if( to.meta.auth && ! store.state.isAuthenticated){
        next('/')
    }else if ( !to.meta.auth && store.state.isAuthenticated){
        next('/Accueil')
    } else {
        next()
    }
})
export default router
