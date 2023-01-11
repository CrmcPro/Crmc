<template >
   <div class="bg-slate-200   p-5 rounded-xl mr-14">
       <h1  class="text-gray-600  text-left p-2 px-2 font-semibold" >Identité</h1>
       
       <div class="flex flex-row" v-if="pochette.bureau_etude">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Bureau d'etude</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.bureau_etude "  @input="event => pochette.bureau_etude = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
         <div>
            <div  >
             <font-awesome-icon icon="fa-solid fa-circle-exclamation"   class="text-red-500  w-5 h-8 "/> 
            </div>
            <!-- <div>
               <font-awesome-icon icon="fa-solid fa-check"  class="text-green-600 w-5 h-8"/>
            </div> -->
         </div>    
      </div>

      <div class="flex flex-row" v-if="pochette.nom_beneficiaire">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600">Nom Bénéficiaire</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.nom_beneficiaire "  @input="event => pochette.nom_beneficiaire = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>
     
      <div class="flex flex-row" v-if="pochette.reference_la_facture">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Référence de la facture</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.reference_la_facture "  @input="event => pochette.reference_la_facture = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>

      <div class="flex flex-row" v-if="pochette.date_etude_energetique ">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Date d'etude energetique</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_etude_energetique  "  @input="event => pochette.date_etude_energetique = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
      </div>

      <div class="flex flex-row" v-if="pochette.proprietaire">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600">Proprietaire</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.proprietaire "  @input="event => pochette.proprietaire = event.target.value" onfocus="this.value=''"   :disabled="this.Modifer"/>
         <font-awesome-icon icon="fa-solid fa-check"  class="text-green-600 w-5 h-8"/>
      </div>
      <div class="flex flex-row" v-if="pochette.technique">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Technique</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.technique "  @input="event => pochette.technique = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
      </div>

      <div class="flex flex-row" v-if="pochette.adresse_complete">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Adresse Complete</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.adresse_complete "  @input="event => pochette.adresse_complete = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>

      <div class="flex flex-row" v-if="pochette.ville">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Ville</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.ville "  @input="event => pochette.ville = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>

      <div class="flex flex-row" v-if="pochette.code_postale">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Code Postal</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.code_postale "  @input="event => pochette.code_postale = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>


      <div class="flex flex-row" v-if="pochette.adresse">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Adresse</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.adresse "  @input="event => pochette.adresse = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>
      <div class="flex flex-row" v-if="pochette.email">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Email</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.email "  @input="event => pochette.email = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
      </div>
      <div class="flex flex-row" v-if="pochette.tel">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Telephone</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.tel"  @input="event => pochette.tel = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>
        
      <div class="flex flex-row" v-if="pochette.date_engagement">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Date d'engagement d'oeuvre</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_engagement "  @input="event => pochette.date_engagement = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>

      <div class="flex flex-row" v-if="pochette.date_logiciel">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Date du logiciel</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_logiciel "  @input="event => pochette.date_logiciel = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>
      
      
    
      <div class="flex flex-row" v-if="pochette.date_preuve">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Date de preuve de réalisation de l'operation</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_preuve "  @input="event => pochette.date_preuve = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>

           <div class="flex flex-row " v-if="pochette.date_visite">
              <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de visite
               </h1>
              <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_visite "  @input="event => pochette.date_visite = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
           </div>
                       
    <div class="flex flex-row" v-if="pochette.num_devis">
      <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600">N° Devis</h1>
      <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.num_devis "  @input="event => pochette.num_devis = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
    </div>
    <div class="flex flex-row" v-if="pochette.numero_client">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600 text-center">N° Client</h1>
       <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.numero_client  "  @input="event => pochette.numero_client = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
    </div>
    <div class="flex flex-row" v-if="pochette.num_facture">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600 text-center">N° Facture</h1>
       <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.num_facture "  @input="event => pochette.num_facture = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
    </div>
        <!-- date_audit-->
        <div class="flex flex-row " v-if="pochette.date_audit">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date Audit
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_audit "  @input="event => pochette.date_audit = event.target.value" onfocus="this.value=''" :disabled='this.Modifer' />
          </div>

     <div class="flex flex-row" v-if="pochette.date_devis">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date Devis</h1>
      <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_devis"  @input="event => pochette.date_devis = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>
   
    <div class="flex flex-row" v-if="pochette.date_visite_prealable">
     <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Date de visite préalable</h1>
     <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_visite_prealable "  @input="event => pochette.date_visite_prealable = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer" />
     </div>
    
    <div class="flex flex-row " v-if="pochette.date_cette_proposition">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de cette proposition
     </h1>
    <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row text-xs py-2 w-80 text-black">{{pochette.date_cette_proposition }}</h1>
   </div>

          <div class="flex flex-row " v-if="pochette.adresse_email">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs 	bg-cyan-600">Adresse Email
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.adresse_email " @input="event => pochette.adresse_email = event.target.value" onfocus="this.value=''" :disabled='this.Modifer'/>
          </div>

          <div class="flex flex-row " v-if="pochette.date_debut_des_travaux">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de debut des travaux
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_debut_des_travaux' @input="event => pochette.date_debut_des_travaux = event.target.value" onfocus="this.value=''" :disabled='this.Modifer' />
          </div>

          
          <div class="flex flex-row " v-if="pochette.date_fin_des_travaux">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de fin des travaux
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_fin_des_travaux' @input="event => pochette.date_fin_des_travaux = event.target.value" onfocus="this.value=''" :disabled='this.Modifer' />
          </div>
          
          <div class="flex flex-row " v-if="pochette.date_facture">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de facture
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_facture" @input="event => pochette.date_facture = event.target.value" onfocus="this.value=''"  :disabled='this.Modifer' />
          </div>

          <div class="flex flex-row " v-if="pochette.adresse_client">
              <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Adresse</h1>
                <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.adresse_client" @input="event => pochette.adresse_client = event.target.value" onfocus="this.value=''"  :disabled="this.Modifer"/>
           </div>

      <div class="flex flex-row" v-if="pochette.type_oeuvre">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Type d'oeuvre</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='capitalized(pochette.type_oeuvre)' @input="event => pochette.type_oeuvre = event.target.value" onfocus="this.value=''" :disabled="this.Modifer"/>
      </div>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
 props : ['Modifer'],

 name:'identitéTable',
 data(){
   return {
    }

 },
 computed : {
   ...mapGetters(['pochette' , 'pochette_id']),
    
 },
 methods: {
   capitalized(name) {
     const capitalizedFirst = name[0].toUpperCase();
     const rest = name.slice(1);

     return capitalizedFirst + rest;
   },

 },

}
</script>
