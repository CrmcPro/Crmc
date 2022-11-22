import {createRouter , createWebHistory } from  "vue-router"
import Accueil from "../components/Accueil.vue"
import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
import Pochettes from "../components/Pochettes.vue"
import Test from "../components/Test.vue"
import Profil from  '../components/profil.vue'
import store from '../store'

const routes =[
    {
        path : "/",
        name  :'Login',
        component : Login, 
        meta : { auth : false}

        // children: [],
//         beforeEnter: (to, from, next) => {
//             // ...
// if(store.state.token){
//     next('Accueil')
// }  else next()        
//           }
    },
    {
        path : "/Pochettes",
        name  :'Pochettes',
        component : Pochettes , 
        meta : { auth : true}

    },
    {
        path : "/Signup",
        name  :'Signup',
        component : Signup ,
        meta : { auth : false}


    },
    {
        path : "/Accueil",
        name  :'Accueil',
        component : Accueil  ,
        meta : { auth : true}
    },
    {
        path : "/test",
        name  :'Test',
        component : Test ,
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
