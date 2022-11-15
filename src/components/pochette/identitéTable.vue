<template >
    <div class="bg-slate-200   p-5 rounded-xl mr-14" v-if="pochette_id === 1">
        <h1  class="text-gray-600  text-left p-2 px-2 font-semibold" >Identité</h1>
     <div class="flex flex-row" v-if="pochette.num_devis">
       <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600">N°devis</h1>
       <input class="border rounded-r-md border-slate-200  bg-white flex-row  text-xs py-2 w-80 text-black text-center" :value='pochette.num_devis' :disabled="this.Modifer"/>
     </div>
     <div class="flex flex-row" v-if="pochette.numero_client">
       <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600 text-center">N°client</h1>
        <input class="border rounded-r-md border-slate-200  bg-white flex-row text-center  text-xs py-2 w-80 text-black" :value='pochette.numero_client'  :disabled="this.Modifer"/>
     </div>
      <div class="flex flex-row" v-if="pochette.date_devis">
    
       <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date°devis</h1>
       <input class="border rounded-r-md border-slate-200   flex-row text-center text-xs py-2 bg-white w-80 text-black " :value='pochette.date_devis' :disabled="this.Modifer"/>
       </div>
    
     <div class="flex flex-row" v-if="pochette.date_visite_prealable">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">date°visite°prealable</h1>
      <input class="border rounded-r-md border-slate-200   flex-row  text-center text-xs py-2 bg-white w-80 text-black" :value='pochette.date_visite_prealable' :disabled="this.Modifer" />
      </div>
     
     <div class="flex flex-row " v-if="pochette.date_cette_proposition">
       <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date_cette_proposition
      </h1>
     <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row text-xs py-2 w-80 text-black">{{pochette.date_cette_proposition }}</h1>
    </div>
           <!-- montant_prime -->
           
           <!-- date_audit                    -->
           <div class="flex flex-row " v-if="pochette.date_audit">
             <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">date_audit
            </h1>
             <input class="border rounded-r-md border-slate-200 bg-white text-center text-xs py-2 flex-row  w-80 text-black" :value='pochette.date_audit' :disabled='this.Modifer' />
           </div>
           <div class="flex flex-row " v-if="pochette.adresse_email">
             <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs 	bg-cyan-600">Adresse_email
    
            </h1>
             <input class="border rounded-r-md border-slate-400 text-center flex-row  w-80 text-black" :value='pochette.adresse_email' :disabled='this.Modifer'/>
           </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props : ['Modifer'],

  name:'identitéTable',
  data(){
    return {
     }

  },
  computed : {
    ...mapGetters(['pochette' , 'pochette_id']),
     
  },
  methods: {
 

  },

}
</script>
