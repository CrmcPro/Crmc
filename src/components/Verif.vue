
<template>
    <div class="bg-slate-100 h-screen min-w-max">
      <section>
        <div class="flex flex-nowrap pt-4 pl-4 ">
          <div class=" flex  p-4  items-center bg-white w-96 rounded "  >
                  <div class=  "bg-cyan-700 w-2 h-20 rounded-3xl m-3  "></div>
                  <div>
                    <div class="flex flex-row">

                      <h1 class="font-bold ">DOSSIER NOM   
                        
                      </h1>
                      <label class="toggle">
                        <input type="checkbox" >
                        <span class="slider"></span>
                        <span class="labels" data-on="Terminé" data-off="En cours"></span>
                      </label>
                    </div>
                    <p>#D0001</p>                   
                    <p>Lorem ipsum repellendus omnis</p>
                  </div>
                </div>
                <div class="mx-auto md:flex md:justify-between md:items-center ">
                 
                  <router-link 
                            to="/"
                            tag="button"                     
                            class=" px-10 py-2  bg-cyan-600	 rounded-l text-sm  text-white "
                          ><font-awesome-icon icon="fa-solid fa-folder-open"/>  
                           Documents
                   </router-link>
                 
                  <router-link 
                            to="/Verif"
                            tag="button"                     
                            class=" px-12 py-2  bg-cyan-700	 rounded-r text-sm  text-white "
                          ><font-awesome-icon icon="fa-solid fa-code-compare"/>
                            Comparer
                   </router-link>
                </div>  

                <div class=" font-medium bg-white w-96 mr-6 text-cyan-600  border-r-8 rounded border-cyan-700 ">
                   <h1>Client</h1> 
                   <p>Ajouter par </p> 
                   <p>Date d'ajout</p>  
                 </div>
        </div>
      </section>
              
        <section class="bg-white h-full mt-8">
                
                
                <section class=" text-center mr-96   ">
                    <h1 class=" pt-28 pb-2 mr-44 font-bold text-xl">Vérifier vos documents</h1>
                    <p class="text-xs text-gray-600 pl-80" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, fegegegregeglldmzojihfuiehgjiodhfepariatur quia, beatae dolorem</p>
                    <p class="text-xs  text-gray-600 pl-80">Lorem ipsum, dolor s consectetur a molestias laboriosam expedita recusandfgeklgjkerghjkerhgkehrgeirhgiuehrffae, undt quas adipisci!</p>
                    <p class="text-xs  text-gray-600 pl-80">Lorem ipsum, dolor s consectetur a moleszevmzkihgruzpjiohgieuhgiorejgjhgfetias laboriosam expedita recusandae, undt quas adipisci!</p>
                </section>

                
              <section class=" flex flex-nowrap pt-20 align-middle justify-center  ">
                  <label for="" class="sr-only">Underline select</label>
                    <select id="underline_select" class="pl-6 w-2/6 text-sm bg-transparent border-2 border-gray-300 rounded-lg   ">
                        <option selected class="font-black">Documents1-documents 5</option>
                        <option value="doc2">Documents3-documents2</option>
                        <option value="doc3">Documents8-documents9</option>
                        <option value="doc4">Documents1-documents5</option>
                    </select>
                    
                    <button class="bg-cyan-700 text-white	w-56 h-10 rounded text-sm  ml-2 " @click="ShowProgress = !ShowProgress">
                      Tester
                    </button>
                   
               </section>   


                  <section class="pt-20">
                    <div class="flex-wrap flex justify-center"> 
                        <hr class="border-1 border-gray-400 w-80 mt-2 mr-16 ">
                       <p class="font-bold text-xs ">OU</p> 
                        <hr class="border-1 border-gray-400 w-80 mt-2 ml-16 ">
                    </div>   
                  </section>

                    <section class="pt-20 flex justify-center">
                           
                    <button @click="showModal = !showModal"
                     class="bg-cyan-700 text-white	w-60 h-10 rounded text-sm  ml-2">
                      Comparer tous les documents
                    </button>
                    <div class="page p-8">
   
                    <ModalDialog :show="showModal" @close="showModal = false">
                     <VerificationList/>
                    </ModalDialog>
                    </div>
                    <ModalDialog :show="ShowProgress" @close="ShowProgress = false">
                     <ProgressBar/>
                    </ModalDialog>
                    </section>
        </section>       
                 
  
     </div>
     
  
  
  
  
  </template>
  <script>
   import { useRouter} from "vue-router"
   import ModalDialog from "../components/Model.vue"
   import VerificationList from "../components/VerificationList.vue"
   import ProgressBar from "../components/ProgressBar.vue"
   import { ref } from 'vue';
   const router=useRouter()
   const NavigationToAccueil=()=>{
          router.push("/Accueil")
       }
const components = {
  ModalDialog,
  VerificationList,
  ProgressBar

};
export default {
  name: 'Verif',
  components,
  setup() {
    const showModal = ref(false);
    const ShowProgress = ref(false);
    return {
      showModal,
      ShowProgress
    };
  },
};
    </script>
  