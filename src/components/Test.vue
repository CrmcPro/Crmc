
<template>
    <div class="bg-slate-100 min-w-max">
        <!-- Document && Comparer  -->
      <section>
        <Header/>
      </section>       
        <section class="bg-white h-full mt-8 pt-20">
                <section class=" text-center">
                    <h1 class=" py-3  font-bold text-xl">Vérifier vos documents</h1>
                    <p class="text-xs text-gray-600 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fegegegregeglldmzojihfuiehgjiodhfepariatur quia, beatae dolorem</p>
                    <p class="text-xs  text-gray-600">Lorem ipsum, dolor s consectetur a molestias laboriosam expedita recusandfgeklgjkerghjkerhgkehrgeirhgiuehrffae, undt quas adipisci!</p>
                    <p class="text-xs  text-gray-600 ">Lorem ipsum, dolor s consectetur a moleszevmzkihgruzpjiohgieuhgiorejgjhgfetias laboriosam expedita recusandae, undt quas adipisci!</p>
                </section>

                
              <section class=" flex flex-nowrap  align-middle justify-center  py-2 ">
                  <label for="" class="sr-only">Underline select</label>
                    <select id="underline_select" class="px-2 w-2/6 text-sm bg-transparent border-2 border-gray-300 rounded-lg   ">
                        <option selected class="font-black">Devis-Audit</option>
                       
                    </select>
                    
                    <button class="bg-cyan-700 text-white	w-56 h-10 rounded text-sm " @click="showModal = !showModal">
                      <ModelList  />

                    </button>
                   
               </section>   


                  <section class="pt-20">
                    <div class="flex-wrap flex justify-center"> 
                        <hr class="border-1 border-gray-400 w-80 mt-2 mr-16 ">
                       <p class="font-bold text-xs ">OU</p> 
                        <hr class="border-1 border-gray-400 w-80 mt-2 ml-16 ">
                    </div>   
                  </section>

                    <section class="pt-20 flex justify-center">                 
                      <ModelList  />
                  
                    </section>
        </section>       
     </div>  
  </template>
  <script setup>
   import { useRouter} from "vue-router"
   import ModelList from "../components/ModelListVerification.vue"
   import ModelProgess from "../components/PorgressbarModel.vue"
   import VerificationList from "../components/VerificationList.vue"
   import circleProgressBar from "../components/circleProgressBar.vue"
   import Header from "../components/Header.vue"
   import { ref } from 'vue';
   
   const router=useRouter()
   const NavigationToAccueil=()=>{
          router.push("/Accueil")
       }
const components = {
  ModelList,
  VerificationList,
  circleProgressBar ,
  Header,
  ModelProgess
};

    const showModal = ref(false);
    const ShowProgress = ref(false);


    </script>
  


<style>

</style>