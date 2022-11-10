<script  >
 import Header from "./Header.vue"
 import { useRouter} from "vue-router"
 import DropFile from "./DropFile.vue"
import DescriptionDevis from "./DescriptionDevis.vue"
 export default {

name:"Devis",
data()
{
    return {
        router:useRouter(),
        View: false
    }
},
props :{
    show: {
    type: Boolean,
    default: false,
  },
  },
  components: {
    Header ,
    DropFile ,
    DescriptionDevis
  },

mounted() {
},
methods : {
  NavigationToAccueil(){
       this.router.push("/Accueil")
     }
}
}
     const router=useRouter()



  </script>

<template>
  <Header/>
  <section class="  mt-8  flex flex-col items-center  ">
                <div class=" w-11/12 " >
                  <table class="  text-white text-sm text-center w-full  h-10">
                    <div class="absolute ml-2 mt-1.5 w-1.5 h-7  rounded-3xl  bg-cyan-700"></div>
                    <thead>
                      <tr>
                        <td class=" font-medium text-solid  rounded-l  w-24 bg-white text-cyan-700"> Devis</td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>Audit</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>CEE</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>AH</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>Facture</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>SYNTHESE </button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>AMO</button></td>
                        <td class="border border-slate-300	bg-cyan-700 w-24"><button>FICHE_PRECO</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>LISTING_ENTREPRISES </button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>GEOPORTAIL </button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>GEOLOCALISATION</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>JUSTIF_DOMICILE</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>COFRAC</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button>IMPO</button></td>

                      </tr>
                    </thead>
                </table>
                </div>
              </section>  
              
  <div  v-if="View" class="bg-slate-100 min-w-max">   
      
      <section class="bg-white h-full">
              <DescriptionDevis/>              
        </section>
   </div>

        <section v-if="!View">
          <div class="bg-slate-100  min-w-max ">
           <div  class="bg-white flex flex-col  items-center rounded-3xl">
          
            <DropFile/>
              </div>
            </div>
   </section>
</template>

  <style>
  .toggle {
      --width: 70px;
      --height: calc(var(--width) / 4);

      position: relative;
      display: inline-block;
      width: var(--width);
      height: var(--height);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: var(--height);
      cursor: pointer;
      margin-top: 2% ;
      margin-left: 45%;
    }

    .toggle input {
      display: none;
    }

    .toggle .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: var(--height);
      background-color: rgb(255, 214, 80);
      transition: all 0.4s ease-in-out;
    }

    .toggle .slider::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(var(--height));
      height: calc(var(--height));
      border-radius: calc(var(--height) / 2);
      background-color: #f3953d;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      transition: all 0.4s ease-in-out;
    }

    .toggle input:checked+.slider {
      background-color: #2196F3;
    }

    .toggle input:checked+.slider::before {
      transform: translateX(calc(var(--width) - var(--height)));
    }

    .toggle .labels {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 12px;
      font-family: sans-serif;
      transition: all 0.4s ease-in-out;
    }

    .toggle .labels::after {
      content: attr(data-off);
      position: absolute;
      right: 5px;
      color: #f3953d;
      opacity: 1;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
      transition: all 0.4s ease-in-out;
    }

    .toggle .labels::before {
      content: attr(data-on);
      position: absolute;
      left: 5px;
      color: #ffffff;
      opacity: 0;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
      transition: all 0.4s ease-in-out;
    }

    .toggle input:checked~.labels::after {
      opacity: 0;
    }

    .toggle input:checked~.labels::before {
      opacity: 1;
    }
  
  </style>