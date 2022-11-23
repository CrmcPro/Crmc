<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <button
        @click="isOpen = true"
        class="bg-cyan-700 text-white	w-60 h-10 rounded text-sm  "
        type="button"
      >
      Comparer tous les documents
      </button>

      <div
        v-show="isOpen"
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
        "
      >
        <div class="w-4/5 p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Verification Terminer !</h3>
            <svg
              @click="isOpen = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8  cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4">
            <div class="overflow-x-auto relative sm:rounded-lg ">
    
    <div>    
       
        <p class="text-red-600 font-bold">{{CountErr}} Erreur</p> 
    </div>
    <table class="w-full text-sm text-left text-blue-100   border-separate">
        <thead class="text-xs text-white  bg-white  dark:text-black ">
                <h1 class="hidden">{{count=1}} {{CountErr=0}} </h1> 

            <tr v-for="(item , index) in Lists" v-bind:key="index">
              <div class="flex flex-row" v-if="index !== 'cef_cep'" >

                <th scope="col" class="py-3  w-16  text-center text-white bg-cyan-700 border-2 rounded-l-md">
                  {{count++}}
                </th>
                <th scope="col" :class='[item.status!=="success" ? "bg-red-600 rounded-l-md py-3 w-64 text-center text-white  border-2" : 
                   "py-3 w-64 text-center text-slate-700 bg-slate-200 border-2"]'
                 >
                    {{item.name}}
                </th>
                <th scope="col" :class='[item.status!=="success" ? " py-3 w-4/5 pl-6 bg-red-200 border-2" :"py-3 w-4/5 pl-6 bg-slate-100 border-2 text-slate-700"]'>
                    {{item.message}}
                </th>
                <div>
                  <th v-if="item.status==='success' " scope="col" class="pt-3 px-2 ">
                    <font-awesome-icon icon="fa-solid fa-check"  class="text-green-600 w-5 h-5"/>
                </th>
                
                <th v-else scope="col" class="flex pt-3 px-2  ">
                  <h1 class="hidden">{{CountErr++}}</h1>
                  <font-awesome-icon icon="fa-solid fa-circle-exclamation"   class="text-red-500 h-5 "/> 
                </th>
                
                </div>
              </div>
            
            </tr>
            <tr v-for=" (el , i) in Listt " :key="i++">
              <div class="flex flex-row items-start" v-if="index !== 'cef_cep'" >

            <th scope="col" class="py-3  w-16  text-center text-white bg-cyan-700 border-2 rounded-l-md">
                {{count +'/'+i}}
            </th>
              <th scope="col" class="py-3 w-64 text-center text-slate-700 bg-slate-200 border-2">
                  {{el.name}}
              </th>
              <th scope="col" class="py-3 w-4/5 pl-6 bg-slate-100 border-2 text-slate-700">
                {{el.message}}
              
              </th>
        <div>
           <th v-if="el.status==='success' " scope="col" class="pt-3 px-2 ">
            <font-awesome-icon icon="fa-solid fa-check"  class="text-green-600 w-5 h-5"/>
            </th>

         <th v-else scope="col" class=" pt-3 px-2 "  >
          <font-awesome-icon icon="fa-solid fa-circle-exclamation"   class="text-red-500  w-5 h-5 "/> 
               </th> 

          </div>
          </div>
            </tr>
        </thead>
    </table>
                          <div class=" justify-center flex pb-3 pt-8">
                               <button
                                 type="button"
                                 class=" w-36 py-3 bg-[#13698f] text-white text-sm rounded "   
                                 @click="isOpen = false"              
                                 >          
                                 Valider
                              </button>
                           </div>
                        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name :'ModelList' ,
  data() {
    return {
      CountErr:0,
      count:1,
      isOpen: false,
      Lists : [] ,
      Listt : [] ,
    };
    
  },
  mounted () {
        axios.get("/api/dossiers/compare/?dossier_id=1").then(res=>{
             this.Lists= res.data
             console.log(this.Lists)
             this.Listt= res.data.cef_cep
             console.log(res.data.cef_cep)
            
        })
    },
};
</script>