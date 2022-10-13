


<template>
  <div class="bg-slate-100 h-screen min-w-max">
    <div class="bg-white border">
      <nav
        class="container px-2 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link
            to="/"
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
         
          <li class="text-xl font-bold text-blue-400  hover:text-gray-800">
            Accueil
          </li>
          <li class="text-xl text-gray-800 hover:text-blue-400">
            Utilisateurs
          </li>
    
        </ul>
        <ul>
          <li class="text-xl text-gray-800 hover:text-blue-400">
            Name
          </li>
        </ul>
       </nav>
      </div>
    
    
      <section>
        <div class="flex flex-nowrap mt-4 pl-4 ">
                <div class="  bg-white w-96 pl-6 "  >
                    <h1 class="font-bold	">Dossier Nom</h1>
                    <p>#D0001</p>
                    
                    <p>Lorem ipsum repellendus omnis</p>
                </div>
                <div class="pl-64 pt-6 flex-auto">
                  <button
                            
                            type="button"
                            class=" px-12 py-2  bg-cyan-700	 rounded text-sm  text-white "
                            @click=""
                          >
                          Documents
                          
                  </button>
                  <button
                            type="button"
                            class=" px-12 py-2  bg-cyan-700	 rounded text-sm  text-white "
                            @click=""
                          >
                            Comparer
                  </button>
                </div>  

                <div class=" font-medium	 bg-white w-96 ml-64 pl-6 mr-6 text-cyan-600 flex-auto ">
                   <h1>Client</h1>
                   <p>Ajouter par </p> 
                   <p>Date d'ajout</p>  
                 </div>
        </div>
      </section>
            

              <section >
              <div class="pl-20 pt-8 w-full" >
                <table class=" 	bg-cyan-700 text-white w-full ">
                  <thead>
                    <tr>
                      <td class="border border-slate-300 ">Devis</td>
                      <td class="border border-slate-300 ">Document 2 </td>
                      <td class="border border-slate-300 ">Document 3 </td>
                      <td class="border border-slate-300 ">Document 4 </td>
                      <td class="border border-slate-300 ">Document 5 </td>
                      <td class="border border-slate-300 ">Document 6 </td>
                      <td class="border border-slate-300 ">Document 7 </td>
                      <td class="border border-slate-300 ">Document 8 </td>
                      <td class="border border-slate-300 ">Document 9 </td>
                      <td class="border border-slate-300 ">Document 10</td>
                      <td class="border border-slate-300 ">Document 11</td>
                      <td class="border border-slate-300 ">Document 12</td>

                    </tr>
                  </thead>
              </table>
              </div>
              </section>
             
                  <section>
                    <table class="pt-32 pb-10  flex item-center text-center justify-center ">
                      <tr>
                      <td class="border px-12 py-2 	bg-cyan-700 border-slate-300 ">Devis</td>
                      <td class="border px-64    border-slate-300 ">
                        <button>Modifier</button>
                      </td>

                    </tr>
                    </table>
                  </section>







              <section>
                
                <div>
                  <table class="  text-white border-2  flex item-center text-center justify-center">
                   

                   
                    <tr>
                      <td class="border px-12 py-2 	bg-cyan-700 border-slate-300 ">N°Devis</td>
                      <td class="border w-96 px-80  border-slate-300 "></td>

                    </tr>
                    <tr>
                      <td class="border px-12 py-2	bg-cyan-700 border-slate-300 ">Eneretique</td>
                      <td class="border border-slate-300 "></td>

                    </tr>
                    <tr>
                      <td class="border px-12 py-2	bg-cyan-700 ">Date</td>
                      <td class="border  border-slate-300 "></td>

                    </tr>
                    <tr>
                      <td class="border px-12 py-2	bg-cyan-700 ">Prime</td>
                      <td class="border border-slate-300 "></td>

                    </tr>
                    <tr>
                      <td class="border px-12 py-2	bg-cyan-700 ">Total TTC</td>
                      <td class="border border-slate-300 "></td>

                    </tr>
                  </table>
                </div>
              </section>

              <section class="text-center pt-20">
                  <h2>Description</h2>
                  <p>Lorem, ipsum dolorequuntur eum aperiama deserunt iure repellat!</p>
              </section>



   </div>
   




</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>