<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
  <button
        @click="isOpen = true"
        class="bg-cyan-700 text-white	w-60 h-10 rounded text-sm  "
        type="button"
      >
     Tester   
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
        <div class="max-w-4xl  p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Verification Terminer !</h3>
            <svg
              @click="isOpen = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-600 cursor-pointer"
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
       
        <p>{{count}} Erreur</p> 
    </div>
    <table class="w-full text-sm text-left text-blue-100 mt-14  border-separate">
        <thead class="text-xs text-white uppercase bg-white  dark:text-black ">
            <tr v-for="(item , index) in Lists" v-bind:key="index">
                <th scope="col" class="py-3 px-4 text-center text-white bg-cyan-700 border-2 rounded-l-md">
                  1
                </th>
                <th scope="col" class="py-3 text-center text-slate-700 bg-slate-200 border-2">
                    {{item.name}}
                </th>
                <th scope="col" class="py-3 px-6 bg-slate-100 border-2 text-slate-700 lowercase">
                    {{item.message}}
                </th>
                <div>
                  <th v-if="item.status==='success' " scope="col" class="py-3 px-6 ">
                    <img src="../assets/check.png" alt="" class="w-5 h-5">
                </th>
              
                <th v-else scope="col" class="py-3 px-6"  >
                    <img src="../assets/illustration.png" alt="" class="w-5 h-5">
                </th>
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
      count:0,
      isOpen: false,
      Lists : [] ,

    };
    
  },

  mounted () {
        axios.get("/api/dossiers/compare/?dossier_id=1").then(res=>{
             this.Lists= res.data
             console.log(this.Lists)
        })

    },

  
    methods: {
          Increment() {
           this.count++;
          }
  },




};
</script>