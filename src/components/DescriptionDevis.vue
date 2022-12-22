<template >
  <div class="bg-slate-100  px-5 rounded">   
    <section class="bg-white h-full rounded-lg">
      <section class="w-full">
        <div class="py-3 text-left   ">
                      <!-- Second Div -->
                      <div class="border-b-2 p-2">
                      <div class="flex flex-row  justify-end  px-24 ">
                        <div class="absolute left-40 py-4  ">
                          <span class=" text-left font-bold text-lg  ">{{title}}</span>
                        </div>
                            <a :href="'http://192.168.1.210:8000'+pochette.url_pdf" target="_blank">
                              
                              <button  class="bg-cyan-700  w-32 h-9 rounded-md text-xs mr-4 text-white">
                                     Voir PDF
                             <font-awesome-icon icon="fa-solid fa-eye" color="" class="ml-2" />
                            </button> 

                            </a>
                           
                        <div v-if="Modifer"  @click="Modifer = !Modifer" >
                           <button class="bg-cyan-700 w-32 h-9 rounded text-xs mr-4  text-white"> Modifier
                             <font-awesome-icon icon="fa-solid fa-pen"  class="ml-2"/>
                            </button>
                            
                          </div>

                          <div v-if="!Modifer"  @click="Modifer = !Modifer">
                            
                            <button class="bg-cyan-700 w-32 h-9 rounded text-xs  text-white" @click="ModifyPochette"> Enregister
                              <font-awesome-icon icon="fa-solid fa-check"  class="ml-2"/>
                            </button>
                          </div>

                          <div>
                            <button :class='[Modifer ? "bg-red-500 w-32 h-9 rounded text-xs  text-white" : "bg-slate-500 w-32 h-9 rounded text-xs  text-white ml-4"]' @click="deletePochette" > 
                              Supprimer
                              <font-awesome-icon icon="fa-solid fa-trash"  class="ml-2"/>
                            </button>
                          </div>
                        </div>
                      </div>
                        </div>
                    
                    </section>
                  
            <section class="flex flex-col justify-center items-center  text-white text-center py-10" v-if='id_props_pochette != 1 & id_props_pochette !=5 & id_props_pochette !=6 & id_props_pochette !=2 & id_props_pochette !=4'>
                                
                    <div class="flex flex-row py-1 " v-if="pochette.bureau_etude">
                        <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Bureau d'etude</h1>
                        <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value="pochette.bureau_etude "  @input="event => pochette.bureau_etude = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                    </div>
              
                    <div class="flex flex-row py-1 " v-if="pochette.proprietaire">
                        <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Proprietaire</h1>
                        <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value="pochette.proprietaire  "  @input="event => pochette.proprietaire = event.target.value" onfocus="this.value=''"   :disabled="this.Modifer"/>
                    </div>

                      <div class="flex flex-row py-1 " v-if="pochette.nom_client">
                          <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Nom Client</h1>
                          <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value="pochette.nom_client  "  @input="event => pochette.nom_client = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                      </div>

                      <div class="flex flex-row py-1 " v-if="pochette.technique">
                        <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Technique</h1>
                        <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value="pochette.technique ? pochette.technique: 'null' "  @input="event => pochette.technique = event.target.value" onfocus="this.value=''"   :disabled="this.Modifer"/>
                    </div>

                      <div class="flex flex-row py-1" v-if="pochette.gain_energetique">
                        <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Gain Energetique</h1>
                        <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value='pochette.gain_energetique'  @input="event => pochette.gain_energetique = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                      </div>

                      <div class="flex flex-row py-1" v-if="pochette.cef_projet">
                         <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs  font-bold	bg-cyan-600">Cef Projet  </h1>
                         <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value='pochette.cef_projet'  @input="event => pochette.cef_projet  = event.target.value" onfocus="this.value=''"   :disabled="this.Modifer" />
                      </div>

                      <div class="flex flex-row py-1" v-if="pochette.cep_projet">
                         <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs  font-bold	bg-cyan-600">Cep Projet </h1>
                         <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value='pochette.cep_projet'  @input="event => pochette.cep_projet  = event.target.value" onfocus="this.value=''"   :disabled="this.Modifer" />
                      </div>

                    <div class="flex flex-row py-1" v-if="pochette.cef_init">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Cef Initiale </h1>
                      <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'   :value='pochette.cef_init'  @input="event => pochette.cef_init = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                    </div>

                    <div class="flex flex-row py-1" v-if="pochette.cep_init">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Cep Initiale</h1>
                      <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'   :value=' pochette.cep_init'  @input="event => pochette.cep_init = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                    </div>

                     <!-- date_visite -->
                    <div class="flex flex-row py-1" v-if="pochette.date_visite">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Date de visite</h1>
                     <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'   :value='pochette.date_visite'  @input="event => pochette.date_visite = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                    </div>

                    <!-- adresse_email -->
                  <div class="flex flex-row py-1" v-if="pochette.adresse_email">
                   <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36 text-center text-xs font-bold	bg-cyan-600">Adresse Email</h1>
                   <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'    :value='pochette.adresse_email'  @input="event => pochette.adresse_email = event.target.value" onfocus="this.value=''"   :disabled="this.Modifer"  />
                  
                  </div>
                  <!-- date_cette_proposition -->
                  <div class="flex flex-row py-1" v-if="pochette.date_cette_proposition">
                    <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36 text-center text-xs  font-bold	bg-cyan-600">Date de cette proposition</h1>
                   <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'   :value='pochette.date_cette_proposition'  @input="event => pochette.date_cette_proposition = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                 </div>

                 <!-- ref_audit -->
                 <div class="flex flex-row py-1" v-if="pochette.ref_audit">
                    <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36 text-center text-xs  font-bold	bg-cyan-600">Ref Audit</h1>
                   <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'   :value='pochette.ref_audit'  @input="event => pochette.ref_audit = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                 </div>

                 <div class="flex flex-row py-1 " v-if="id_props_pochette == 3">
                   <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36 text-xs font-bold text-center 	bg-cyan-600">Montant de prime
                   </h1>
                  <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value='pochette.montant_prime '  @input="event => pochette.montant_prime = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                </div>
                  <div class="flex flex-row py-1 " v-if="pochette.parcelle_cadastrale">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Parecelle Cadastrale</h1>
                      <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value="pochette.parcelle_cadastrale "   @input="event => pochette.parcelle_cadastrale = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                  </div>
                  <div class="flex flex-row py-1 " v-if="pochette.adresse_client">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Adresse Client</h1>
                      <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value="pochette.adresse_client "  @input="event => pochette.adresse_client = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                  </div>
                  <div class="flex flex-row py-1 " v-if="pochette.adresse">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Adresse</h1>
                      <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value="pochette.adresse"  @input="event => pochette.adresse = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
                  </div>
                  
                  <div class="flex flex-row py-1" v-if="pochette.email">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Email </h1>
                      <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'   :value='pochette.email'  @input="event => pochette.email = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
                  </div>

                  <div class="flex flex-row py-1" v-if="pochette.tel">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Telephone</h1>
                      <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'   :value='pochette.tel'  @input="event => pochette.tel = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
                  </div>


                  <div class="flex flex-row py-1 " v-if="pochette.nature_chauffage">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">Nature de chauffage</h1>
                      <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value="pochette.nature_chauffage "  @input="event => pochette.nature_chauffage = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
                  </div>
                  
                  <div class="flex flex-row py-1 " v-if="pochette.rge_qualification">
                      <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs font-bold	bg-cyan-600">RGE Qualification</h1>
                      <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value="pochette.rge_qualification "  @input="event => pochette.rge_qualification = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
                  </div>

                  <div class="flex flex-row py-1" v-if="pochette.surface_habitable">
                        <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs  font-bold	bg-cyan-600">Surface habitable </h1>
                        <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value='pochette.surface_habitable'  @input="event => pochette.surface_habitable = event.target.value" onfocus="this.value=''" :disabled="this.Modifer" />
                  </div>
                            
                    <div class="flex flex-row py-1" v-if="pochette.surface_shon">
                        <h1 class="border rounded-l-md border-slate-400 py-2.5 w-36  text-xs  font-bold	bg-cyan-600">Surface shon </h1>
                        <input :class='[Modifer ? "border rounded-r-md border-slate-400 bg-slate-100  flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2" : "border rounded-r-md border-slate-400 bg-white flex-row  w-[550px] ml-1 text-xs  py-2 text-black text-left p-2"]'  :value='pochette.surface_shon'  @input="event => pochette.surface_shon = event.target.value" onfocus="this.value=''" :disabled="this.Modifer" />
                    </div>         
                  
        </section> 
        <section  class="py-4 " v-if="id_props_pochette === 1 || id_props_pochette === 5 || id_props_pochette === 6 || id_props_pochette ===2 || id_props_pochette === 4">
                      <div class="flex flex-center justify-center items-center">
                       <div  class="text-white border-separate border-spacing-1 flex flex-col item-center text-center justify-center">
                        <div class="flex flex-row justify-center w-full " >
                                   <!-- TABLE 1  -->
                         <identitéTable :Modifer='Modifer'/>
                                   <!-- TABLE 2 -->
                         <DonneésEnergétiqueTable :Modifer='Modifer'/>
                         
                           </div>
                             
                           <!-- TABlEAUX 3 -->
                           <div v-if="id_props_pochette != 6 & id_props_pochette != 2 & id_props_pochette != 4"> 
                            <TravauxTable :Modifer='Modifer'/>
                          </div>   
                                      
                           <!-- TABlEAUX 4 -->
                        
                           <div v-if="id_props_pochette ===4"> 
                            <DateTraveaux :Modifer='Modifer'/>
                          </div>  
                            <!-- Tableaux 5 -->
                         
                          <div class="flex flex-end justify-end" v-if="id_props_pochette != 6 & id_props_pochette != 2  & id_props_pochette != 4 ">
                            <Montants :Modifer='Modifer'/>
                          </div>                               
                       </div>
                         </div>
                    </section>

        <!-- :class='[this.Modifer ?"border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold text-center	bg-slate-100" : "border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold text-center	bg-white"]' -->
      </section>
   </div>
   </template>


<script>
import {mapGetters} from 'vuex'
import identitéTable from '../components/pochette/identitéTable.vue'
import DonneésEnergétiqueTable from "../components/pochette/DonneésEnergétiqueTable.vue"
import TravauxTable from "../components/pochette/TravauxTable.vue"
import Montants from "../components/pochette/Montants.vue"
import DateTraveaux from "../components/pochette/DateTraveaux.vue"
import Swal from 'sweetalert2'
import axios from "axios"
export default {
  name:'DescriptionDevis',
  props:["title"],
  data(){
    return {
      Modifer : true ,
     
     }

  },
  props : ['id_props_pochette' ,'id_props_dossier',"title" ],  

  components : {
    identitéTable ,
    DonneésEnergétiqueTable ,
    TravauxTable ,
    Montants,
    DateTraveaux
  },
  computed : {
     ...mapGetters(['pochette']),
     
  },
  methods: {
    deletePochette(){
  this.Modifer ? (
        Swal.fire({
        title: 'Vous etes sur ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#0E7490',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui supprimer!'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete("/api/dossiers/document/",{params: {
                    pochette_id : this.id_props_pochette, 
                    dossier_id : this.id_props_dossier ,
                } }).then(response=>{
                  Swal.fire(
                    'Supprimer!',
                    'Le document a été supprimé.',
                    'success'  
                  )        
                  this.$emit('onReloadEnd')
                })}
  }) 
  ) : null    
 },
        ModifyPochette(){
          let bodyformData = new FormData();

          //Montants
          bodyformData.append('prime_cee',this.pochette.prime_cee)
          bodyformData.append('reste_payer',this.pochette.reste_payer)
          bodyformData.append('total_ttc',this.pochette.total_ttc)
      
          //traveau réalisés
          bodyformData.append('travaux',this.pochette.travaux)

          // Date traveaux
          bodyformData.append('dates_travaux',this.pochette.dates_travaux)

          //identité
          bodyformData.append('num_devis',this.pochette.num_devis)
          bodyformData.append('numero_client',this.pochette.numero_client)
          bodyformData.append('date_audit',this.pochette.date_audit)
          bodyformData.append('date_devis',this.pochette.date_devis)
          bodyformData.append('date_visite_prealable',this.pochette.date_visite_prealable)
          bodyformData.append('bureau_etude',this.pochette.bureau_etude)
          bodyformData.append('proprietaire',this.pochette.proprietaire)
          bodyformData.append('adresse',this.pochette.adresse)
          bodyformData.append('email',this.pochette.email)
          bodyformData.append('adresse_client',this.pochette.adresse_client)
          bodyformData.append('tel',this.pochette.tel) 
          bodyformData.append('technique',this.pochette.technique)
          bodyformData.append('date_visite',this.pochette.date_visite)
          bodyformData.append('nom_client',this.pochette.nom_client)
          bodyformData.append('date_engagement',this.pochette.date_engagement)
          bodyformData.append('date_etude_energetique',this.pochette.date_etude_energetique)
          bodyformData.append('date_logiciel',this.pochette.date_logiciel)
          bodyformData.append('date_preuve',this.pochette.date_preuve)
          bodyformData.append('reference_la_facture',this.pochette.reference_la_facture)
          bodyformData.append('type_oeuvre',this.pochette.type_oeuvre)
          bodyformData.append('date_debut_des_travaux',this.pochette.date_debut_des_travaux)
          bodyformData.append('date_facture',this.pochette.date_facture)
          bodyformData.append('date_fin_des_travaux',this.pochette.date_fin_des_travaux)
          bodyformData.append('num_facture',this.pochette.num_facture)

          //Données Energitique
          bodyformData.append('gain_energetique',this.pochette.gain_energetique)
          bodyformData.append('cef_initial',this.pochette.cef_initial)
          bodyformData.append('cef_projet',this.pochette.cef_projet)
          bodyformData.append('cef_init',this.pochette.cef_init)
          bodyformData.append('cef_projet',this.pochette.cef_projet)
          bodyformData.append('cep_init',this.pochette.cep_init)
          bodyformData.append('cep_projet',this.pochette.cep_projet)
          bodyformData.append('ref_audit',this.pochette.ref_audit)
          bodyformData.append('version_logiciel',this.pochette.version_logiciel)
          bodyformData.append('nature_chauffage',this.pochette.nature_chauffage)
          bodyformData.append('rge_qualification',this.pochette.rge_qualification)
          bodyformData.append('surface_habitable',this.pochette.surface_habitable)
          bodyformData.append('surface_shon',this.pochette.surface_shon)
          bodyformData.append('parcelle_cadastrale',this.pochette.parcelle_cadastrale)

          // Description Devis
          bodyformData.append('adresse_email',this.pochette.adresse_email)
          bodyformData.append('date_cette_proposition',this.pochette.date_cette_proposition)
          bodyformData.append('montant_prime',this.pochette.montant_prime)



          let params = {
            dossier_id : this.id_props_dossier, 
            pochette_id :this.id_props_pochette
          }
          axios.put("/api/dossiers/document/",bodyformData,{params:params}).then(response=>{
                  Swal.fire(
                    'Modifier!',
                    'les information sont modifiés.',
                    'success'
                  )
                
                })
        }

    }

}
</script>
