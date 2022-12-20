<template >
   <div class="bg-slate-200   p-5 rounded-xl mr-14">
       <h1  class="text-gray-600  text-left p-2 px-2 font-semibold" >Identité</h1>
       
       <div class="flex flex-row" v-if="pochette.bureau_etude  || pochette.bureau_etude=== null ">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Bureau d'etude</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.bureau_etude  ? pochette.bureau_etude : 'Null' "  @input="event => pochette.bureau_etude = event.target.value"  :disabled="this.Modifer"/>
      </div>
     
      <div class="flex flex-row" v-if="pochette.reference_la_facture || pochette.reference_la_facture=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Référence de la facture</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.reference_la_facture ? pochette.reference_la_facture : 'Null' "  @input="event => pochette.reference_la_facture = event.target.value"  :disabled="this.Modifer"/>
      </div>

      <div class="flex flex-row" v-if="pochette.date_etude_energetique || pochette.date_etude_energetique=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Date d'etude energetique</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_etude_energetique ? pochette.date_etude_energetique : 'Null' "  @input="event => pochette.date_etude_energetique = event.target.value"  :disabled="this.Modifer"/>
      </div>

      <div class="flex flex-row" v-if="pochette.proprietaire || pochette.proprietaire=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600">Proprietaire</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.proprietaire ? pochette.proprietaire : 'Null' "  @input="event => pochette.proprietaire = event.target.value"   :disabled="this.Modifer"/>
      </div>
      <div class="flex flex-row" v-if="pochette.technique || pochette.technique=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Technique</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.technique ? pochette.technique : 'Null' "  @input="event => pochette.technique = event.target.value"   :disabled="this.Modifer"/>
      </div>
      <div class="flex flex-row" v-if="pochette.adresse || pochette.adresse=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Adresse</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.adresse ? pochette.adresse : 'Null' "  @input="event => pochette.adresse = event.target.value"  :disabled="this.Modifer"/>
      </div>
      <div class="flex flex-row" v-if="pochette.email || pochette.email=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Email</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.email ? pochette.email : 'Null' "  @input="event => pochette.email = event.target.value"  :disabled="this.Modifer"/>
      </div>
      <div class="flex flex-row" v-if="pochette.tel || pochette.tel=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Telephone</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.tel ? pochette.tel : 'Null' "  @input="event => pochette.tel = event.target.value"  :disabled="this.Modifer"/>
      </div>
        
      <div class="flex flex-row" v-if="pochette.date_engagement || pochette.date_engagement=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Date d'engagement d'oeuvre</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_engagement ? pochette.date_engagement : 'Null' "  @input="event => pochette.date_engagement = event.target.value"  :disabled="this.Modifer"/>
      </div>

      <div class="flex flex-row" v-if="pochette.date_logiciel || pochette.date_logiciel=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Date du logiciel</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_logiciel ? pochette.date_logiciel : 'Null' "  @input="event => pochette.date_logiciel = event.target.value"  :disabled="this.Modifer"/>
      </div>
      
      <div class="flex flex-row" v-if="pochette.date_preuve || pochette.date_preuve=== null">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Date de preuve de réalisation de l'operation</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_preuve ? pochette.date_preuve : 'Null' "  @input="event => pochette.date_preuve = event.target.value"  :disabled="this.Modifer"/>
      </div>

           <div class="flex flex-row " v-if="pochette.date_visite || pochette.date_visite=== null">
              <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de visite
               </h1>
              <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_visite  ? pochette.date_visite : 'Null' "  @input="event => pochette.date_visite = event.target.value"   :disabled="this.Modifer"/>
           </div>
                       
    <div class="flex flex-row" v-if="pochette.num_devis || pochette.num_devis=== null">
      <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600">N° Devis</h1>
      <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.num_devis  ? pochette.num_devis : 'Null' "  @input="event => pochette.num_devis = event.target.value"  :disabled="this.Modifer"/>
    </div>
    <div class="flex flex-row" v-if="pochette.numero_client || pochette.numero_client=== null">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600 text-center">N° Client</h1>
       <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.numero_client  ? pochette.numero_client : 'Null' "  @input="event => pochette.numero_client = event.target.value"   :disabled="this.Modifer"/>
    </div>
    <div class="flex flex-row" v-if="pochette.num_facture || pochette.num_facture=== null">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600 text-center">N° Facture</h1>
       <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.num_facture  ? pochette.num_facture : 'Null' "  @input="event => pochette.num_facture = event.target.value"   :disabled="this.Modifer"/>
    </div>
        <!-- date_audit-->
        <div class="flex flex-row " v-if="pochette.date_audit || pochette.date_audit=== null">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date Audit
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_audit ? pochette.date_audit : 'Null' "  @input="event => pochette.date_audit = event.target.value"  :disabled='this.Modifer' />
          </div>

     <div class="flex flex-row" v-if="pochette.date_devis || pochette.date_devis=== null">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date Devis</h1>
      <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_devis ? pochette.date_devis : 'Null' "  @input="event => pochette.date_devis = event.target.value"  :disabled="this.Modifer"/>
      </div>
   
    <div class="flex flex-row" v-if="pochette.date_visite_prealable || pochette.date_visite_prealable=== null">
     <h1 class="border rounded-l-md border-slate-200 py-2 w-52  text-xs font-bold	bg-cyan-600">Date de visite préalable</h1>
     <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_visite_prealable ? pochette.date_visite_prealable : 'Null' "  @input="event => pochette.date_visite_prealable = event.target.value"  :disabled="this.Modifer" />
     </div>
    
    <div class="flex flex-row " v-if="pochette.date_cette_proposition">
      <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de cette proposition
     </h1>
    <h1 class="border rounded-r-md border-slate-200 bg-white  flex-row text-xs py-2 w-80 text-black">{{pochette.date_cette_proposition }}</h1>
   </div>

          <div class="flex flex-row " v-if="pochette.adresse_email || pochette.adresse_email=== null">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs 	bg-cyan-600">Adresse Email
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.adresse_email ? pochette.adresse_email : 'Null' " @input="event => pochette.adresse_email = event.target.value" :disabled='this.Modifer'/>
          </div>

          <div class="flex flex-row " v-if="pochette.date_debut_des_travaux">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de debut des travaux
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_debut_des_travaux' @input="event => pochette.date_debut_des_travaux = event.target.value" :disabled='this.Modifer' />
          </div>

          
          <div class="flex flex-row " v-if="pochette.date_fin_des_travaux">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de fin des travaux
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='pochette.date_fin_des_travaux' @input="event => pochette.date_fin_des_travaux = event.target.value" :disabled='this.Modifer' />
          </div>
          
          <div class="flex flex-row " v-if="pochette.date_facture || pochette.date_facture=== null">
            <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Date de facture
           </h1>
            <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.date_facture ? pochette.date_facture : 'Null' " @input="event => pochette.date_facture = event.target.value"  :disabled='this.Modifer' />
          </div>

          <div class="flex flex-row " v-if="pochette.adresse_client || pochette.adresse_client=== null">
              <h1 class="border rounded-l-md border-slate-200 py-2 w-52 text-xs font-bold	bg-cyan-600">Adresse</h1>
                <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value="pochette.adresse_client ? pochette.adresse_client : 'Null' " @input="event => pochette.adresse_client = event.target.value"  :disabled="this.Modifer"/>
           </div>

      <div class="flex flex-row" v-if="pochette.type_oeuvre">
         <h1  class="border rounded-l-md border-slate-200 py-2 w-52 text-xs  font-bold	bg-cyan-600"> Type d'oeuvre</h1>
         <input :class="[this.Modifer ?  'border rounded-r-md  bg-slate-100  flex-row  w-80 text-xs py-2 text-black text-center': 'border rounded-r-md border-slate-200 bg-white  flex-row  w-80 text-xs py-2 text-black text-center']" :value='capitalized(pochette.type_oeuvre)' @input="event => pochette.type_oeuvre = event.target.value" :disabled="this.Modifer"/>
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
