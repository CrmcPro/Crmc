<template class="absolute  justify-center items-center  ">
    <section>
        <div class=" flex flex-row  justify-start  items-center border-b border-b-slate-200  rounded-l px-2 border-cyan-700 ">
              <div>
              <div class=" bg-cyan-700 w-1 h-4 rounded-full  items-center"></div>
              </div>

              <div>
                <h1 class="text-lg p-2 font-semibold ">Information Utilisateur</h1>
              </div>
                <div>
                <button type="button" class="absolute top-4 right-6" ></button>
           </div>
         </div>
        <section class="flex flex-warp justify-around items-center p-3  " @click="onchange">
            <img :src="'http://192.168.1.123:8000'+user.avatar" alt="image" class=" w-16 h-16 bg-white border-2 rounded-full"/>
              <label  class=" bg-slate-200  absolute ml-40  mt-32 border-1 rounded-full" for="fileInput" ></label>        
        </section>
      
          <section  class="flex flex-warp justify-around items-center w-full ">
          <section  class="w-5/12 ">
                    <div >
                      <h1 class="font-semibold text-sm py-2 ">Nom</h1>
                      <input :class='["border-2 border-gray-400  rounded p-2 text-xs w-full"]' type="text" :value="user.first_name"  @input="event => user.first_name = event.target.value"/>
                      </div>
                    <div>

                     <h1 class="font-semibold text-sm py-2">Prénom</h1>
                     <input :class='["border-2 border-gray-400  rounded p-2 text-xs w-full"]' type="text" :value="user.last_name  "  @input="event => user.last_name = event.target.value" />
                     </div>
                     <div>

                    <h1 class=" font-semibold text-sm py-2 ">Email</h1>
                    <input :class='["border-2 border-gray-700  rounded p-2 text-xs w-full"]' type="email" disabled :value="user.email"  @input="event => user.email = event.target.value" />
                    </div>
                    <div  > 

                   <h1 class="font-semibold text-sm py-2">Nom Compagnie</h1>
                   <input :class='["border-2 border-gray-400  rounded p-2 text-xs w-full"]' :value="user.company"  @input="event => user.company = event.target.value" />
                    </div>

                   <div>
                    <h1 class="font-semibold text-sm py-2">Mot de passe</h1>
                    <input :class='["border-2 border-gray-400  rounded p-2 text-xs w-full"]' type="paswword" :value="user.password" @input="event => user.password = event.target.value" />
                   </div>
     </section>
     <section class="w-5/12" v-if="user.is_admin_company===true">
            <div>

                <h1 class="font-semibold text-sm py-2">Email Compagnie</h1>
                <input :class='["border-2 border-gray-400  rounded p-2 text-xs w-full"]' :value="user.company_email" type="email"  @input="event => user.company_email = event.target.value" />
            </div>
               <div>

             <h1 class="font-semibold text-sm py-2">Numéro Siren</h1>
             <input :class='["border-2 border-gray-400  rounded p-2 text-xs w-full"]' :value="user.siren_number"  @input="event => user.siren_number = event.target.value" />
            </div>
          <div>

          <h1 class="font-semibold text-sm py-2">Adresse Compagnie</h1>
          <input :class='["border-2 border-gray-400  rounded p-2 text-xs w-full"]' :value="user.company_department"  @input="event => user.company_department = event.target.value" />
           </div>
           <div>
           <h1 class="font-semibold text-sm py-2">Rue du Compagnie</h1>
           <input :class='["border-2 border-gray-400  rounded p-2 text-xs w-full"]' :value="user.company_street"  @input="event => user.company_street = event.target.value" />
           </div>
          <div>

          <h1 class="font-semibold text-sm py-2">Code Postal</h1>
          <input :class='["border-2 border-gray-400  rounded p-2 text-xs w-full"]' :value="user.zip_code"  @input="event => user.zip_code = event.target.value" />
           </div>
         </section>
         </section>
         </section>
                            <div class=" flex justify-center items-center p-4" >
                               <button
                                 @click="ModifyUser"
                                 type="button"
                                 class=" w-36 py-2 bg-[#13698f] mt-6 text-white text-sm rounded ">
                                            Confirmer
                               </button>
                            </div>
</template>

<script >
import { useRouter} from "vue-router"
import { mapActions, mapGetters, mapMutations } from 'vuex'
import store from "../store"
import ChangeImage from "../screen/ChangeImage.vue"
import axios from "axios"

export default {
      name : 'Profil',
      props:{
        ChangeImage
            },
      data(){
        return {
          files : [] ,
              }
            },
          computed : {
           ...mapGetters(['user']) ,
          },

       methods : {
            
        ModifyUser(){
          var bodyformData = new FormData();
     
          //Données Energitique
      
          bodyformData.append('first_name',this.user.first_name )
          bodyformData.append('last_name',this.user.last_name)
          bodyformData.append('email',this.user.email)
          // bodyformData.append('password',this.user.password)

          // bodyformData.append('company',this.user.company)
          // bodyformData.append('company_email',this.user.company_email)
          // bodyformData.append('siren_number',this.user.siren_number)
          // bodyformData.append('company_department',this.user.company_department)
          // bodyformData.append('company_street',this.user.company_street)
          // bodyformData.append('zip_code',this.user.zip_code)
          console.log()
          axios.put("/accounts/users/me",bodyformData).then(response=>{
                  Swal.fire({
                    title:'Modifier!',
                    text:'les information sont modifiés.',
                    type:'success',
                    confirmButtonColor: "#13698f",
                  })
                
                })
           }
     }
}
           
</script>