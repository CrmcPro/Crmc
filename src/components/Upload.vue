<template>
    <div class="bg-slate-100 h-screen min-w-max ">
     <Header/>
          <section class=" mt-4">
                <div class="p-2  w-full" >
                  <table class=" 	bg-cyan-700 text-white text-sm text-center w-full  h-10">
                    <div class=" absolute w-1.5 h-7 rounded-2xl  bg-cyan-700"></div>
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

                <section class="text-center pt-2 pb-2">
                    <h1 class="font-bold text-xl pr-96">Devis</h1>
                    <p class="pr-20">Vous n'avez pas encore importer votre document ! </p>
                 </section>

                 <section class="">
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
   import Header from "../components/Header.vue"

const components = {
Header

};
export default {
  nom : 'Upload',
  components ,
}
       const router=useRouter()
       const NavigationToAccueil=()=>{
          router.push("/Accueil")
       }
       const NavigationToUpload=()=>{
          router.push("/Upload")
       }
     
  
    </script>
  