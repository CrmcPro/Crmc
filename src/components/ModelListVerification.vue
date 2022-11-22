<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <button
        @click="isOpen = true"
        class="px-6 py-2 text-white bg-blue-600 rounded shadow"
        type="button"
      >
        Open Model
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
        <div class="max-w-6xl p-6 bg-white rounded-md shadow-xl">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">Verification Terminer !</h3>
            <svg
              @click="isOpen = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-900 cursor-pointer"
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
        <h1 class="font-bold"></h1>
        <p>1 Erreur</p> 
    </div>
    <table class="w-full text-sm text-left text-blue-100 mt-8  border-separate">
        <thead class="text-xs text-white uppercase bg-white  dark:text-black ">
            <tr v-for="(item , index) in this.Lists" v-bind:key="index">
                <th scope="col" class="py-3 px-4 text-center text-white bg-cyan-700 border-2 rounded-l-md">
                    1
                </th>
                <th scope="col" class="py-3 text-center text-slate-700 bg-slate-200 border-2">
                    {{item}}
                </th>
                <th scope="col" class="py-3 px-6 bg-slate-100 border-2 text-slate-700">
                    {{item.message}}
                </th>
                <th scope="col" class="py-3 px-6 ">
                    <img src="../assets/check.png" alt="" class="w-5 h-5">
                </th>
              
            </tr>
            <tr>
                <th scope="col" class="py-3 px-4 text-center text-white bg-cyan-700 border-2 rounded-l-md">
                    2
                </th>
                <th scope="col" class="py-3 text-center bg-slate-200 border-2 text-slate-700">
                    Numéro de client
                </th>
                <th scope="col" class="py-3 px-6 bg-slate-100 border-2 text-slate-700">
                    faire attention que le numero de dossier soit bien en 2021 et non pas 2022
                </th>
                <th scope="col" class="py-3 px-6 ">
                    <img src="../assets/check.png" alt="" class="w-5 h-5">
                </th>
              
            </tr><tr>
                <th scope="col" class="py-3 px-4 text-center text-white bg-cyan-700 border-2 rounded-l-md">
                    3
                </th>
                <th scope="col" class="py-3 text-center bg-slate-200 border-2 text-slate-700">
                    Date devis
                </th>
                <th scope="col" class="py-3 px-6 bg-slate-100 border-2 text-slate-700">
                    S'assurer que la date de signature du devis soit en 2021 soit postérieur à 4 et 5 
                </th>
                <th scope="col" class="py-3 px-6 ">
                    <img src="../assets/check.png" alt="" class="w-5 h-5">
                </th>
              
            </tr><tr>
                <th scope="col" class="py-3 px-4 text-center text-white bg-cyan-700 border-2 rounded-l-md">
                    4
                </th>
                <th scope="col" class="py-3 text-center bg-slate-200 border-2 text-slate-700">
                    Date de visite préable
                </th>
                <th scope="col" class="py-3 px-6 bg-slate-100 border-2 text-slate-700">
                    S'assurer que la date de visite préalable du devis soit en 2021 et antérieur à 3
                </th>
                <th scope="col" class="py-3 px-6 ">
                    <img src="../assets/check.png" alt="" class="w-5 h-5">
                </th>
              
            </tr><tr>
                <th scope="col" class="py-3 px-4 text-center text-white bg-cyan-700 border-2 rounded-l-md">
                    5
                </th>
                <th scope="col" class="py-3 text-center text-white bg-red-600 border-2">
                    Date de l'audit
                </th>
                <th scope="col" class="py-3 px-6 bg-red-100 border-2 text-slate-700">
                    fais attention que le numero de devis soit bien en 2021 et non pas 2022
                </th>
                <th scope="col" class="py-3 px-6 ">
                    <img src="../assets/illustration.png" alt="" class="w-5 h-5">
                </th>
              
            </tr>
            <tr>
                <th scope="col" class="py-3  px-4 text-center text-white bg-cyan-700 border-2 rounded-l-md">
                    6
                </th>
                <th scope="col" class="py-3 text-center  bg-slate-200 border-2 text-slate-700">
                    Number de devis
                </th>
                <th scope="col" class="py-3 px-6 bg-slate-100 border-2 text-slate-700">
                    fais attention que le numero de devis soit bien en 2021 et non pas 2022
                </th>
                <th scope="col" class="py-3 px-6">
                    <img src="../assets/check.png" alt="" class="w-5 h-5">
                </th>
              
            </tr>
            <tr>
                <th scope="col" class="py-3 px-4 text-center text-white bg-cyan-700 border-2 rounded-l-md">
                    7
                </th>
                <th scope="col" class="py-3 text-center bg-slate-200 border-2 text-slate-700">
                    Number de devis
                </th>
                <th scope="col" class="py-3 px-6 bg-slate-100 border-2 text-slate-700">
                    fais attention que le numero de devis soit bien en 2021 et non pas 2022
                </th>
                <th scope="col" class="py-3 px-6">
                    <img src="../assets/check.png" alt="" class="w-5 h-5">
                </th>
              
            </tr>
        </thead>
       
        
    </table>
                            <div class=" justify-center flex pb-3 pt-8">
                               <button
                                 type="button"
                                 class=" w-36 py-3 bg-[#13698f] text-white text-sm rounded "                                       
                                 >
                                            Valider
                                            </button>
                                            </div>
                        </div>
            <button
              @click="isOpen = false"
              class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
            >
              Cancel
            </button>
            <button class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name :'ModelList' ,
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>