<template>
  <div class="bg-slate-100  px-5 rounded">   
      <section class="bg-white h-full ">
                  <section class="">
                    <div class="py-3 text-left   border-b-2 ">
                      <span class=" text-left font-bold text-lg px-24  ">Devis</span>
                            <!-- Second Div -->
                      <div class="flex flex-row justify-end  px-24">
                        <button  class="bg-cyan-700  w-32 h-10 rounded-md text-xs mr-4 text-white">
                          <a href="http://192.168.1.36:8000+{{pochette.url_pdf}}" target="_blank"> Voir PDF
                            <font-awesome-icon icon="fa-solid fa-eye" color="" class="ml-2" />
                          </a>
                        </button> 
                       
                        <div v-if="!Modifer" @click="Modifer = !Modifer" >
                           <button class="bg-cyan-700 w-32 h-10 rounded text-xs  text-white"> Modifier
                            <font-awesome-icon icon="fa-solid fa-pen"  class="ml-2"/>
                          </button>
                      
                         </div>
                         <div v-if="Modifer"  @click="Modifer = !Modifer">

                         <button class="bg-cyan-700 w-32 h-10 rounded text-xs  text-white"> Enregister
                          <font-awesome-icon icon="fa-solid fa-check"  class="ml-2"/>
                           </button>
                        </div>
                      </div>
                    </div>
                  </section>
           <section v-if="!Modifer" class="py-4 ">
            <div class="flex flex-center justify-center items-center">
                  <div  class="  text-white border-separate border-spacing-1 flex flex-col item-center text-center justify-center">
               <div class="flex flex-row justify-center  w-screen ">
                                                                    <!-- TABLE 1  -->
                       <div class="bg-slate-200   p-5 rounded-xl mr-14" >
                         <h1  class="text-gray-600  text-left p-2 px-2 font-semibold" >Identité</h1>
                      <div class="flex flex-row" v-if="pochette.num_devis">
                        <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600">N°devis</h1>
                        <h1 class="border rounded-r-md border-slate-200  bg-white flex-row  text-xs py-2 w-80 text-black">{{pochette.num_devis}}</h1>
                      </div>
                      <div class="flex flex-row" v-if="pochette.numero_client">
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600 text-center">N°client</h1>
                         <h1 class="border rounded-r-md border-slate-200  bg-white flex-row  text-xs py-2 w-80 text-black">{{pochette.numero_client}}</h1>
                      </div>
                       <div class="flex flex-row" v-if="pochette.date_devis">
   
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date°devis</h1>
                        <h1 class="border rounded-r-md border-slate-200  bg-white flex-row text-xs py-2 bg-white w-80 text-black">{{pochette.date_devis}}</h1>
                        </div>
                     
                      <div class="flex flex-row" v-if="pochette.date_visite_prealable">
                       <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">date°visite°prealable</h1>
                       <h1 class="border rounded-r-md border-slate-200   flex-row  text-xs py-2 bg-white w-80 text-black">{{pochette.date_visite_prealable}}</h1>
                       </div>
                      <div class="flex flex-row" v-if="pochette.gain_energetique">
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Gain°energetique</h1>
                        <h1 class="border rounded-r-md border-slate-200  bg-white text-xs py-2  flex-row  w-80 text-black">{{pochette.gain_energetique}}</h1>
                      </div> 
                      <div class="flex flex-row " v-if="pochette.date_cette_proposition">
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date_cette_proposition
                       </h1>
                      <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row text-xs py-2 w-80 text-black">{{pochette.date_cette_proposition }}</h1>
                     </div>
                            <!-- montant_prime -->
                            <div class="flex flex-row " v-if="pochette_id == 3">
                              <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Montant_prime
                             </h1>
                              <h1 class="border rounded-r-md border-white  flex-row  w-80 text-xs py-2 text-black">{{pochette.montant_prime ? pochette.montant_prime : 'Null'  }}</h1>
                            </div>
                            <!-- date_audit                    -->
                            <div class="flex flex-row " v-if="pochette.date_audit">
                              <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">date_audit
                             </h1>
                              <h1 class="border rounded-r-md border-slate-200 bg-white text-xs py-2 flex-row  w-80 text-black">{{pochette.date_audit}}</h1>
                            </div>
                            <div class="flex flex-row " v-if="pochette.adresse_email">
                              <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs 	bg-cyan-600">Adresse_email
        
                             </h1>
                              <h1 class="border rounded-r-md border-slate-400  flex-row  w-80 text-black">{{pochette.adresse_email }}</h1>
                            </div>
                    </div>

                                                                    <!-- TABLE 2 -->
                  <div class=" bg-slate-200   p-5 rounded-xl ">
                                        <h1  class="text-gray-600  text-left p-2 px-2 font-semibold">Données Energétique</h1>
                      <div class="flex flex-row" v-if="pochette.cef_init && pochette.cep_init">
  
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Cef_init / Cep_init</h1>
                        <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black">{{pochette.cef_init}} <span class="text-red-600 font-bold"> /</span> {{pochette.cep_init}}</h1>
                      </div>
                      <div class="flex flex-row" v-if="pochette.cef_projet">
  
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs  font-bold	bg-cyan-600">cef_projet /cep_projet </h1>
                        <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black">{{pochette.cef_projet}}<span class="text-red-600 font-bold"> /</span>  {{pochette.cep_projet}} </h1>
                      </div>
                      <div class="flex flex-row " v-if="pochette.ref_audit">
  
                        <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">ref_audit</h1>
                        <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black " >{{pochette.ref_audit}}</h1>
                      </div>
                    
              
                        
                       <div class="flex flex-row " v-if="pochette.date_visite">
                         <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date_visite
                        </h1>
                         <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black">{{pochette.date_visite }}</h1>
                       </div>
                     
                          <div class="flex flex-row " v-if="pochette.prime_cee">
                            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">version_logiciel</h1>
                            <h1 class="border rounded-r-md border-slate-200 bg-white flex-row  w-80 text-xs py-2 text-black">{{pochette.version_logiciel ? pochette.version_logiciel : "Null" }}</h1>
                         </div>
                       
                        </div> 
                    </div>
                                                  <!-- TABlEAUX 3 -->

                        <div  class="py-5 flex flex-col rounded-lg"  v-if="pochette.travaux">
                                     <div class="py-5 flex  flex-col justify-center items-center rounded-lg">
                                       <div class=" rounded-lg p-5 bg-slate-200 late-200">
                                       <h1 class="text-gray-600  text-left px-3 p-1 font-semibold">Travaux</h1>
                                     <div class="flex justify-center ">

                                      <div class="border rounded-tl-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">id</div>
                                     <div class="border  border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Devis</div>
                                     <div class="border  border-slate-200 py-2 w-80 text-xs font-bold	bg-cyan-600">Nom travail</div>
                                     <div class="border  border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Nom certifcat</div>
                                     <div class="border rounded-tr-md  border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Nom entreprise</div>
                                    </div>
                                 
                                    <div>
                                    <div class="flex flex-row  justify-center bg-slate-200 late-200 " v-for="item in pochette.travaux" v-bind:key=" item">
                                        <div class="border border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold	bg-white">{{item.id}}</div>
                                      <div class="border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold	bg-white">Devis</div>
                                      <div class="border  border-slate-200 py-2 w-80 text-xs text-gray-600 font-bold	bg-white">{{item.nom_travail}}</div>
                                      <div class="border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold	bg-white">{{item.num_certificat}}</div>
                                      <div class="border  border-slate-200 py-2 w-52 text-xs text-gray-600 font-bold	bg-white">RSE</div>
                                      </div>
                                     
                                      
                                    </div>
                                  </div>
                                </div>

                                  <div class=" p-4  bg-white flex justify-end  px-32">
                                         <div class="bg-slate-200 late-200 p-4 rounded-md ">
         
                                            <h1 class="text-gray-600  text-left p-2 px-2 font-semibold">Montants</h1>
                                            <div class="flex flex-row " v-if="pochette.total_ttc">
                                            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">total_ttc</h1>
                                            <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black">{{pochette.total_ttc}}</h1>
                                          </div>
                                            <div class="flex flex-row " v-if="pochette.reste_payer">
                                          <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">reste_payer</h1>
                                         <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black">{{pochette.reste_payer}}</h1>
                                         </div>
                                          <div class="flex flex-row  " v-if="pochette.prime_cee">
                                           <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">prime_cee</h1>
                                           <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black">{{pochette.prime_cee}}</h1>
                                         </div>
                                        </div>
                                    
                                  </div>
                                </div>
                                
                              </div>
                          </div>
        </section>
              <section v-if="Modifer">
                <div class="flex flex-center justify-center items-center">
                  <div  class="  text-white border-separate border-spacing-1 flex flex-col item-center text-center justify-center">
                    <div class="flex flex-row">
                      <h1 class="border rounded-l-md border-white py-2 w-52 text-xs 	bg-cyan-600 text-center">Numero_client</h1>
                       <input class="border rounded-r-md border-slate-400  flex-row  w-80 text-black" placeholder={{pochette.numero_client}} />
                    </div>
                    <div class="flex flex-row">
                      <h1  class="border rounded-l-md border-white py-2 w-52 text-xs 	bg-cyan-600">N_devis</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black">{{pochette.num_devis}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row">

                      <h1 class="border rounded-l-md border-white py-2 w-52 text-xs 	bg-cyan-600">date_devis</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black">{{pochette.date_devis}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row">
                     <h1 class="border rounded-l-md border-white py-2 w-52 text-xs 	bg-cyan-600">date_visite_prealable</h1>
                     <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black">{{pochette.date_visite_prealable}}</h1> -->
                     <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />

                     </div>
                    <div class="flex flex-row">
                      <h1 class="border rounded-l-md border-white py-2 w-52 text-xs 	bg-cyan-600">gain_energetique</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black">{{pochette.gain_energetique}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />

                    </div> 
                    <div class="flex flex-row">

                      <h1 class="border rounded-l-md border-white py-2 w-52  text-xs 	bg-cyan-600">cef_init</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black">{{pochette.cef_init}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row">

                      <h1 class="border rounded-l-md border-white py-2 w-52  text-xs 	bg-cyan-600">cef_projet/cep_projet</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black">{{pochette.cef_projet}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row ">

                      <h1 class="border rounded-l-md border-white py-2 w-52 text-xs 	bg-cyan-600">ref_audit</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black " >{{pochette.ref_audit && pochette.ref_audit}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />

                    </div>
                    <div class="flex flex-row ">
                      <h1 class="border rounded-l-md border-white py-2 w-52 text-xs 	bg-cyan-600">total_ttc</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black">{{pochette.total_ttc}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />

                    </div>
            
                      <div class="flex flex-row ">
                      <h1 class="border rounded-l-md border-white py-2 w-52 text-xs 	bg-cyan-600">reste_payer</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black">{{pochette.reste_payer}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />

                     </div>
                    <div class="flex flex-row ">
                      <h1 class="border rounded-l-md border-white py-2 w-52 text-xs 	bg-cyan-600">prime_cee</h1>
                      <!-- <h1 class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black">{{pochette.prime_cee}}</h1> -->
                      <input class="border rounded-r-md border-slate-400 py-2 flex-row  w-80 text-black" placeholder="trst" />
                    </div>


                  </div>
                </div>
              </section>
             
        </section>
   </div>
   </template>


<script>
import {mapGetters} from 'vuex'
export default {
  name:'DescriptionDevis',
  data(){
    return {
           Modifer : false ,
     }

  },
  computed : {
     ...mapGetters(['pochette' , 'pochette_id']),
     
  },
  methods: {
 

  },

}
</script>
