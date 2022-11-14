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
        component : Pochettes
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
