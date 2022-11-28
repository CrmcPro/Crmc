<template >
    <div>
        <div class="bg-slate-200 late-200 p-4 rounded-md ">
         
         <h1 class="text-gray-600  text-left p-2  font-semibold">Montants</h1>
         <div class="flex flex-row " v-if="pochette.total_ttc">
         <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Total°TTC</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-red-600 font-bold text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.total_ttc" :disabled="this.Modifer"/>
         </div>
         <div class="flex flex-row " v-if="pochette.reste_payer">
       <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Reste à payer</h1>
      <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.reste_payer" :disabled="this.Modifer"/>
         </div>
       <div class="flex flex-row  " v-if="pochette.prime_cee">
        <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Prime CEE</h1>
        <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']"  :value="pochette.prime_cee" :disabled="this.Modifer" />
      </div>
     </div>
    </div>
         
</template>



<script>
import {mapGetters} from 'vuex'
export default {
    props : ['Modifer'],

  name:'Montants',
  data(){
    return {
     }

  },
  computed : {
    ...mapGetters(['pochette' , 'pochette_id', 'Modifer']),
     
  },
  methods: {
 

  },

}
</script>