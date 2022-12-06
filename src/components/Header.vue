<template>
    <div class="flex flex-row  justify-around p-4 ">
          <div class=" flex  items-center bg-white w-[30%] h-21 shadow-lg  rounded "  >
                  <div class=  "bg-cyan-700 w-1.5 h-20 rounded-3xl m-3"></div>
                  <div  v-for="item in   OneDossier" v-bind:key="item" >
                    <div class="flex justify-between ">
                      <div>      
                        <h1 class="font-bold text-l pr-28" > {{item.first_name}} {{item.last_name}} </h1> 
                      </div >
                      <div class="px-12">
                        <label class="toggle">
                          <input type="checkbox" >
                          <span class="slider"></span>
                          <span class="labels" data-on="Terminé" data-off="En cours"></span>
                        </label>
                      </div>
                    </div>
                    <p  >#{{item.id}}</p>                   
                    <p class="text-neutral-600" > {{item.description}}</p>
                  </div>
                </div>
               
                <div  class=" md:flex flex-col mt-10 md:justify-between md:items-center ">
                  <div >
                  <router-link 
                            to="/Acceuil"
                            tag="button"                     
                            class="   p-3  px-10 bg-cyan-600	 rounded-l text-sm  text-white "
                          ><font-awesome-icon icon="fa-solid fa-folder-open"/>  
                           Documents
                   </router-link>
                 
                  <router-link  to="/VerificationList"  tag="button"   class="  p-3   px-10 bg-cyan-700	 rounded-r text-sm  text-white ">
                    <font-awesome-icon icon="fa-solid fa-code-compare"/>  Comparer   </router-link>         
                   </div>

                   <div class="flex flex-row items-center text-red-500 text-xs">
                      <font-awesome-icon icon="fa-solid fa-circle-exclamation"   class="pr-1 text-lg py-4"/> 
                      <p>Documents qui manque</p>
                    </div>
                  </div>  
                  
                
                <div class="mr-2 flex  p-0   justify-between items-center bg-white w-[30%]  shadow-lg rounded "  >
                <div class="text-cyan-700 font-semibold text-lg ml-2  ">
                
                  <div >    
                     Ajouter par :  <span class="text-black pl-16" >  {{user.first_name}} {{user.last_name}} </span>  
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

export default {
  name : 'Header',
  data() {
    return { 
      OneDossier : [],
      dossier_id: parseInt(this.$route.query.id_dossier) ,
    };
    
  },
  

  methods: {
    dateTime(value) {
      return moment(value).format("DD-MM-YYYY [à] HH:mm a");
    },

    
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