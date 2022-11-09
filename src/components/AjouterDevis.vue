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
                        <td class=" font-medium text-solid  rounded-l  w-28 bg-white text-cyan-700 "><a href="./Devis"> Devis</a></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Audit</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>CEE</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>AH</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Facture</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>SYNTHESE </button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>AMO</button></td>
                        <td class="border border-slate-300	bg-cyan-700"><button>FICHE_PRECO</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>LISTING_ENTREPRISES </button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>GEOPORTAIL </button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>GEOLOCALISATION</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>JUSTIF_DOMICILE</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>COFRAC</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>IMPO</button></td>

  
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