

<template>
  <div class="bg-slate-100 h-screen min-w-max">
    <div class="bg-white border-b-2">
      <nav
        class="container px-2 pb-2 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
         
          <router-link
            to="/Home"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400">
            <h1 class="text-blue-300 text-xl shadow-black  font-bold	 ">
              CRM<spam class="text-blue-500 ml-0 text-xl font-bold	">C</spam>
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
            <li class="  text-cyan-600 font-bold  hover:text-gray-800 pointer-events-auto" >
              Acceuil
            </li></router-link>
          <li class=" text-gray-800 hover:text-blue-400">
            Utilisateurs
          </li>
    
        </ul>
        <ul class="flex text-sm ">
            <div>
              <li class="pl-14 font-medium">Name</li>
            <h6 class="text-gray-400 font-semibold">Administrateur</h6>
            </div>
           
            <img src="/src/assets/149071.png" alt="image" class="w-10 h-10 ml-3"/>
          </ul>
       </nav>
      </div>
    
      <section>
        <div class="flex flex-nowrap mt-4 pl-4 ">
                <div class="  bg-white w-96 pl-6 border-l-8 rounded border-cyan-700 "  >
                    <h1 class="font-bold">DOSSIER NOM</h1>
                    <p>#D0001</p>                   
                    <p>Lorem ipsum repellendus omnis</p>
                </div>
                <div class="pl-64 pt-6 flex-auto">
                 
                  <router-link 
                            to="/"
                            tag="button"                     
                            class=" px-12 py-2  bg-cyan-600	 rounded-l text-sm  text-white "
                          >
                            Documents
                   </router-link>
                 
                  <router-link 
                            to="/Verif"
                            tag="button"                     
                            class=" px-12 py-2  bg-cyan-700	 rounded-r text-sm  text-white "
                          >
                            Comparer
                   </router-link>
                </div>  

                <div class=" font-medium	 bg-white w-96 ml-64 pl-6 mr-6 text-cyan-600 flex-auto  border-r-8 rounded border-cyan-700 ">
                   <h1>Client</h1>
                   <p>Ajouter par </p> 
                   <p>Date d'ajout</p>  
                 </div>
        </div>
      </section>
            
      <section class="bg-white h-full mt-6">
          <section >
              <div class="pl-10  w-full" >
                <table class=" 	bg-cyan-700 text-white text-sm text-center w-full h-10 border-l-8  border-cyan-700 ">
                  <thead>
                    <tr>
                      <td class="border font-medium text-solid border-slate-300 w-28 bg-white text-cyan-700 rounded-l">                    
                        <router-link to="/Upload">Devis </router-link> </td>

                      <td class="border border-slate-300 ">
                      <button>Document 2</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 3</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 4</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 5</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 6</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 7</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 8</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 9</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 10</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 11</button></td>

                      <td class="border border-slate-300 ">
                      <button>Document 12</button></td>

                    </tr>
                  </thead>
              </table>
              </div>
              </section>
             
                  <section>
                    <table class="pt-16 pb-7  flex item-center text-center justify-center ">
                      <tr>
                      <td class=" pr-80 font-bold text-lg">Devis</td>
                      <td class=" pl-80">
                        <button class="bg-cyan-700 w-32 h-10 rounded text-sm  text-white">Modifier</button>
                      </td>

                    </tr>
                    </table>
                  </section>


              <section>
                
                <div>
                  <table class="  text-white border-separate border-spacing-1 flex item-center text-center justify-center">
  
                    <tr>
                      <td class="border rounded-l-md border-white h-12 text-sm font-semibold	bg-cyan-600">N°Devis</td>
                      <td class="border rounded-r-md border-slate-400 w-96 px-80  "></td>

                    </tr>
                    <tr>
                      <td class="border rounded-l-md h-12	bg-cyan-600 border-white text-sm font-semibold ">Eneretique</td>
                      <td class="border rounded-r-md border-slate-400 "></td>

                    </tr>
                    <tr>
                      <td class="border h-12 rounded-l-md	bg-cyan-600 border-white text-sm font-semibold ">Date</td>
                      <td class="border  border-slate-400 rounded-r-md "></td>

                    </tr>
                    <tr>
                      <td class="border h-12	bg-cyan-600 rounded-l-md border-white text-sm font-semibold">Prime</td>
                      <td class="border  rounded-r-md border-slate-400 "></td>

                    </tr>
                    <tr>
                      <td class="border px-12 h-12 rounded-l-md	bg-cyan-600 border-white text-sm  font-semibold">Total TTC</td>
                      <td class="border rounded-r-md border-slate-400"></td>

                    </tr>
                  </table>
                </div>
              </section>

              <section class="ml-96 pl-6 pt-10">
                  <h2 class="font-bold pb-4">Description</h2>
                  <p class="">Lorem, ipsum dolorequuntur eum aperiama desegfegergegegruntdgege iure repellat!</p>
              </section>
        </section>


   </div>
</template>
<script>
 import { useRouter} from "vue-router"
     const router=useRouter()
     const NavigationToAccueil=()=>{
        router.push("/Accueil")
     }
     const NavigationToUpload=()=>{
          router.push("/Upload")
       }
     
   

  </script>
