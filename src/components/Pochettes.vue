<template>
  <div class="bg-slate-100">

  
  <Header/>
  <section class="  mt-8  flex flex-col items-center  ">
                <div class=" w-11/12 " >
                  <table class="  text-white text-sm text-center w-full  h-10">
                    <thead>
                      <tr >
                        <td  v-for="pouchette in pouchettes" :key="pouchette.value" :class="{ active : pouchette.checked}" class="border border-slate-300 	bg-cyan-700 w-20 cursor-pointer"  @click="changeStyle(pouchette)" >
                          <div class="absolute py-3  ml-1  w-1.5   rounded-3xl  bg-cyan-700" v-if="pouchette.checked"></div>
                           <span class="text-xs">{{pouchette.text}}</span>
                          </td>
                      </tr>
                    </thead>
                </table>
                </div>
              </section>  
              <section v-if="looding">
                <Spinner/>
              </section>
  <div  v-if="view &&!looding" class="bg-slate-100 ">   
      <section>
              <DescriptionDevis  :title="currentTitle" @onDeleteEnd="deletedata"/>              
        </section>
   </div>
        <section v-if="!view &&!looding" >
          <div class="bg-slate-100  ">
           <div  class="bg-white flex flex-col  items-center rounded-3xl">
          


            <DropFile :id_props_pochette="id_pochette" :id_props_dossier="parseInt(this.$route.query.id_dossier)" @onReloadEnd="reloadData"/>

              </div>
            </div>
   </section>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapActions , mapGetters} from "vuex"
import Header from "./Header.vue"
import DropFile from "./DropFile.vue"
import DescriptionDevis from "./DescriptionDevis.vue"
import { useRouter } from 'vue-router'
import Spinner from "./Spinner.vue"
export default {
  name:'Pochettes',
  data(){
    return {
      currentTitle : 'Devis' ,
      looding : true ,
      router:useRouter(),
      view : false ,
      test: false ,
      id_pochette: null,
      pouchettes : [
        { text : 'Devis' , value : 1 , checked : true ,PusherLooding :  false },
        { text : 'Audit' , value : 2 , checked : false ,PusherLooding :  false },
        { text : 'CEE' , value : 3 , checked : false ,PusherLooding :  false },
        { text : 'AH' , value : 4 , checked : false ,PusherLooding :  false },
        { text : 'Facture' , value : 5, checked : false ,PusherLooding :  false},
        { text : 'Synthese' , value : 6 , checked : false ,PusherLooding :  false},
        { text : 'Amo' , value : 7 , checked : false ,PusherLooding :  false},
        { text : 'Fiche Preconisation' , value : 8 , checked : false ,PusherLooding :  false},
        { text : 'Liste des Entreprises' , value : 9 , checked : false ,PusherLooding :  false},
        { text : 'GEOPORTAIL ' , value : 10 , checked : false ,PusherLooding :  false},
        { text : 'GEOLOCALISATION' , value : 11 , checked : false ,PusherLooding :  false},
        { text : 'JUSTIFICATIF DE DOMICILE' , value : 12 , checked : false ,PusherLooding :  false},
        { text : 'COFRAC' , value : 13 , checked : false ,PusherLooding :  false},
        { text : "AVIS D'IMPOT" , value : 14 , checked : false ,PusherLooding :  false},

      ],
      isActive : false
    }
  },
  components: {
    Header ,
    DropFile ,
    DescriptionDevis ,
    Spinner
  },
  watch:{
    test: function(){
      alert('hello')
      
    }
  },
computed : {
  ...mapGetters(["dossier_id","pochette_id"]),
        

          },
  methods : {
    ...mapActions(['getdocument' , 'SETIdPochette','getPochetteData']),
    reloadData() {
     
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'le document est téléchargé ',
          showConfirmButton: false,
          timer: 3000
          }).then(res=>(
            
            this.view= !this.view
          ))
         
       
        

    },
    deletedata(){
      this.view = false

    },
    async changeStyle(pouchette){
     
      this.pouchettes.map(pouch => {
        if(pouch.value == pouchette.value)
        {
          this.id_pochette = pouchette.value
          pouch.checked = true,
          this.currentTitle = pouch.text
         

        }else {
          pouch.checked = false
         

        }
      })
      console.log('=============)',this.$route.query.id_dossier)
      
      const response = await   this.getdocument({
        pochette_id : this.id_pochette ,
        dossier_id : parseInt(this.$route.query.id_dossier),
        pochette_name : pouchette.text ,
      })
      console.log('==============>', this.id_pochette , parseInt(this.$route.query.id_dossier))
   if(response.success)
   {
    this.view = true 
   }else 
   {
    this.view = false
   }
        }
  },
  computed : {
  },
  async mounted() {
  const response = await this.getdocument({
    pochette_id : 1 ,
    dossier_id : parseInt(this.$route.query.id_dossier)
   })
   console.log('response.success',response)

   if(response.success){
    this.view = true
    this.looding = false
   }else
   this.looding = false

  },
  
}
</script>

<style >
.active {
  background-color: white;
  color: rgb(14 116 144);
  text-decoration-style: solid;
  font-size: medium;
  border-radius:5%;
  width: 170px;
}
.toggle {
      --width: 70px;
      --height: calc(var(--width) / 4);

      position: relative;
      display: inline-block;
      width: var(--width);
      height: var(--height);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: var(--height);
      cursor: pointer;
      margin-top: 2% ;
      margin-left: 45%;
    }

    .toggle input {
      display: none;
    }

    .toggle .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: var(--height);
      background-color: rgb(255, 214, 80);
      transition: all 0.4s ease-in-out;
    }

    .toggle .slider::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(var(--height));
      height: calc(var(--height));
      border-radius: calc(var(--height) / 2);
      background-color: #f3953d;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      transition: all 0.4s ease-in-out;
    }

    .toggle input:checked+.slider {
      background-color: #2196F3;
    }

    .toggle input:checked+.slider::before {
      transform: translateX(calc(var(--width) - var(--height)));
    }

    .toggle .labels {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 12px;
      font-family: sans-serif;
      transition: all 0.4s ease-in-out;
    }

    .toggle .labels::after {
      content: attr(data-off);
      position: absolute;
      right: 5px;
      color: #f3953d;
      opacity: 1;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
      transition: all 0.4s ease-in-out;
    }

    .toggle .labels::before {
      content: attr(data-on);
      position: absolute;
      left: 5px;
      color: #ffffff;
      opacity: 0;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
      transition: all 0.4s ease-in-out;
    }

    .toggle input:checked~.labels::after {
      opacity: 0;
    }

    .toggle input:checked~.labels::before {
      opacity: 1;
    }
  

</style>