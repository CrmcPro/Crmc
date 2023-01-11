<template >
  <div class= "bg-slate-200  p-5 rounded-xl  ">
                   <h1  class="text-gray-600  text-left p-2 px-2 font-semibold">Données Energétique</h1>
                   
                   <div class="flex flex-row" v-if="pochette.cef_init">
                     <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Cef Initiale</h1>
                     <input  :class="[this.Modifer ?  'border bg-slate-100  flex-row  w-64 text-xs py-2 text-black text-center': 'border  border-slate-200 bg-white  flex-row  w-64 text-xs py-2 text-black text-center']"   :value='pochette.cef_init'  @input="event => pochette.cef_init = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
                     <input class=" border rounded-r-md  bg-slate-100  flex-row w-16  text-xs py-2 text-center text-black" value="KWh/m²" disabled="disabled" />

                    </div>

                   <div class="flex flex-row" v-if="pochette.cep_init">
                     <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Cep Initiale</h1>
                     <input  :class="[this.Modifer ?  'border  bg-slate-100  flex-row  w-64 text-xs py-2 text-black text-center': 'border  border-slate-200 bg-white  flex-row  w-64 text-xs py-2 text-black text-center']"   :value='pochette.cep_init'  @input="event => pochette.cep_init = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                     <input class=" border rounded-r-md  bg-slate-100  flex-row w-16  text-xs py-2 text-center text-black" value="KWh/m²" disabled="disabled" />
                    </div>

                   <div class="flex flex-row" v-if="pochette.cef_initial">
                     <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Cef Initiale </h1>
                     <input  :class="[this.Modifer ?  'border bg-slate-100  flex-row  w-64 text-xs py-2 text-black text-center': 'border border-slate-200 bg-white  flex-row  w-64 text-xs py-2 text-black text-center']"   :value='pochette.cef_initial'  @input="event => pochette.cef_initial = event.target.value"  onfocus="this.value=''" :disabled="this.Modifer"/>
                     <input class=" border rounded-r-md  bg-slate-100  flex-row w-16  text-xs py-2 text-center text-black" value="KWh/m²" disabled="disabled" />

                    </div>

                   <div class="flex flex-row" v-if="pochette.cep_initial">
                     <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Cep Initiale</h1>
                     <input  :class="[this.Modifer ?  'border  bg-slate-100  flex-row  w-64 text-xs py-2 text-black text-center': 'border border-slate-200 bg-white  flex-row  w-64 text-xs py-2 text-black text-center']"   :value='pochette.cep_initial'  @input="event => pochette.cep_initial = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                     <input class=" border rounded-r-md  bg-slate-100  flex-row w-16  text-xs py-2 text-center text-black" value="KWh/m²" disabled="disabled" />

                    </div>


                   <div class="flex flex-row" v-if="pochette.cef_projet ">
                     <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs  font-bold	bg-cyan-600">Cef projet </h1>
                     <input :class="[this.Modifer ?  'border  bg-slate-100  flex-row  w-64 text-xs py-2 text-black text-center': 'border  border-slate-200 bg-white  flex-row  w-64 text-xs py-2 text-black text-center']" :value='pochette.cef_projet' @input="event => pochette.cef_projet = event.target.value" onfocus="this.value=''" :disabled="this.Modifer" />
                     <input class=" border rounded-r-md  bg-slate-100  flex-row w-16  text-xs py-2 text-center text-black" value="KWh/m²" disabled="disabled" />

                    </div>

                   <div class="flex flex-row" v-if="pochette.cep_projet ">
                     <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs  font-bold	bg-cyan-600">Cep projet </h1>
                     <input :class="[this.Modifer ?  'border bg-slate-100  flex-row  w-64 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-64 text-xs py-2 text-black text-center']" :value='pochette.cep_projet'  @input="event => pochette.cep_projet = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer" />
                     <input class=" border rounded-r-md  bg-slate-100  flex-row w-16  text-xs py-2 text-center text-black" value="KWh/m²" disabled="disabled" />
                    </div>
            
                   <div class="flex flex-row" v-if="pochette.gain_energetique  ">
                   <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Gain Energétique</h1>
                   <input :class="[this.Modifer ?  'border   bg-slate-100  flex-row  w-64 text-xs py-2 text-black text-center': 'border border-slate-200 bg-white  flex-row  w-64 text-xs py-2 text-black text-center']" :value='pochette.gain_energetique'  @input="event => pochette.gain_energetique = event.target.value" onfocus="this.value=''"    :disabled='this.Modifer'/>
                   <input class=" border rounded-r-md  bg-slate-100  flex-row w-16  text-xs py-2 text-center text-black" value="%" disabled="disabled" />
                  </div> 

                  <div class="flex flex-row " v-if="pochette.ref_audit ">
                     <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Référence Audit</h1>
                     <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.ref_audit "  @input="event => pochette.ref_audit = event.target.value" onfocus="this.value=''"   :disabled="this.Modifer"/>
                   </div>

                   <div class="flex flex-row " v-if="pochette.chauffage_avant_travaux ">
                     <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Chauffage avant traveaux</h1>
                     <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.chauffage_avant_travaux "  @input="event => pochette.chauffage_avant_travaux = event.target.value" onfocus="this.value=''"   :disabled="this.Modifer"/>
                   </div>

                   <div class="flex flex-row" v-if="pochette.surface_des_murs_isoler ">
                   <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Surface des murs isoler</h1>
                   <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.surface_des_murs_isoler "  @input="event => pochette.surface_des_murs_isoler = event.target.value" onfocus="this.value=''"    :disabled='this.Modifer'/>
                   </div> 


                   <div class="flex flex-row" v-if="pochette.nature_chauffage ">
                   <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Nature de chauffage</h1>
                   <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.nature_chauffage "  @input="event => pochette.nature_chauffage = event.target.value" onfocus="this.value=''"    :disabled='this.Modifer'/>
                   </div> 

                   <div class="flex flex-row" v-if="pochette.rge_qualification ">
                   <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">RGE Qualification</h1>
                   <input  :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']"  :value="pochette.rge_qualification "  @input="event => pochette.rge_qualification = event.target.value" onfocus="this.value=''"   :disabled='this.Modifer'/> 
                   </div>
                 
                      <div class="flex flex-row " v-if="pochette.parcelle_cadastrale ">
                         <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Parecelle Cadastrale</h1>
                         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.parcelle_cadastrale  "  @input="event => pochette.parcelle_cadastrale = event.target.value"  onfocus="this.value=''"   :disabled="this.Modifer"/>
                      </div>
                       
                      <div class="flex flex-row" v-if="pochette.surface_shon">
                         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Surface Shon</h1>
                         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.surface_shon'   @input="event => pochette.surface_shon = event.target.value"  onfocus="this.value=''"     :disabled="this.Modifer"/>
                     </div>
                      <!-- Surface habitable and surface shon -->
                     <div class="flex flex-row" v-if="pochette.surface_habitable">
                         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Surface habitable</h1>
                         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.surface_habitable' @input="event => pochette.surface_habitable = event.target.value" onfocus="this.value=''"     :disabled="this.Modifer"/>
                     </div>

                      <div class="flex flex-row " v-if="pochette.version_logiciel">
                         <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Version du logiciel</h1>
                         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.version_logiciel " @input="event => pochette.version_logiciel = event.target.value" onfocus="this.value=''"   :disabled="this.Modifer"/>
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
  }

},
computed : {
 ...mapGetters(['pochette' , 'pochette_id']),
  
},
methods: {


},

}
</script>
