
<template>
    <div class="bg-slate-100 min-w-max">
        <!-- Document && Comparer  -->
      <section>
        <Header/>
      </section>       
        <section class="bg-white h-full  pt-16">
                <section class=" text-center">
                    <h1 class=" pb-16 pr-96 mr-44 font-bold text-xl">Vérifier vos documents</h1>
                    
                </section>

                
              <section class=" flex flex-nowrap  align-middle justify-center py-2 ">
                  <label for="" class="sr-only">Underline select</label>
                    <select id="underline_select" class="px-2 w-2/6 text-sm bg-transparent border-2 border-gray-300 rounded-lg">
                        <option  selected class="font-black" v-for="(item,index) in Lists" v-bind:key=" item">{{ item }} - {{capitalized(index)}}</option>
          
                    </select>
                    
                    <section class="bg-cyan-700 text-white	w-44 h-10 rounded text-sm ">

                      <ModelList  />

                    </section>
                   
               </section>   
                  <section class="pt-16">
                    <div class="flex-wrap flex justify-center"> 
                        <hr class="border-1 border-gray-400 w-80 mt-2 mr-16 ">
                       <p class="font-bold text-xs ">OU</p> 
                        <hr class="border-1 border-gray-400 w-80 mt-2 ml-16 ">
                    </div>   
                  </section>

                    <section class="pt-16 flex justify-center">                 
                      <ModelList  />
                  
                    </section>
        </section>       
     </div>  
</template>
<script>
import { useRouter} from "vue-router"
import ModelList from "../components/ModelListVerification.vue"
import ModelProgess from "../components/PorgressbarModel.vue"
import VerificationList from "../components/VerificationList.vue"
import circleProgressBar from "../components/circleProgressBar.vue"
import axios from "axios"
import Header from "../components/Header.vue"
import { ref } from 'vue';

export default {
  name:"VerificationList",

data() {
  return {
    showModal:ref(false),
    showProgress:ref(false),
    router:useRouter(),
    Lists : [] ,
    Listt : [] ,
    dossier_id: parseInt(this.$route.query.id_dossier) ,

  } 
},

components : {
  ModelList,
  circleProgressBar ,
  Header,
  ModelProgess
},

 NavigationToAccueil (){
          router.push("/Accueil")
       },

methods : {

  capitalized(name) {
     const capitalizedFirst = name[0].toUpperCase();
     const rest = name.slice(1);

     return capitalizedFirst + rest;
   },

},

mounted () {
     
     axios.get("/api/dossiers/compare/",{params: {
           dossier_id : this.dossier_id, 
     } 
     }).then(res=>{  
          this.Lists= res.data.avail_tests
          // this.Listt= res.data.cef_cep
         
         
     })
 },




}


</script>
  


<style>

</style>