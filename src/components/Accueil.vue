<template>
    <div class="bg-slate-100  min-w-max">
      <div class="flex items-center text-center justify-between p-3">
        <h1 class="font-bold text-base py-6 pl-10">Liste des dossiers</h1>
        <button class="bg-cyan-700 w-70 h-9 p-5  text-white rounded-lg flex items-center justify-between" @click="showModal = !showModal">
      <img src="../assets/add.svg" class="bg-white w-5 h-5 rounded-3xl m-3">
           
      Ajouter un dossier</button>
  <div class="absolute  justify-center items-center">
  
      <ModalAjouterDossier :show="showModal" @close="showModal = false">
           <AjouterDossier />
      </ModalAjouterDossier>
  </div>
      </div>
    <div class="bg-white px-10 rounded-xl">
                              <!-- ChercheBar -->
                       <ChercheBar/>
                          <!-- Tableau de suive -->
                  <div class="overflow-hidden  border-inherit rounded-lg">
                      <table class="min-w-full divide-y  divide-gray-100">
                          <thead class="bg-cyan-700  ">
                              <tr  class="border-2" >
                                  <th scope="col" class="py-3 pl-4 border-2 rounded-tl-md">
                                  </th>
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                  >
                                      ID dossier
                                     
                                  </th>
                                <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                  >
                                      Nom Dossier
                                      
   
                                  </th>                             
                                 
                                
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                  >
                                      Date
                                     
                                  </th>
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                  >
                                      Statut
                                     
                                  </th>
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 rounded-tr-md text-[#ffffff] uppercase"
                                  >
                                      Description
                                  </th>
                              </tr>
                          </thead>
                        
                          <tbody class=" divide-black text-center border-2 border-slate-100 "  
                         >
                              <tr v-for="(item , index) in dossiers" v-bind:key="item" class=" hover:bg-slate-200"  >
                                  <td class="py-3" 
 >
                                      <div class="flex items-center justify-center h-5 ">
                                          <input
                                              type="checkbox"
                                              class="text-blue-600  border-gray-200 rounded focus:ring-blue-500"
                                          />                                       
                                      </div>
                                  </td>
                                  <td
                                      class="px-6 py-4 text-sm font-medium text-gray-800 border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                      @click="() => NavigationTodevis(item.id)"
                                 > 
                                    {{index+=1}}
                                  </td>
                                  <td
                                      class="px-6 py-4 text-sm font-medium border-2 border-slate-100 text-gray-800 whitespace-nowrap  cursor-pointer"
                                      @click="() => NavigationTodevis(item.id)" >  
  
                                  
                                    {{item.first_name}} {{item.last_name}}
  
                                  </td>
                                 
                                  <td
                                      class="px-6 py-4 text-sm font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                      @click="() => NavigationTodevis(item.id)" >   
                                      {{item.date_creation}}
                                  </td>
                                  <td
                                  class="px-6 py-4 text-sm font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                  @click="() => NavigationTodevis(item.id)" >  
                                  
                                  {{item.status}}
                                 
                                  </td>
                                  <td
                                  class="px-6 py-4 text-sm font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
  
                                  >  {{item.description}}
                                      
                                  </td>
                              </tr>
                             </tbody>
                          </table>
                      </div>
                     </div>
                   </div>
  </template>



<script>
import ChercheBar from "../screen/ChercheBar.vue"
import { ref ,onMounted} from 'vue';
import AjouterDossier from '../components/AjouterUnDossier.vue'
import  ModalAjouterDossier from "../components/ModelAjouterUnDossier.vue"
import axios from 'axios'
import { useRouter} from "vue-router"
// import route from "../router"
import { mapActions, mapGetters, mapMutations } from 'vuex'
   
const dossiers = ref([]);
export default {
name:"Accueil",
data()
{
    return {
       router:useRouter(),
       showModal:false,
       ShowProfil: false,
       show : false ,
       deconnection : false ,
    
    }
},
props :{
    show: {
    type: Boolean,
    default: false,
  },
  },
  components: {
    ChercheBar ,
    AjouterDossier ,
    ModalAjouterDossier
  },
  methods: {
    
    ...mapActions(['getdossiers']),
     NavigationTodevis (id) {
        this.router.push("/Pochettes");
        this.router.push({
            path : '/Pochettes',
            query : { id_dossier : id }
        })
       
     },
   
  },
 mounted () {
   this.getdossiers()
 },
 computed : {
     ...mapGetters(['dossiers']),
         },
}
 </script>