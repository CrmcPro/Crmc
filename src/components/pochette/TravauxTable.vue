<template>
     <div  class="py-5 flex flex-col rounded-lg"  v-if="pochette_id === 1">
                                     <div class="py-5 flex  flex-col justify-center items-center rounded-lg">
                                       <div class=" rounded-lg p-5 bg-slate-200 late-200">
                                       <h1 class="text-gray-600  text-left px-3 p-1 font-semibold">Travaux</h1>
                                     <div class="flex justify-center ">

                                      <div class="border rounded-tl-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">id</div>
                                     <div class="border  border-slate-200 py-2 w-80 text-xs font-bold	bg-cyan-600">Nom travail</div>
                                     <div class="border  border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Nom certifcat</div>
                                     <div class="border rounded-tr-md  border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Nom entreprise</div>
                                    </div>
                                 
                                    <div>
                                    <div class="flex flex-row  justify-center bg-slate-200 late-200 " v-for="item in pochette.travaux" v-bind:key=" item">
                                        <input :class='[this.Modifer ?"border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold text-center	bg-slate-100" : "border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold text-center	bg-white"]' :value='item.id' :disabled="this.Modifer"/>
                                      <input :class='[this.Modifer ? "border  border-slate-200 py-2 w-80 text-xs text-gray-600 font-bold	bg-slate-100 text-center" : "border  border-slate-200 py-2 w-80 text-xs text-gray-600 font-bold	bg-white text-center"]'  :value='item.nom_travail' :disabled="this.Modifer" />
                                      <input :class='[this.Modifer ?"border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold text-center	bg-slate-100" : "border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold text-center	bg-white"]' :value='item.num_certificat' :disabled="this.Modifer" />
                                      <input :class='[this.Modifer ?"border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold text-center	bg-slate-100" : "border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold text-center	bg-white"]'  :value='item.nom_entreprise' :disabled="this.Modifer"/>
                                      </div>
                                    </div>
                                  </div>
                                 </div>
                                 ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']"
    </div>
</template>.
<script>
import {mapGetters} from 'vuex'
export default {
  props : ['Modifer'],
  name:'TravauxTable',
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
