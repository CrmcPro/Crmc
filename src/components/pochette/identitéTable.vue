<template >
    <div class="bg-slate-200   p-5 rounded-xl mr-14">
        <h1  class="text-gray-600  text-left p-2 px-2 font-semibold" >Identité</h1>
     <div class="flex flex-row" v-if="pochette.num_devis">
       <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600">N° Devis</h1>
       <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.num_devis' :disabled="this.Modifer"/>
     </div>
     <div class="flex flex-row" v-if="pochette.numero_client">
       <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600 text-center">N° Client</h1>
        <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.numero_client'  :disabled="this.Modifer"/>
     </div>
     <div class="flex flex-row" v-if="pochette.date_facture">
       <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600 text-center">N° Facture</h1>
        <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_facture'  :disabled="this.Modifer"/>
     </div>
         <!-- date_audit-->
         <div class="flex flex-row " v-if="pochette.date_audit">
             <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date Audit
            </h1>
             <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_audit' :disabled='this.Modifer' />
           </div>

      <div class="flex flex-row" v-if="pochette.date_devis">
       <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date Devis</h1>
       <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_devis' :disabled="this.Modifer"/>
       </div>
    
     <div class="flex flex-row" v-if="pochette.date_visite_prealable">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Date de visite préalable</h1>
      <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_visite_prealable' :disabled="this.Modifer" />
      </div>
     
     <div class="flex flex-row " v-if="pochette.date_cette_proposition">
       <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de cette proposition
      </h1>
     <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row text-xs py-2 w-80 text-black">{{pochette.date_cette_proposition }}</h1>
    </div>

           <div class="flex flex-row " v-if="pochette.adresse_email">
             <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs 	bg-cyan-600">Adresse Email
            </h1>
             <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.adresse_email' :disabled='this.Modifer'/>
           </div>

           <div class="flex flex-row " v-if="pochette.date_debut_des_travaux">
             <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de debut et fin des travaux
            </h1>
             <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_debut_des_travaux + " jusqu`à "+ pochette.date_fin_des_travaux' :disabled='this.Modifer' />
           </div>
           


           <div class="flex flex-row " v-if="pochette.date_facture">
             <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de facture
            </h1>
             <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_facture' :disabled='this.Modifer' />
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
