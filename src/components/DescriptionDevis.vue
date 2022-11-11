<template>
  <div class="bg-slate-100 min-w-max">   
      <section class="bg-white h-full">
      
                  <section>
                    <table class="pt-16 pb-7  flex item-center text-center justify-center ">
                      <tr>
                      <td class=" pr-80 font-bold text-lg ">Devis</td>
                      <td class=" pl-80" >
                        <button class="bg-cyan-700 w-32 h-10 rounded text-sm text-white" href="'http://192.168.1.36:8000'+{{pochette.url_pdf}}"> Voir PDF
                          <font-awesome-icon icon="fa-solid fa-eye" color="" class="ml-2" />
                        </button>
                      
                      </td>
                      <td v-if="!Modifer" @click="Modifer = !Modifer" >
                        <button class="bg-cyan-700 w-32 h-10 rounded text-sm text-white"> Modifier
                          <font-awesome-icon icon="fa-solid fa-pen"  class="ml-2"/>
                        </button>
                      
                      </td>
                      <td v-if="Modifer"  @click="Modifer = !Modifer">

                         <button class="bg-cyan-700 w-32 h-10 rounded text-sm text-white"> Enregister
                          <font-awesome-icon icon="fa-solid fa-check"  class="ml-2"/>
                           </button>
                        </td>

                    </tr>
                    </table>
                  </section>
              <section v-if="!Modifer">
                <div class="flex flex-center justify-center items-center">
                  <div  class="  text-white border-separate border-spacing-1 flex flex-col item-center text-center justify-center">
                    <div class="flex flex-row" v-if="pochette.numero_client">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600 text-center">N°client</h1>
                       <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.numero_client}}</h1>
                    </div>
                    <div class="flex flex-row" v-if="pochette.num_devis">
                <h1  class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">N°devis</h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.num_devis}}</h1>
                    </div>
                     <div class="flex flex-row" v-if="pochette.date_devis">
 
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">Date°devis</h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.date_devis}}</h1>
                      </div>
                   
                    <div class="flex flex-row" v-if="pochette.date_visite_prealable">
                     <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">date°visite°prealable</h1>
                     <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.date_visite_prealable}}</h1>
                     </div>
                    <div class="flex flex-row" v-if="pochette.gain_energetique">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">gain°energetique</h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.gain_energetique}}</h1>
                    </div> 
                    <div class="flex flex-row" v-if="pochette.cef_init && pochette.cep_init">

                      <h1 class="border rounded-l-md border-white py-2 w-40  text-sm font-semibold	bg-cyan-600">Cef_init / Cep_init</h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.cef_init}} <span class="text-red-600 font-bold"> /</span> {{pochette.cep_init}}</h1>
                    </div>
                    <div class="flex flex-row" v-if="pochette.cef_projet">

                      <h1 class="border rounded-l-md border-white py-2 w-40  text-sm font-semibold	bg-cyan-600">cef_projet /cep_projet </h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.cef_projet}}<span class="text-red-600 font-bold"> /</span>  {{pochette.cep_projet}} </h1>
                    </div>
                    <div class="flex flex-row " v-if="pochette.ref_audit">

                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">ref_audit</h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black " >{{pochette.ref_audit}}</h1>
                    </div>
                    <div class="flex flex-row " v-if="pochette.total_ttc">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">total_ttc</h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.total_ttc}}</h1>
                    </div>
            
                      <div class="flex flex-row " v-if="pochette.reste_payer">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">reste_payer</h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.reste_payer}}</h1>
                     </div>
                    <div class="flex flex-row " v-if="pochette.prime_cee">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">prime_cee</h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.prime_cee}}</h1>
                    </div>
                    <!-- version_logiciel -->
                    <div class="flex flex-row " v-if="pochette.prime_cee">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">version_logiciel</h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.version_logiciel ? pochette.version_logiciel : "Null" }}</h1>
                    </div>
                    <div class="flex flex-row " v-if="pochette.date_visite">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">Date_visite
                     </h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.date_visite }}</h1>
                    </div>
                    <div class="flex flex-row " v-if="pochette.adresse_email">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">Adresse_email

                     </h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.adresse_email }}</h1>
                    </div>
                    <!-- date_cette_proposition -->
                    <div class="flex flex-row " v-if="pochette.date_cette_proposition">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">Date_cette_proposition
                     </h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.date_cette_proposition }}</h1>
                    </div>
                    <!-- montant_prime -->
                    <div class="flex flex-row " v-if="pochette_id == 3">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">Montant_prime
                     </h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.montant_prime ? pochette.montant_prime : 'Null'  }}</h1>
                    </div>
                    <!-- date_audit                    -->
                    <div class="flex flex-row " v-if="pochette.date_audit">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">date_audit
                     </h1>
                      <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.date_audit}}</h1>
                    </div>
                  </div>
                </div>
              </section>
              <section v-if="Modifer">
                <div class="flex flex-center justify-center items-center">
                  <div  class="  text-white border-separate border-spacing-1 flex flex-col item-center text-center justify-center">
                    <div class="flex flex-row">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600 text-center">Numero_client</h1>
                       <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder={{pochette.numero_client}} />
                    </div>
                    <div class="flex flex-row">
                      <h1  class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">N_devis</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.num_devis}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row">

                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">date_devis</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.date_devis}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row">
                     <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">date_visite_prealable</h1>
                     <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.date_visite_prealable}}</h1> -->
                     <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />

                     </div>
                    <div class="flex flex-row">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">gain_energetique</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.gain_energetique}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />

                    </div> 
                    <div class="flex flex-row">

                      <h1 class="border rounded-l-md border-white py-2 w-40  text-sm font-semibold	bg-cyan-600">cef_init</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.cef_init}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row">

                      <h1 class="border rounded-l-md border-white py-2 w-40  text-sm font-semibold	bg-cyan-600">cef_projet / cep_projet</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.cef_projet}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row ">

                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">ref_audit</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black " >{{pochette.ref_audit && pochette.ref_audit}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row ">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">total_ttc</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.total_ttc}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />

                    </div>
            
                      <div class="flex flex-row ">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">reste_payer</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.reste_payer}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />

                     </div>
                    <div class="flex flex-row ">
                      <h1 class="border rounded-l-md border-white py-2 w-40 text-sm font-semibold	bg-cyan-600">prime_cee</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black">{{pochette.prime_cee}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-96 text-black" placeholder="trst" />
                    </div>


                  </div>
                </div>
              </section>
              <section class="item-center text-center justify-center py-6">                       
                  <h2 class="items-left font-bold pt-4 pb-4">Description</h2>
                  <p class="text-slate-400 font-semibold text-sm">Lorem, ipsum dolorequuntur eum aperiama desegfegergegegruntdgege iure repellat!</p>
              </section>
        </section>
   </div>
   </template>


<script>
import {mapGetters} from 'vuex'
export default {
  name:'DescriptionDevis',
  data(){
    return {
           Modifer : false 
     }

  },
  computed : {
     ...mapGetters(['pochette' , 'pochette_id']),
     
  },
  methods: {
 

  }

}
</script>
