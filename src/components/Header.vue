<template>
    <div class="flex flex-row  justify-around p-4 ">
          <div class=" flex  items-center bg-white w-[30%] h-24 shadow-lg  rounded "  >
                  <div class=  "bg-cyan-700 w-1.5 h-20 rounded-3xl m-3"></div>
                  <div  v-for="item in   OneDossier" v-bind:key="item" >
                    <div class="flex justify-between ">
                      <div>      
                        <h1 class="font-bold pr-28" > {{item.first_name}} {{item.last_name}} </h1> 
                      </div >
                      <div class="">
                        <label class="toggle">
                          <input type="checkbox" >
                          <span class="slider"></span>
                          <span class="labels" data-on="Terminé" data-off="En cours"></span>
                        </label>
                      </div>
                    </div>
                    <p  >#{{item.id}}</p>                   
                    <p class="text-neutral-400 text-sm" > {{item.description}}</p>
                  </div>
                </div>
               
                <div  class=" md:flex flex-col mt-7 md:justify-between md:items-center ">
                  <div  v-for="item in   OneDossier" v-bind:key="item">

                    <button  class="   p-2  px-10 bg-cyan-600	 rounded-l text-xs font-semibold  text-white "
                    @click="() => NavigationTodevis(item.id)">
                    <font-awesome-icon icon="fa-solid fa-folder-open"/>  
                           Documents
                    </button>
                  
                    <button  
                    class="  p-2   px-10 bg-cyan-700	 rounded-r text-xs font-semibold  text-white "
                    @click="() => NavigationToComparer(item.id)">
                    <font-awesome-icon icon="fa-solid fa-code-compare"/>   Comparer  
                    </button>  

                   </div>

                   <div class="flex flex-row items-center text-red-600 text-xs">
                      <font-awesome-icon icon="fa-solid fa-circle-exclamation"   class="pr-1 py-4"/> 
                      <p>4 Documents qui manque</p>
                    </div>
                  </div>  
                  
                
                <div class="flex justify-between items-center bg-white w-[30%] h-24  shadow-lg rounded "  >
                <div class="text-cyan-700 font-semibold ml-8  ">
                
                  <div >    
                     Ajouter par :  <span class="text-black font-bold pl-16 " >  {{user.first_name}} {{user.last_name}} </span>  
                      <br>
                     Date d'ajout : <span v-for="(item) in OneDossier" v-bind:key="item" class="text-black pl-14" >{{dateTime(item.date_creation)}}</span>  
                   </div>
                
                  
                </div>
                
                  <div class=  "bg-cyan-700 w-1.5 h-20 rounded-3xl m-3"></div>
                  
                </div>

        </div>
</template>

<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
import moment from 'moment'
import axios from "axios"
import { useRouter} from "vue-router"

export default {
  name : 'Header',
  data() {
    return { 
      router:useRouter(),
      OneDossier : [],
      dossier_id: parseInt(this.$route.query.id_dossier) ,
    };
    
  },
  

  methods: {
    dateTime(value) {
      return moment(value).format("DD-MM-YYYY [à] HH:mm ");
    },

    ...mapActions(['getdossiers']),
   async NavigationTodevis (id) {
        this.router.push({
            path : '/Pochettes/1',
            query : { id_dossier : id }
            
        })

     },

    async NavigationToComparer (id) {
        this.router.push({
            path : '/VerificationList',
            query : { id_dossier : id }
            
        })

     }
     
     
     },
     computed : {
    
          ...mapGetters(['user']) ,
        },

 mounted () {
      axios.get("/api/dossiers/",{params: { 
            dossier_id : this.dossier_id,
        } },).then (res => {
            this.OneDossier =(res.data)
        })
    
 
}
  
     
}
</script>