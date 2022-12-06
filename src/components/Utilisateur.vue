<template>
    <div class="bg-slate-100  min-w-max">
      <div class="flex items-center text-center justify-between p-3">
        <h1 class="font-bold text-base py-6 pl-10">Liste des utilisateurs</h1>
        <button class="bg-cyan-700 w-70 h-9 p-5  text-white rounded-lg flex items-center justify-between" @click="showModal = !showModal">
      <img src="../assets/add.svg" class="bg-white w-5 h-5 rounded-3xl m-3">
           
      Ajouter un Utilisateur</button>
  <div class="absolute  justify-center items-center">
  
      <ModalAjouterDossier :show="showModal" @close="showModal = false">
           <AjouterDossier />
      </ModalAjouterDossier>
  </div>
      </div>
    <div class="bg-white px-10 rounded-xl">
        <btnmagic/>
                              <!-- ChercheBar -->
                       <ChercheBar/>
                          <!-- Tableau de suive -->
                  <div class="overflow-hidden  border-inherit rounded-lg">
                      <table class="min-w-full divide-y  divide-gray-100">
                          <thead class="bg-cyan-700  ">
                              <tr  class="border-2" >
                                 
                                  <th
                                      scope="col"
                                      class="py-3 text-xs font-bold text-center border-2 text-[#ffffff] "
                                  >
                                      Numéro Utilisateur
                                     
                                  </th>
                                <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff]"
                                  >
                                      Nom et Prenom
                                      
   
                                  </th>                             
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff]"
                                  >
                                      Email
                                     
                                  </th>
                                
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff]"
                                  >
                                      Date
                                     
                                  </th>
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] "
                                  >
                                  Compagnie
                                     
                                  </th>
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 rounded-tr-md text-[#ffffff]"
                                  >
                                     Admin
                                  </th>
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 rounded-tr-md text-[#ffffff] "
                                  >
                                     Staff
                                  </th>
                                  <th
                                      scope="col"
                                      class="px-6 py-3 text-xs font-bold text-center border-2 rounded-tr-md text-[#ffffff]"
                                  >
                                     Photo
                                  </th>
                                  <td class="px-6 py-3 text-xs font-bold text-center border-2 rounded-tr-md text-[#ffffff]">
                                      <div class="flex items-center justify-center h-5 ">            
                                        Action                       
                                      </div>
                                  </td>
                              </tr>
                          </thead>
                        
                          <tbody class=" divide-black text-center border-2 border-slate-100 "  
                         >
                              <tr v-for="(item , index) in users " v-bind:key="item" class=" hover:bg-slate-200"  >
                                  
                                  <td
                                      class=" py-4 text-xs font-medium text-gray-800 border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                
                                 > 
                                    {{index+=1}}
                                  </td>
                                  <td
                                      class="px-6 py-4 text-xs font-medium border-2 border-slate-100 text-gray-800 whitespace-nowrap  cursor-pointer"
                                    >  
  
                                  
                                    {{item.first_name}} {{item.last_name}}
  
                                  </td>
                                  <td
                                  class="px-6 py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
  
                                  >   {{item.email}}
                                      
                                  </td>
                                  <td
                                      class="px-6 py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                     >   
                                     {{dateTime(item.date_joined)}}
                                    
                                  </td>
                                  <td
                                  class="px-6 py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                >  
                                  
                                {{item.company}}
                                 
                                  </td>
                                  <td
                                  class="px-6 py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
  
                                  >  
                                  {{item.is_admin_company}}
                                  </td>
                                  <td
                                  class="px-6 py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
  
                                  >   {{item.is_staff}}
                                      
                                  </td>
                                  <td
                                  class="px-4 py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
  
                                  >  <img :src="'http://192.168.1.36:8000'+item.avatar" class=" w-12 h-12 border-2 rounded-full ml-8"/> 
                                      
                                  </td>
                                
                                 
                                  <td class=" py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer">
                                      <div class="flex items-center justify-center h-5 ">
                                        <td class="py-3 px-3">
                                          <div class="flex items-around justify-around h-5  ">
                                           <font-awesome-icon icon="fa-solid fa-pen"  class="  px-2 text-gray-500" />
                                           <font-awesome-icon icon="fa-solid fa-trash"  class=" px-2 text-red-500"  @click="()=> deleteDossier(item.id)"/>

                                      </div>
                                       </td>                                      
                                      </div>
                                  </td>
                              </tr>
                             </tbody>
                          </table>
                      </div>
                     </div>
                   </div>
  </template>

<script>
import ChercheBar from "../screen/chercheBar.vue"
import { ref ,onMounted} from 'vue';
import AjouterDossier from '../components/AjouterUnDossier.vue'
import  ModalAjouterDossier from "../components/ModelAjouterUnDossier.vue"
import axios from 'axios'
import { useRouter} from "vue-router"
import { mapActions, mapGetters, mapMutations } from 'vuex'
import moment from 'moment'
import Swal from 'sweetalert2'


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
    ModalAjouterDossier,
   
    
  },
  computed : {
     ...mapGetters(['users']),
         },
         

  methods: {
    dateTime(value) {
      return moment(value).format("DD-MM-YYYY [à] HH:mm a");
    },

    deleteDossier(el_Id){
        Swal.fire({
        title: 'Vous etes sur ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0E7490',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui supprimer!'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete("/accounts/users",{params: { 
                    dossier_id : el_Id
                } }).then(response=>{
                  Swal.fire(
                    'Supprimé!',
                    'le document est supprimé.',
                    'success'
                  )
                
                }).then(res=>{
                    window.location.reload()
                })
            }
  })  
 },
   
    ...mapActions(['getAllUsers']),
   
  },

  async mounted  () {
   const response = await this.getAllUsers()
 }
 

 

}
 </script>
<style scoped>
@media only screen and (min-width: 320px) and (max-width: 480px) {
    /* ruleset for 320px - 480px */
}
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    /* regles CSS */
}
</style>