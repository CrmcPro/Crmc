<template >
    <div class="flex  space-x-72">
     <div class="bg-slate-200 late-200 w-96 p-4 m-10 rounded-md ">
         
         <h1 class="text-gray-600  text-left p-2  font-semibold">Scenario 1</h1>
        <div class="flex flex-row " v-if="pochette.scenario_1 || pochette.scenario_1=== null">
         <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Estimation cout du projet</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-red-600 font-bold text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.scenario_1.estimation_cout_projet ? pochette.scenario_1.estimation_cout_projet : 'Null'" @input="event => pochette.estimation_cout_projet = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>     
        </div>

         <div class="flex flex-row " v-if="pochette.scenario_1 || pochette.scenario_1=== null">
             <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Prime CEE </h1>
             <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.scenario_1.prime_cee ? pochette.scenario_1.prime_cee : 'Null'"  @input="event => pochette.prime_cee = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
        </div>
       <div class="flex flex-row  " v-if="pochette.scenario_1 || pochette.scenario_1=== null">
           <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Reste charge</h1>
           <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']"  :value="pochette.scenario_1.reste_charge ? pochette.scenario_1.reste_charge : 'Null' "  @input="event => pochette.reste_charge = event.target.value" onfocus="this.value=''" :disabled="this.Modifer" />
       </div>    
     </div>

     <div class="bg-slate-200 late-200 w-96 p-4 m-10 rounded-md ">
         
         <h1 class="text-gray-600  text-left p-2  font-semibold">Scenario 2</h1>
        <div class="flex flex-row " v-if="pochette.scenario_2 || pochette.scenario_2=== null">
         <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Estimation cout du projet</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-red-600 font-bold text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.scenario_2.estimation_cout_projet ? pochette.scenario_2.estimation_cout_projet : 'Null'" @input="event => pochette.estimation_cout_projet = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>     
        </div>

         <div class="flex flex-row " v-if="pochette.scenario_2 || pochette.scenario_2=== null">
             <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Prime CEE </h1>
             <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.scenario_2.prime_cee ? pochette.scenario_2.prime_cee : 'Null'"  @input="event => pochette.prime_cee = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
        </div>
       <div class="flex flex-row  " v-if="pochette.scenario_2 || pochette.scenario_2=== null">
           <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Reste charge</h1>
           <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']"  :value="pochette.scenario_2.reste_charge ? pochette.scenario_2.reste_charge : 'Null' "  @input="event => pochette.reste_charge = event.target.value" onfocus="this.value=''" :disabled="this.Modifer" />
       </div>    
     </div>
     
     
    </div>
         
</template>



<script>
import {mapGetters} from 'vuex'
export default {
    props : ['Modifer'],

  name:'Scenario',
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