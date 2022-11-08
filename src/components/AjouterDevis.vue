<script setup>
import { useRouter} from "vue-router"
import Header from "./Header.vue"
import DropFile from "./DropFile.vue"
const components = {
DropFile,  
Header

};
     const router=useRouter()
     const NavigationToAccueil=()=>{
        router.push("/Accueil")
     }
     const NavigationToUpload=()=>{
        router.push("/AjouterDevis")
     }
   

  </script>

<template >
    <div class="bg-slate-100  min-w-max ">
     <Header/>
          <section class="  mt-8  flex flex-col items-center ">
                <div class=" w-11/12 " >
                  <table class="  text-white text-sm text-center w-full  h-10">
                    <div class="absolute ml-2 mt-1.5 w-1.5 h-7  rounded-3xl  bg-cyan-700"></div>
                    <thead>
                      <tr>
                        <td class=" font-medium text-solid  rounded-l  w-28 bg-white text-cyan-700 "><button>Devis</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 2</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 3</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 4</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 5</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 6</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 7</button></td>
                        <td class="border border-slate-300	bg-cyan-700"><button>Document 8</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 9</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 10</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 11</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 12</button></td>
  
                      </tr>
                    </thead>
                </table>
                </div>
              </section>  
              
           <div  class="bg-white flex flex-col  items-center rounded-3xl">
            <div class="text-xl flex flex-col mr-52 mb-3  mt-32">
              
              <h1 class="font-bold" >Devis</h1>
                   <p>Vous n'avez pas encore importer votre document ! </p>  
            </div>
            <DropFile/>
              
             


              </div>
            </div>
   </template>