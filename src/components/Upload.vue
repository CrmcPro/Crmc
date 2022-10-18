

<template>
    <div class="bg-slate-100 h-screen min-w-max">
     
      <section>
        <div class="flex flex-nowrap pt-4 pl-4 ">
                <div class="  bg-white w-96 pl-6 border-l-8 rounded border-cyan-700 "  >
                  <h1 class="font-bold ">DOSSIER NOM   
                  <label class="toggle">
                  <input type="checkbox" >
                  <span class="slider"></span>
                  <span class="labels" data-on="Terminé" data-off="En cours"></span>
                 </label>
                  </h1>
                    <p>#D0001</p>                   
                    <p>Lorem ipsum repellendus omnis</p>
                </div>
                <div class="mx-auto md:flex md:justify-between md:items-center ">
                 
                  <router-link 
                            to="/"
                            tag="button"                     
                            class=" px-10 py-2  bg-cyan-600	 rounded-l text-sm  text-white "
                          ><font-awesome-icon icon="fa-solid fa-folder-open"/>  
                           Documents
                   </router-link>
                 
                  <router-link 
                            to="/Verif"
                            tag="button"                     
                            class=" px-12 py-2  bg-cyan-700	 rounded-r text-sm  text-white "
                          ><font-awesome-icon icon="fa-solid fa-code-compare"/>
                            Comparer
                   </router-link>
                </div>  

                <div class=" font-medium bg-white w-96 mr-6 text-cyan-600  border-r-8 rounded border-cyan-700 ">
                   <h1>Client</h1> 
                   <p>Ajouter par </p> 
                   <p>Date d'ajout</p>  
                 </div>
        </div>
      </section>
              
          <section class="bg-white mt-6">
                <div class="pl-10  w-full" >
                  <table class=" 	bg-cyan-700 text-white text-sm text-center w-full h-10 border-l-8  border-cyan-700 ">
                    <thead>
                      <tr>
                        <td class="border font-medium text-solid border-slate-300 w-28 bg-white text-cyan-700 rounded-l"> 
                        <button  >Devis</button> </td>
                        <td class="border border-slate-300 "><button>Document 2</button></td>
                        <td class="border border-slate-300 "><button>Document 3</button></td>
                        <td class="border border-slate-300 "><button>Document 4</button></td>
                        <td class="border border-slate-300 "><button>Document 5</button></td>
                        <td class="border border-slate-300 "><button>Document 6</button></td>
                        <td class="border border-slate-300 "><button>Document 7</button></td>
                        <td class="border border-slate-300 "><button>Document 8</button></td>
                        <td class="border border-slate-300 "><button>Document 9</button></td>
                        <td class="border border-slate-300 "><button>Document 10</button></td>
                        <td class="border border-slate-300 "><button>Document 11</button></td>
                        <td class="border border-slate-300 "><button>Document 12</button></td>
  
                      </tr>
                    </thead>
                </table>
                </div>
              </section>  

                <section class="text-center pt-28 pb-12">
                    <h1 class="font-bold text-xl pr-96">Devis</h1>
                    <p class="pr-20">Vous n'avez pas encore importer votre document ! </p>
                 </section>

                 <section class="mr-40">
                 <section  class=" pt-16 text-center w-4/12 float-right mr-96 h-80 outline-dashed outline-gray-300 ">
                    <div class="">
                      <img src="/src/assets/upload.png" alt="image" class="w-16 h-16 ml-52 bg-none mb-8 "/>     
                      <p class="text-center text-lg text-stone-600">Glisser & Déposer votre fichier</p>
                      <button class="bg-cyan-700  px-11 py-3 rounded  text-xl mt-8 text-white "> Sélectionner un fichier</button>  
                    </div>       
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
  