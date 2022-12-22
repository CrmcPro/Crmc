<template>
    <div class="bg-slate-100  min-w-max">
      <div class="flex items-center text-center justify-between ">
        <h1 class="font-bold text-base py-6 ml-4  pl-10">Liste des dossiers</h1>
        <button class="bg-cyan-700 w-70 h-8 px-6 text-xs mr-12  text-white rounded-md flex items-center justify-between" @click="showModal = !showModal">
            <font-awesome-icon icon="fa-solid fa-plus" class="pr-2.5 "/>
           
      Ajouter un dossier</button>
  <div class="absolute  justify-center items-center">
  
      <ModalAjouterDossier :show="showModal" @close="showModal = false">
           <AjouterDossier />
      </ModalAjouterDossier>
  </div>
      </div>
    <div class="bg-white px-10 rounded-xl">
        <btnmagic/>
                              <!-- ChercheBar -->
                       <chercheBar/>
                          <!-- Tableau de suive -->
                  <div class="overflow-hidden  border-inherit rounded-lg">
                      <table class="min-w-full divide-y  divide-gray-100">
                          <thead class="bg-cyan-700 rounded-tl-lg  ">
                              <tr  class="border-2" >
                                 
                                  <th
                                      scope="col"
                                      class=" py-2 text-xs  text-center rounded-tl-lg border-2 text-[#ffffff] "
                                  >
                                      Numéro dossier
                                     
                                  </th>
                                <th
                                      scope="col"
                                      class="px-6 py-2 text-xs  text-center border-2 text-[#ffffff] "
                                  >
                                      Nom Dossier
                                      
   
                                  </th>                             
                                 
                                
                                  <th
                                      scope="col"
                                      class="px-6 py-2 text-xs  text-center border-2 text-[#ffffff] "
                                  >
                                      Date
                                     
                                  </th>
                                  <th
                                      scope="col"
                                      class="px-6 py-2 text-xs  text-center border-2 text-[#ffffff] "
                                  >
                                      Statut
                                     
                                  </th>
                                  <th
                                      scope="col"
                                      class="px-6 py-2 text-xs  text-center border-2 text-[#ffffff] "
                                  >
                                      Description
                                  </th>
                                  <th class="px-6 py-2 text-xs  text-center border-2 rounded-tr-md text-[#ffffff]">
                                              
                                        Action                       
                                     
                                  </th>
                              </tr>
                          </thead>
                        
                          <tbody class=" divide-black text-center border-2 border-slate-100 "  
                         >
                              <tr v-for="(item , index) in dossiers" v-bind:key="item" class=" hover:bg-slate-200"  >
                                 
                                  <td
                                      class=" py-4 text-xs font-medium text-gray-800 border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                      @click="() => NavigationTodevis(item.id)"
                                 > 
                                    {{index+=1}}
                                  </td>
                                  <td
                                      class="px-6 py-4 text-xs font-medium border-2 border-slate-100 text-gray-800 whitespace-nowrap  cursor-pointer"
                                      @click="() => NavigationTodevis(item.id)" >  
  
                                  
                                  {{item.first_name}} {{item.last_name}} 
  
                                  </td>
                                 
                                  <td
                                      class="px-6 py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                      @click="() => NavigationTodevis(item.id)" >   
                                      {{dateTime(item.date_creation)}}
                                    
                                  </td>
                                  <td
                                  class="px-6 py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                  @click="() => NavigationTodevis(item.id)" >  
                                  
                                  {{item.status}}
                                 
                                  </td>
                                  <td
                                  class="px-6 py-4 text-xs font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer"
                                  @click="() => NavigationTodevis(item.id)" 

                                  >  {{item.description}}
                                      
                                  </td>
                                  <td class=" py-4 text-sm font-medium border-2 border-slate-100 whitespace-nowrap  cursor-pointer">
                                      <div class="flex items-center justify-center h-5 ">
                                        <td class="py-2px-3">
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
import chercheBar from "../screen/chercheBar.vue"
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
    chercheBar ,
    AjouterDossier ,
    ModalAjouterDossier,
    
  },
  computed : {
     ...mapGetters(['dossiers']),
         },
         

  methods: {
    
    ModifyDossier(){
    let bodyformData = new FormData();
          bodyformData.append('first_name',this.first_name)
          bodyformData.append('last_name',this.last_name)
          bodyformData.append('montant_prime',this.dossier.last_name)

    let params = {
            dossier_id : this.id_props_dossier, 
           
          }
    axios.put("/api/dossiers/",bodyformData,{params:params}).then(response=>{
                  Swal.fire(
                    'Modifier!',
                    'les information sont modifiés.',
                    'success'
                  )
                
                }).then(res=>{
                    // window.location.reload()
                })
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
      axios.delete("/api/dossiers/",{params: { 
                    dossier_id : el_Id
                } }).then(response=>{
                  Swal.fire(
                    'Supprimé!',
                    'le dossier est supprimé.',
                    'success'
                  )
                
                }).then(res=>{
                    window.location.reload()
                })
            }
  })  
 },

    dateTime(value) {
      return moment(value).format("DD-MM-YYYY [à] HH:mm a");
    },
    
    ...mapActions(['getdossiers']),
   async NavigationTodevis (id) {
        console.log('id_dossier1',id)     
        this.router.push({
            path : '/Pochettes/1',
            query : { id_dossier : id }
            
        })

     }  
  },

  async mounted  () {
   const response = await this.getdossiers()
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