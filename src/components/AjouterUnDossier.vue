
<template class="absolute  justify-center items-center">
          <section >
            <div class=" flex flex-row  justify-start items-center border-b border-b-slate-200  rounded-l px-2 border-cyan-700 ">
              <div>
                <div class=" bg-cyan-700 w-2 h-7 rounded-full  items-center"></div>
              </div>
              <div>
                <h1 class="text-2xl p-2 font-bold ">Create un Nouveau dossier</h1>
              </div>
                <div>
                  <button type="button" class="absolute top-4 right-6" >                           
              </button>
                </div>
            
            </div>
          </section>
            <form @submit.prevent="submitForm">
        <section  class="flex flex-warp justify-around items-center w-full ">
            <section  class="w-5/12 ">
                    
            
                      <div>

                          <h1 class="font-bold py-2">Description</h1>
                            <input class="border-2 rounded p-2 h-48  w-full border-gray-400  " 
                            placeholder="Description de la neauveau dossier"
                            type="text"
                            v-model="description"
                            />
                          </div>
                    </section>
                  <section class=" w-5/12  ">
                      <div>

                        <h1 class="font-bold py-2">Nom</h1>
                        <input class="border-2 p-2  rounded w-full bg-slate-200  border-gray-400 " 
                        placeholder="first_name"
                        type="text"
                        v-model="nom"
                        />
                      </div>

                      <div>
                    <h1 class="font-bold py-2">Prenom</h1>
                      <input class="border-2 p-2 rounded  w-full border-gray-400  " 
                      placeholder="02550182805"
                      type="text"
                      v-model="prenom"
                      />
                    </div>
                
               
            </section>
          </section>
                    <div class=" flex justify-center items-center p-4" >
                                <button
                                  type="button"
                                  class=" w-44 py-4 bg-[#13698f] text-white text-sm rounded "                                       
                                  @click="submit"
                                  >
                                  Confirmer
                                  
                                  </button>
                              </div>
    </form>                          
</template>
<script>

import axios from "axios"



export default {

name:'AjouterUnDossier',

data(){
  return {
    nom:'',
    prenom:'',
    description:''

  }
   
},

computed : {
     ...mapGetters(['dossier_id']),
     
  },

methods :{

AjoutDossier() {

  axios.post("/api/dossier/")
}









}


}





</script>


