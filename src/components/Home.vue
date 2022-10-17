

<template>
  <div class="bg-slate-100 h-screen min-w-max">   
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
