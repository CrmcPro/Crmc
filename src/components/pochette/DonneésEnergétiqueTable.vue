<template>
     <div class=" bg-slate-200   p-5 rounded-xl ">
                                        <h1  class="text-gray-600  text-left p-2 px-2 font-semibold">Données Energétique</h1>
                      <div class="flex flex-row" v-if="pochette.cef_init && pochette.cep_init">
  
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Cef_init / Cep_init</h1>
                        <input class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center"  :value='pochette.cef_init + " / "+ pochette.cep_init' :disabled="this.Modifer"/>
                      </div>
                      <div class="flex flex-row" v-if="pochette.cef_projet">
  
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs  font-bold	bg-cyan-600">cef_projet /cep_projet </h1>
                        <input class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center" :value='pochette.cef_projet+" / " +pochette.cep_projet' :disabled="this.Modifer" />
                      </div>
                      <div class="flex flex-row " v-if="pochette.ref_audit">
  
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">ref_audit</h1>
                        <input class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center " :value='pochette.ref_audit' :disabled="this.Modifer"/>
                      </div>
                    
              
                        
                       <div class="flex flex-row " v-if="pochette.date_visite">
                         <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date_visite
                        </h1>
                         <input class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center" :value="pochette.date_visite"  :disabled="this.Modifer"/>
                       </div>
                     
                          <div class="flex flex-row " v-if="pochette.prime_cee">
                            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">version_logiciel</h1>
                            <input class="border rounded-r-md border-slate-200 bg-white flex-row  w-80 text-xs py-2 text-black  text-center" :value="pochette.version_logiciel ? pochette.version_logiciel : 'null' "  :disabled="this.Modifer"/>
                         </div>
                       
                        </div> 
</template>


<script>
import {mapGetters} from 'vuex'
export default {
  props : ['Modifer'],
  name:'DonneésEnergétiqueTable',
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
