<script >
import { useRouter} from "vue-router"
import { mapActions, mapGetters, mapMutations } from 'vuex'
import store from "../store"
import ChangeImage from "../screen/ChangeImage.vue"

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
               onchange () {
  
              }
           }
}
           
          </script>
          
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
                  <button type="button" class="absolute top-4 right-6" >                           
              </button>
              </div>
        
          </div>
        <section class="flex flex-warp justify-around items-center p-3  " @click="onchange">
            <img :src="'http://192.168.1.210:8000'+user.avatar" alt="image" class=" w-16 h-16 bg-white border-2 rounded-full"/>
              <label  class=" bg-slate-200  absolute ml-40  mt-32 border-1 rounded-full" for="fileInput" >
             
              </label>
             
             </section>
      
          <section  class="flex flex-warp justify-around items-center w-full ">
          <section  class="w-5/12 ">
                 <div >

                <h1 class="font-semibold text-sm py-2">Nom</h1>
                   <h1  class="border-2 border-gray-400  rounded p-2 text-xs w-full">{{user.first_name}}</h1>
                   </div>
                 <div>

                     <h1 class="font-semibold text-sm py-2">Prénom</h1>
                     <h1  class="border-2 border-gray-400  rounded p-2 text-xs  w-full">{{user.last_name}}</h1>

                      <!-- <input class="border-2 rounded p-2  w-full border-gray-400  " placeholder="Ben Aicha"/> -->
                     </div>
                     <div>

                    <h1 class="font-semibold text-sm py-2">Email</h1>
                    <!-- <input class="border-2 rounded p-2  w-full border-gray-400 bg-slate-200 " placeholder="thabet.ba@gmail.com"/> -->
                    <h1  class="border-2 border-gray-400  rounded p-2 text-xs  w-full text-sm">{{user.email}}</h1>

                    </div>
                    <div  > 

                   <h1 class="font-semibold text-sm py-2">Nom Entreprise</h1>
                    <!-- <input class="border-2 p-2 rounded w-full border-gray-400 bg-slate-200  " placeholder="Nom company"/> -->
                    <h1  class="border-2 p-2 rounded w-full border-gray-400 text-xs  bg-slate-200  ">{{user.company}}</h1>
                    </div>
                   <div>
                    <h1 class="font-semibold text-sm py-2">Mot de passe</h1>
                    <input class="border-2 p-2 rounded   w-full  border-gray-400 text-xs "  type="password" placeholder="*************"/>
                    <!-- <h1 class="border-2 p-2 rounded   w-full  text-xs border-gray-400 "  type="password" ></h1> -->
                   </div>
     </section>
     <section class=" w-5/12  ">
            <div>

                <h1 class="font-semibold text-sm py-2"> Email Entreprise</h1>
                <input class="border-2 p-2  rounded w-full bg-slate-200 text-xs   border-gray-400 " placeholder="sw.consulting@gmail.com"/>
            </div>
               <div>

             <h1 class="font-semibold text-sm py-2">Numéro du SIREN</h1>
               <input class="border-2 p-2 rounded  w-full border-gray-400 text-xs  " placeholder="02550182805"/>
            </div>
          <div>

          <h1 class="font-semibold text-sm py-2">Adresse de la societé</h1>
          <input class="border-2 p-2  rounded w-full border-gray-400 text-xs   " placeholder="Rue de la societe"/>
           </div>
           <div>
           <h1 class="font-semibold text-sm py-2">Département de la societé</h1>
           <input class="border-2 p-2 rounded  w-full text-xs border-gray-400  " placeholder="Département de la societé"/>
           </div>
          <div>

          <h1 class="font-semibold text-sm py-2">Zip code</h1>
          <input class="border-2 p-2 rounded w-full text-xs border-gray-400  " placeholder="65769"/>
           </div>
         </section>
         </section>
         </section>
                            <div class=" flex justify-center items-center p-4" >
                               <button
                                 type="button"
                                 class=" w-36 py-2 bg-[#13698f] text-white text-sm rounded "                                       
                                 >
                                            Confirmer
                                            </button>
                                            </div>
</template>
