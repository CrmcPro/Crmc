
<template>
    <div class="bg-slate-100 h-screen min-w-max">
      <div class="bg-white border-b-2">
      <nav
        class="container px-2 pb-1 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
         
          <router-link
            to="/Home"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400">
            <h1 class="text-blue-300 text-xl shadow-black  font-bold	 ">
              CRM<spam class="text-blue-500 ml-0 text-xl font-bold	">C</spam>
            </h1>
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
         </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0">
         
            <router-link
              to="/Accueil">
            <li class="  text-cyan-600 font-bold  hover:text-gray-800 pointer-events-auto" >
              Acceuil
            </li></router-link>
          <li class=" text-gray-800 hover:text-blue-400">
            Utilisateurs
          </li>
    
        </ul>
        <ul class="flex text-sm ">
            <div>
              <li class="pl-14 font-medium">Name</li>
            <h6 class="text-gray-400 font-semibold">Administrateur</h6>
            </div>
           
            <img src="/src/assets/149071.png" alt="image" class="w-10 h-10 ml-3"/>
          </ul>
       </nav>
      </div>
      
      
        <section>
          <div class="flex flex-nowrap mt-4 pl-4 ">
                  <div class="  bg-white w-96 pl-6 border-l-8 rounded border-cyan-700 "  >
                      <h1 class="font-bold	">DOSSIER NOM</h1>
                      <p>#D0001</p>                   
                      <p>Lorem ipsum repellendus omnis</p>
                  </div>
                  <div class="pl-64 pt-6 flex-auto">
                    <button
                              
                              type="button"
                              class=" px-12 py-2  bg-cyan-600	 rounded-l text-sm  text-white "
                              @click=""
                            >
                            Documents
                            
                    </button>
                    <button
                              type="button"
                              class=" px-12 py-2  bg-cyan-700	 rounded-r text-sm  text-white "
                              @click=""
                            >
                              Comparer
                    </button>
                  </div>  
  
                  <div class=" font-medium	 bg-white w-96 ml-64 pl-6 mr-6 text-cyan-600 flex-auto  border-r-8 rounded border-cyan-700 ">
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
                  <label for="underline_select" class="sr-only">Underline select</label>
                    <select id="underline_select" class="pl-6 w-2/6 text-sm bg-transparent border-2 border-gray-300 rounded-lg   ">
                        <option selected class="font-black">Documents1-documents 5</option>
                        <option value="doc2">Documents3-documents2</option>
                        <option value="doc3">Documents8-documents9</option>
                        <option value="doc4">Documents1-documents5</option>
                    </select>
                    
                    <button class="bg-cyan-700 text-white	w-56 h-10 rounded text-sm  ml-2">
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
                           
                    <button class="bg-cyan-700 text-white	w-60 h-10 rounded text-sm  ml-2">
                      Comparer tous les documents
                    </button>

                    </section>




        </section>       
                 
  
     </div>
     
  
  
  
  
  </template>
  <script>
   import { useRouter} from "vue-router"
       const router=useRouter()
    const NavigationToAccueil=()=>{
          router.push("/Accueil")
       }
    </script>
  