
<script steup >
import axios from 'axios'
import { ref ,onMounted} from 'vue';



const getCurrendUser =()=>{
 

}
onMounted (()=>{
 
})

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
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="
              text-gray-800
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
       </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
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
      <ul class="flex text-sm ">
          <div>
            <li class="pl-14">Name</li>
          <h6 class="text-gray-400 font-semibold">Administrateur</h6>
          </div>
         
          <img src="/src/assets/149071.png" alt="image" class="w-10 h-10 ml-3"/>
          
        </ul>
     </nav>
    </div>
   
        
    </template>

