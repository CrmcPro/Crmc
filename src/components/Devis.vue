
<script  >
 import Header from "./Header.vue"
 import { useRouter} from "vue-router"
 import DropFile from "./DropFile.vue"
import DescriptionDevis from "./DescriptionDevis.vue"
 import { mapActions, mapGetters,mapMutations } from 'vuex'

 export default {

name:"Devis",
data()
{
    return {
        router:useRouter(),
    }
},
props :{
    show: {
    type: Boolean,
    default: false,
  },
  },
  components: {
    Header ,
    DropFile ,
    DescriptionDevis
  },

mounted() {
 this.getdocument()
},
computed : {
      ...mapGetters(['View']),
         },
methods : {

      ...mapActions(['getdocument','SETIdPochette']),

   
  NavigationToAccueil(){
       this.router.push("/Accueil")
     },
 
},

}

</script>

<template>
  <div class="bg-slate-100">

  
  <Header/>
  <section class="  mt-8  flex flex-col items-center  ">
                <div class=" w-11/12 " >
                  <table class="  text-white text-sm text-center w-full  h-10">
                    <thead>
                      <tr >
                        <td  v-for="pouchette in pouchettes" :key="pouchette.value" :class="{ active : pouchette.checked}" class="border border-slate-300 	bg-cyan-700 w-24 cursor-pointer"  @click="changeStyle(pouchette)" >
                          <div class="absolute ml-2 mt-1.5 w-1.5 h-7  rounded-3xl  bg-cyan-700" v-if="pouchette.checked"></div>
                           <span>{{pouchette.text}}</span>
                          </td>
                      </tr>
                      <tr>
                        <td class=" font-medium text-solid  rounded-l  w-24 bg-white text-cyan-700"> Devis</td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"  ><button @click="()=>this.SETIdPochette(2)">Audit</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24" ><button  @click="()=>this.SETIdPochette(3)">CEE</button ></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button   @click="()=>this.SETIdPochette(4)">AH</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24" ><button @click="()=>this.SETIdPochette(5)" >Facture</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button @click="()=>this.SETIdPochette(6)">SYNTHESE </button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button @click="()=>this.SETIdPochette(7)">AMO</button></td>
                        <td class="border border-slate-300	bg-cyan-700 w-24"><button @click="()=>this.SETIdPochette(8)">FICHE_PRECO</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button @click="()=>this.SETIdPochette(9)">LISTING_ENTREPRISES </button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button @click="()=>this.SETIdPochette(10)">GEOPORTAIL </button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button @click="()=>this.SETIdPochette(11)">GEOLOCALISATION</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button @click="()=>this.SETIdPochette(12)">JUSTIF_DOMICILE</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24"><button @click="()=>this.SETIdPochette(13)">COFRAC</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 w-24" ><button @click="()=>this.SETIdPochette(14)">IMPO</button></td>

                      </tr>
                    </thead>
                </table>
                </div>
              </section>  
              
  <div  v-if="this.View" class="bg-slate-100 min-w-max ">   
      
      <section class="bg-white h-full">
              <DescriptionDevis/>              
        </section>
   </div>

        <section v-else>
          <div class="bg-slate-100  min-w-max ">
           <div  class="bg-white flex flex-col  items-center rounded-3xl">
          
            <DropFile/>
              </div>
            </div>
   </section>
  </div>
</template>

<script>
import { mapActions , mapGetters} from "vuex"
import Header from "./Header.vue"
import DropFile from "./DropFile.vue"
import DescriptionDevis from "./DescriptionDevis.vue"
export default {
  name:'Devis',
  data(){
    return {
      pouchettes : [
        { text : 'Devis' , value : 1 , checked : true},
        { text : 'Audit' , value : 2 , checked : false},
        { text : 'CEE' , value : 3 , checked : false},
        { text : 'AH' , value : 4 , checked : false},
        { text : 'Facture' , value : 5, checked : false},
        { text : 'SYNTHESE' , value : 6 , checked : false},
        { text : 'AMO' , value : 7 , checked : false},
        { text : 'FICHE_PRECO' , value : 8 , checked : false},
        { text : 'LISTING_ENTREPRISES ' , value : 9 , checked : false},
        { text : 'GEOPORTAIL ' , value : 10 , checked : false},
        { text : 'GEOLOCALISATION' , value : 11 , checked : false},
        { text : 'JUSTIF_DOMICILE' , value : 12 , checked : false},
        { text : 'COFRAC' , value : 13 , checked : false},
        { text : 'IMPO' , value : 14 , checked : false},

      ],
      isActive : false
    }
  },
  components: {
    Header ,
    DropFile ,
    DescriptionDevis
  },
  methods : {
    ...mapActions(['getdocument']),
    changeStyle(pouchette){
      this.pouchettes.map(pouch => {
        if(pouch.value == pouchette.value)
        {
          pouch.checked = true
        }else {
          pouch.checked = false
        }
      })
        }
  },
  computed : {
     ...mapGetters(['dossiers_id', 'View']),
  },
  mounted() {
   this.getdocument()
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
  width: 96px;
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