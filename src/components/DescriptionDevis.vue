<template >
  <div class="bg-slate-100  px-5 rounded">   
      <section class="bg-white h-full rounded-lg">
                  <section class="w-full">
                    <div class="py-3 text-left   border-b-2 ">
                      <span class=" text-left font-bold text-lg px-24  ">{{pochette_name}}</span>
                            <!-- Second Div -->
                      <div class="flex flex-row justify-end  px-24">
                        <button  class="bg-cyan-700  w-32 h-10 rounded-md text-xs mr-4 text-white">
                          <a :href="'http://192.168.1.36:8000'+pochette.url_pdf" target="_blank"> Voir PDF
                            <font-awesome-icon icon="fa-solid fa-eye" color="" class="ml-2" />
                          </a>
                        </button> 
                       
                        <div v-if="Modifer"  @click="Modifer = !Modifer" >
                           <button class="bg-cyan-700 w-32 h-10 rounded text-xs mr-4  text-white"> Modifier
                            <font-awesome-icon icon="fa-solid fa-pen"  class="ml-2"/>
                          </button>
                      
                         </div>
                         <div v-if="!Modifer"  @click="Modifer = !Modifer">

                         <button class="bg-cyan-700 w-32 h-10 rounded text-xs  text-white"> Enregister
                          <font-awesome-icon icon="fa-solid fa-check"  class="ml-2"/>
                           </button>
                        </div>
                        <div v-if="Modifer">
                                 <button class="bg-cyan-700 w-32 h-10 rounded text-xs  text-white" @click="deletePochette"> Delete
                                  <font-awesome-icon icon="fa-solid fa-trash"  class="ml-2"/>
                                        </button>
                      </div>
                      </div>
                    </div>
                  </section>
           <section  class="py-4 ">
            <div class="flex flex-center justify-center items-center">
          <div  class="  text-white border-separate border-spacing-1 flex flex-col item-center text-center justify-center">
               <div class="flex flex-row justify-center w-full ">
                                   <!-- TABLE 1  -->
                        <identitéTable :Modifer='Modifer'/>

                                   <!-- TABLE 2 -->
                       <DonneésEnergétiqueTable :Modifer='Modifer'/>
                    </div>
                                  <!-- TABlEAUX 3 -->

                                 <TravauxTable :Modifer='Modifer'/>
                                 <!-- Tableaux 4 -->
                          <div class="flex flex-end justify-end">

                            <Montants :Modifer='Modifer'/>
                          </div>
                                
          </div>
      </div>
        </section>
     
             
        </section>
   </div>
   </template>


<script>
import {mapGetters} from 'vuex'
import identitéTable from '../components/pochette/identitéTable.vue'
import DonneésEnergétiqueTable from "../components/pochette/DonneésEnergétiqueTable.vue"
import TravauxTable from "../components/pochette/TravauxTable.vue"
import Montants from "../components/pochette/Montants.vue"
import Swal from 'sweetalert2'
import axios from "axios"
export default {
  name:'DescriptionDevis',
  data(){
    return {
      Modifer : true ,
     }

  },
  components : {
    identitéTable ,
    DonneésEnergétiqueTable ,
    TravauxTable ,
    Montants
  },
  computed : {
     ...mapGetters(['pochette' , 'pochette_id','pochette_name','dossier_id']),
     
  },
  methods: {
    deletePochette(){

      Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete("/api/dossiers/document/",{params: {
                    pochette_id : this.pochette_id, 
                    dossier_id : this.dossier_id
                } }).then(response=>{

                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                  window.location.reload()
                })
    }
  })
  
    },
    }

}
</script>
