<script setup >
 import Header from "../components/Header.vue"
 import { useRouter} from "vue-router"
     const router=useRouter()
     const NavigationToAccueil=()=>{
        router.push("/Accueil")
     }

 const components = {
Header
};

</script>

<template>
  <div class="bg-slate-100 min-w-max">   
      <section>
        <Header/>
      </section>
            
      <section class="bg-white h-full mt-6">
        <section class="  mt-8  flex flex-col items-center ">
                <div class=" w-11/12 " >
                  <table class="  text-white text-sm text-center w-full  h-10">
                    <div class="absolute ml-2 mt-1.5 w-1.5 h-7  rounded-3xl  bg-cyan-700"></div>
                    <thead>
                      <tr>
                        <td class=" font-medium text-solid  rounded-l  w-28 bg-white text-cyan-700 "><a href="./AjouterDevis"> Devis</a></td>
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
             
                  <section>
                    <table class="pt-16 pb-7  flex item-center text-center justify-center ">
                      <tr>
                      <td class=" pr-80 font-bold text-lg ">Devis</td>
                      <td class=" pl-80">
                        <button class="bg-cyan-700 w-32 h-10 rounded text-sm text-white"> Modifier
                          <font-awesome-icon icon="fa-solid fa-pen" color="" class="ml-2"/>
                        </button>
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

              <section class="item-center text-center justify-center">                       
                  <h2 class="items-left font-bold pt-4 pb-4">Description</h2>
                  <p class="text-slate-400 font-semibold text-sm">Lorem, ipsum dolorequuntur eum aperiama desegfegergegegruntdgege iure repellat!</p>
              </section>

              
        </section>
               

   </div>
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