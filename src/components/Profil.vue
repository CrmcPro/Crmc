<template class="absolute  justify-center items-center">
      <section >
        <div class=" flex flex-row  justify-start items-center border-b border-b-slate-200  rounded-l px-2 border-cyan-700 ">
          <div>
            <div class=" bg-cyan-700 w-2 h-7 rounded-full  items-center"></div>
          </div>
          <div>
            <h1 class="text-2xl p-2 font-bold ">Information Utitlisateur</h1>
          </div>
            <div>
              <button type="button" class="absolute top-4 right-6" >                           
           </button>
            </div>
        
        </div>
        <section class="flex flex-warp justify-around items-center p-3 ">
            <img src="/src/assets/149071.png" alt="image" class=" w-60 h-60 bg-white border-2 shadow-2xl rounded-full"/>

        </section>

 <section  class="flex flex-warp justify-around items-center w-full ">
      <section  class="w-5/12 ">
                 <div >

                <h1 class="font-bold py-2">Nom</h1>

                    <input class="border-2 border-gray-400  rounded p-2  w-full " placeholder="Thabet"/>
                   </div>
                 <div>

                     <h1 class="font-bold py-2">Prenom</h1>
                      <input class="border-2 rounded p-2  w-full border-gray-400  " placeholder="Ben Aicha"/>
                     </div>
                     <div>

                    <h1 class="font-bold py-2">Email</h1>
                    <input class="border-2 rounded p-2  w-full border-gray-400 bg-slate-200 " placeholder="thabet.ba@gmail.com"/>
                    </div>
                    <div  > 

                   <h1 class="font-bold py-2">Company</h1>
                    <input class="border-2 p-2 rounded w-full border-gray-400 bg-slate-200  " placeholder="Nom company"/>
                    </div>
                   <div>
        
                    <h1 class="font-bold py-2">Password</h1>
                    <input class="border-2 p-2 rounded   w-full  border-gray-400 "  type="password" placeholder="*************"/>
                   </div>
     </section>
     <section class=" w-5/12  ">
            <div>

                <h1 class="font-bold py-2">Company Email</h1>
                <input class="border-2 p-2  rounded w-full bg-slate-200  border-gray-400 " placeholder="sw.consulting@gmail.com"/>
            </div>
               <div>

             <h1 class="font-bold py-2">Numéro SIREN</h1>
               <input class="border-2 p-2 rounded  w-full border-gray-400  " placeholder="02550182805"/>
            </div>
          <div>

          <h1 class="font-bold py-2">Rue de la societe</h1>
          <input class="border-2 p-2  rounded w-full border-gray-400  " placeholder="Rue de la societe"/>
           </div>
           <div>
           <h1 class="font-bold py-2">Département de la societé</h1>
           <input class="border-2 p-2 rounded  w-full border-gray-400 " placeholder="Département de la societé"/>
           </div>
          <div>

          <h1 class="font-bold py-2">Zip code</h1>
          <input class="border-2 p-2 rounded w-full border-gray-400  " placeholder="65769"/>
           </div>
         </section>
         </section>
         </section>
                            <div class=" flex justify-center items-center p-4" >
                               <button
                                 type="button"
                                 class=" w-44 py-4 bg-[#13698f] text-white text-sm rounded "                                       
                                 >
                                            Confirmer
                                            </button>
                                            </div>
</template>

<script setup>
 import { useRouter} from "vue-router"

const router=useRouter()
  const Close=()=>{
  }
</script>