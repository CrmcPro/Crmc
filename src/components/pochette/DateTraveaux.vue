<template>
    <div  class="py-5 flex flex-col rounded-lg">
                                    <div class="py-5 flex  flex-col justify-center items-center rounded-lg">
                                      <div class=" rounded-lg p-5 bg-slate-200 late-200">
                                      <h1 class="text-gray-600  text-left px-3 p-1 font-semibold">Travaux réalisés</h1>
                                    <div class="flex justify-center ">

                                   </div>
                                
                                   <div class="flex flex-row" v-if="pochette.dates_travaux">
                                        <h1 class="border rounded-l-md border-slate-200 py-2 w-80  text-xs  font-bold	bg-cyan-600">Date des travaux réalisés</h1>
                                       </div>
                                       <input :class="[this.Modifer ? 'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.dates_travaux[0]' :disabled="this.Modifer" />
                                       <br>
                                       <input :class="[this.Modifer ? 'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.dates_travaux[1]' :disabled="this.Modifer" />
                                       <br>
                                       <input :class="[this.Modifer ? 'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.dates_travaux[2]' :disabled="this.Modifer" />
                                       <br>
                                       <input :class="[this.Modifer ? 'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.dates_travaux[3]' :disabled="this.Modifer" />
                                       <br>
                                       <input :class="[this.Modifer ? 'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.dates_travaux[4]' :disabled="this.Modifer" />
                                       <br>
                                       <input :class="[this.Modifer ? 'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.dates_travaux[5]' :disabled="this.Modifer" />
                                       <br>

                                 </div>
                                </div>
   </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
 props : ['Modifer'],
 name:'DateTraveaux',
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
