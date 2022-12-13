
<template class="absolute  justify-center items-center">
    <section >
      <div class=" flex flex-row  justify-start items-center border-b border-b-slate-200  rounded-l px-2 border-cyan-700 ">
        <div>
          <div class=" bg-cyan-700 w-1 h-4 rounded-full  items-center"></div>
        </div>
        <div>
          <h1 class=" p-2 font-bold ">Créer un nouveau utilisateur</h1>
        </div>
          <div>
            <button type="button" class="absolute top-4 right-6" >                           
        </button>
          </div>
      
      </div>
    </section>

<form @submit.prevent="submitForm">
  <section  class="flex flex-warp justify-around items-center w-full ">
            
    <section class=" w-5/12  ">
                <div>

                  <h1 class="font-semibold py-2 text-sm">Nom</h1>
                  <input class="border-2 p-2  rounded w-full text-sm  border-gray-400 " 
                  placeholder="Nom"
                  type="text"
                  v-model="user.first_name"
                  />
                </div>

                <div>
              <h1 class="font-semibold text-sm py-2">Email</h1>
                <input class="border-2 p-2 rounded text-sm w-full border-gray-400 " 
                placeholder="Email"
                type="email"
                v-model="user.email"
                />
              </div>     
              
            
               
      </section> 

            <section class=" w-5/12  ">
                <div>

                  <h1 class="font-semibold py-2 text-sm">Prénom</h1>
                  <input class="border-2 p-2  rounded w-full text-sm  border-gray-400 " 
                  placeholder="Prenom"
                  type="text"
                  v-model="user.last_name
"
                  />
                </div>

                <div>
              <h1 class="font-semibold text-sm py-2">Mot de passe</h1>
                <input class="border-2 p-2 rounded text-sm w-full border-gray-400 " 
                placeholder="Mot de passe"
                type="password"
                v-model="user.password
"
                />
              </div>
           
              
              
              

          
         
      </section>
      
    </section>
              <div class=" flex justify-center items-center p-4" >
                          <button
                            type="submit"
                            class=" w-36 mt-5 py-2  bg-[#13698f] text-white text-sm rounded "   
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

name:'AjoutUtilisateur',

data(){
return {
    user : {
    first_name:'',
    last_name:'',
    email:'',
    password:''

    }
  } 
},
methods :{


submitForm() {

        axios.post("/accounts/users/",this.user  
        ).then(response => {
        window.location.reload()
        })
      }
    }}

</script>


