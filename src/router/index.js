import {createRouter , createWebHistory } from  "vue-router"
import Accueil from "../components/Accueil.vue"
import Login from "../components/Login.vue"
import Signup from "../components/Signup.vue"
import Pochettes from "../components/Pochettes.vue"
import Test from "../components/Test.vue"
import Ah from '../components/pochettes/Ah.vue'
import Amo from '../components/pochettes/Amo.vue'
import Audit from '../components/pochettes/Audit.vue'
import AvisDimpôt  from "../components/pochettes/AvisDimpôt.vue"
import Cee from "../components/pochettes/Cee.vue"
import Cofrac from "../components/pochettes/Cofrac.vue"
import Devis from "../components/pochettes/Devis.vue"
import Facture from "../components/pochettes/Facture.vue"
import Geoportail from "../components/pochettes/Geoportail.vue"

import FichePréconisation from "../components/pochettes/FichePréconisation.vue"
import ListedesEntreprises from "../components/pochettes/ListedesEntreprises.vue"
import Synthèse from "../components/pochettes/ListedesEntreprises.vue"

import store from '../store'

const routes =[
    {
        path : "/",
        name  :'Login',
        component : Login, 
        meta : { auth : false}
    },
    {
        path : "/Pochettes/",
        name  :'Pochettes',
        component : Pochettes , 
        meta : { auth : true} ,
        children: [
            {

              path: '1',
              component: Devis,
            },
            {
 
              path: '2',
              component: Audit,
            },
            {
              
                path: '3',
                component: Cee,
            },
            {
              
                path: '5',
                component: Facture,
            },
            {
            
                path: '10',
                component: Geoportail,
            },
            {
               
                path: '14',
                component: AvisDimpôt,
            },
            {
               
                path: '13',
                component: Cofrac,
            },
            {
             
                path: '8',
                component: FichePréconisation,
            },
            {
             
                path: '9',
                component: ListedesEntreprises,
            },
            {
              
                path: '6',
                component: Synthèse,
            },
            {
           
                path: '4',
                component: Ah,
            },
            {
               
                path: '7',
                component: Amo,
            }
          ],
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
