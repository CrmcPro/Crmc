
<template class="absolute  justify-center items-center">
          <section >
            <div class=" flex flex-row  justify-start items-center border-b border-b-slate-200  rounded-l px-2 border-cyan-700 ">
              <div>
                <div class=" bg-cyan-700 w-2 h-7 rounded-full  items-center"></div>
              </div>
              <div>
                <h1 class="text-2xl p-2 font-bold ">Créer un nouveau dossier</h1>
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
                            placeholder="Description du nouveau dossier"
                            type="text"
                            v-model="dossier.description"
                            />
                          </div>
                    </section>
                  <section class=" w-5/12  ">
                      <div>

                        <h1 class="font-bold py-2">Nom</h1>
                        <input class="border-2 p-2  rounded w-full  border-gray-400 " 
                        placeholder="Nom"
                        type="text"
                        v-model="dossier.first_name"
                        />
                      </div>

                      <div>
                    <h1 class="font-bold py-2">Prénom</h1>
                      <input class="border-2 p-2 rounded  w-full border-gray-400 " 
                      placeholder="Prenom"
                      type="text"
                      v-model="dossier.last_name"
                      />
                    </div>
                
               
            </section>
          </section>
                    <div class=" flex justify-center items-center p-4" >
                                <button
                                  type="submit"
                                  class=" w-44 py-4 bg-[#13698f] text-white text-sm rounded "   
                                  >
                                  Confirmer            
                                  </button>
                     </div>
    </form>     

</template>
<script>
import axios from "axios"
import Swal from 'sweetalert2'



export default {

name:'AjouterUnDossier',

data(){
  return {
    dossier : {
    first_name:'',
    last_name:'',
    description:''
    }
  } 
},
methods :{

  
submitForm() {

  axios.post("/api/dossiers/",this.dossier  
  ).then(response => {
    window.location.reload()
  })
 
}

}
}

</script>


