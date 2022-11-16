
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import PorfilModel from './PorfilModel.vue'
import Profil from "./Profil.vue"
import store from "../store"
import router from "../router"

export default {
  name : 'Navbar',
  props :{
    show: {
    type: Boolean,
    default: false,
  },
  },
  components: {
    Profil,
    PorfilModel
  },
  data(){
    return {
      ShowProfil: false,
       show : false ,
       deconnection : false ,

    }
  },
  computed : {
    ...mapGetters(['user']) ,
  },
  methods : {
    ...mapActions(['getCurent']),
    ...mapMutations(['removeToken'])

   
  },
  mounted(){
    this.getCurent()

  }
}
</script>



<template>
<div class="bg-white border-b-2">
    <nav
      class="container py-3 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link
          to="/Accueil"
          class="
            text-xl
            font-bold
            text-gray-800
            md:text-2xl
            hover:text-blue-400">
          <h1 class="text-blue-300 text-2xl shadow-black  font-bold	 ">
            CRM<spam class="text-blue-500 ml-0 text-2xl font-bold	">C</spam>
          </h1>
        </router-link>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
      
        class="
          flex-col
          mt-4
          space-y-4
          md:flex
          md:space-y-0
          md:flex-row
          md:items-center
          md:space-x-10
          md:mt-0">
       
          <router-link
            to="/Accueil">
          <li class="  text-cyan-600 font-bold text-xl hover:text-gray-800 pointer-events-auto" >
            Acceuil
          </li></router-link>
        <li class=" text-neutral-600  text-xl hover:text-blue-400">
          Utilisateurs
        </li>
  
      </ul>
      <ul class="flex text-sm md
       md:flex
       md:flex-row
          md:items-end
          md:space-x-0
          md:mt-0

        ">
          <div>
            <li class="pl-14">{{user.first_name}}</li>
            <h6 class="text-gray-400 font-semibold">Administrateur</h6>
          </div >
         
          <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
       
        class="flex items-center    rounded-md"
      >
      <div  @click="show = !show">
            <img :src="'http://192.168.1.36:8000'+user.avatar" alt="image" class="w-10 h-10 ml-3 rounded-full"/>
          </div>
      </button>

      <!-- Dropdown menu -->
      <div
        v-show="show"
        class="
          absolute
          right-0
          py-2
          mt-2
          bg-white
          rounded-md
          shadow-xl
          w-44
        "
      >
       
        <div
          class="
            block
            px-4
            py-2
            text-sm 
            hover:bg-cyan-600  hover:text-white
          "
        >
        <div       @click="ShowProfil = !ShowProfil"
                  >
                    Profile
                    <PorfilModel :show="ShowProfil" @close="ShowProfil = false">
                           <Profil/>
                  </PorfilModel>
                </div>

          </div>
        <div
          class=" block px-4  py-2 text-sm  hover:bg-cyan-600  hover:text-white "
          @click="removeToken"
        >
           Déconnection
        </div>
      </div>
    </div>
  </div>
        </ul>
      
      </nav>
      <div>
        
        
      </div>
    </div>
    

        
    </template>

