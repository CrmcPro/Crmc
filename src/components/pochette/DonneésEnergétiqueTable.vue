<template >
     <div class= "bg-slate-200  p-5 rounded-xl  ">
                      <h1  class="text-gray-600  text-left p-2 px-2 font-semibold">Données Energétique</h1>
                      
                      <div class="flex flex-row" v-if="pochette.cef_init && pochette.cep_init">
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Cef Initiale / Cep Initiale</h1>
                        <input  :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']"   :value='pochette.cef_init + " / "+ pochette.cep_init' :disabled="this.Modifer"/>
                      </div>

                      <div class="flex flex-row" v-if="pochette.cef_initial && pochette.cep_initial">
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Cef Initiale / Cep Initiale</h1>
                        <input  :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']"   :value='pochette.cef_initial + " / "+ pochette.cep_initial' :disabled="this.Modifer"/>
                      </div>


                      <div class="flex flex-row" v-if="pochette.cef_projet">
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs  font-bold	bg-cyan-600">Cef projet / Cep projet </h1>
                        <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.cef_projet+" / " +pochette.cep_projet' :disabled="this.Modifer" />
                      </div>
                      <div class="flex flex-row " v-if="pochette.ref_audit">
  
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Référence Audit</h1>
                        <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.ref_audit' :disabled="this.Modifer"/>
                      </div>
                    
                      <div class="flex flex-row" v-if="pochette.gain_energetique">
                      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Gain Energétique</h1>
                      <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.gain_energetique' :disabled='this.Modifer'/>
                      </div> 

                      <div class="flex flex-row" v-if="pochette.nature_chauffage">
                      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Nature de chauffage</h1>
                      <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.nature_chauffage' :disabled='this.Modifer'/>
                      </div> 

                      <div class="flex flex-row" v-if="pochette.rge_qualification">
                      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">RGE Qualification</h1>
                      <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.rge_qualification' :disabled='this.Modifer'/>
                      </div> 
                    
                         <div class="flex flex-row " v-if="pochette.parcelle_cadastrale">
                            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Parecelle Cadastrale</h1>
                            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.parcelle_cadastrale ? pochette.parcelle_cadastrale : 'null' "  :disabled="this.Modifer"/>
                         </div>

                      
                                              <!-- Surface habitable and surface shon -->
                        <div class="flex flex-row" v-if="pochette.surface_habitable">
                            <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Surface habitable et Surface Shon</h1>
                            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.surface_habitable+" / " +pochette.surface_shon'  :disabled="this.Modifer"/>
                        </div>
                         <div class="flex flex-row " v-if="pochette.version_logiciel">
                            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Version du logiciel</h1>
                            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.version_logiciel ? pochette.version_logiciel : 'null' "  :disabled="this.Modifer"/>
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
      activeClass: 'active',
    errorClass: 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center'
     }

  },
  computed : {
    ...mapGetters(['pochette' , 'pochette_id']),
     
  },
  methods: {
 

  },

}
</script>
