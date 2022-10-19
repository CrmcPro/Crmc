

<template>
  <div class="bg-slate-100 h-screen min-w-max">   
      <section>
        <div class="flex flex-nowrap pt-4 pl-4 ">
                <div class="  bg-white w-96 pl-6 border-l-8 rounded border-cyan-700 "  >
                  <h1 class="font-bold ">DOSSIER NOM   
                  <label class="toggle">
                  <input type="checkbox" >
                  <span class="slider"></span>
                  <span class="labels" data-on="Terminé" data-off="En cours"></span>
                 </label>
                  </h1>
                    <p>#D0001</p>                   
                    <p>Lorem ipsum repellendus omnis</p>
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
            
      <section class="bg-white h-full mt-6">
          <section >
              <div class="pl-10  w-full" >
                <table class=" 	bg-cyan-700 text-white text-sm text-center w-full h-10 border-l-8  border-cyan-700 ">
                  <thead>
                    <tr>
                      <td class="border font-medium text-solid border-slate-300 w-28 focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none rounded-l">                    
                        <router-link to="/Upload">Devis </router-link> </td>

                      <td class="border border-slate-300  focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none ">
                      <button>Document 2</button></td>

                      <td class="border border-slate-300  focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none ">
                      <button> Document 3</button></td>

                      <td class="border border-slate-300  focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none ">
                      <button>Document 4</button></td>

                      <td class="border border-slate-300   focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none">
                      <button>  <font-awesome-icon icon="fa-solid fa-circle-exclamation" color="red" class="pr-1"/>Document 5</button></td>

                      <td class="border border-slate-300  focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none">
                      <button> <font-awesome-icon icon="fa-solid fa-circle-exclamation" color="red" class="pr-1"/>Document 6</button></td>

                      <td class="border border-slate-300  focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none">
                      <button>Document 7</button></td>

                      <td class="border border-slate-300   focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none">
                      <button>Document 8</button></td>

                      <td class="border border-slate-300  focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none">
                      <button>Document 9</button></td>

                      <td class="border border-slate-300  focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none">
                      <button>Document 10</button></td>

                      <td class="border border-slate-300  focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none">
                      <button>Document 11</button></td>

                      <td class="border border-slate-300  focus:text-cyan-700 focus:bg-slate-100 focus:border-cyan-700 focus:outline-none">
                      <button>Document 12</button></td>
                    </tr>
                  </thead>
              </table>
              </div>
              </section>
             
                  <section>
                    <table class="pt-16 pb-7  flex item-center text-center justify-center ">
                      <tr>
                      <td class=" pr-80 font-bold text-lg ">Devis</td>
                      <td class=" pl-80">
                        <button class="bg-cyan-700 w-32 h-10 rounded text-sm text-white"> Modifier
                          <font-awesome-icon icon="fa-solid fa-pen" color="" class="ml-2"/>
                        </button>
                      </td>

                    </tr>
                    </table>
                  </section>


              <section>
                
                <div>
                  <table class="  text-white border-separate border-spacing-1 flex item-center text-center justify-center">
  
                    <tr>
                      <td class="border rounded-l-md border-white h-12 text-sm font-semibold	bg-cyan-600">N°Devis</td>
                      <td class="border rounded-r-md border-slate-400 w-96 px-80  "></td>

                    </tr>
                    <tr>
                      <td class="border rounded-l-md h-12	bg-cyan-600 border-white text-sm font-semibold ">Eneretique</td>
                      <td class="border rounded-r-md border-slate-400 "></td>

                    </tr>
                    <tr>
                      <td class="border h-12 rounded-l-md	bg-cyan-600 border-white text-sm font-semibold ">Date</td>
                      <td class="border  border-slate-400 rounded-r-md "></td>

                    </tr>
                    <tr>
                      <td class="border h-12	bg-cyan-600 rounded-l-md border-white text-sm font-semibold">Prime</td>
                      <td class="border  rounded-r-md border-slate-400 "></td>

                    </tr>
                    <tr>
                      <td class="border px-12 h-12 rounded-l-md	bg-cyan-600 border-white text-sm  font-semibold">Total TTC</td>
                      <td class="border rounded-r-md border-slate-400"></td>

                    </tr>
                  </table>
                </div>
              </section>

              <section class="item-center text-center justify-center">                       
                  <h2 class="items-left font-bold pt-4 pb-4">Description</h2>
                  <p class="text-slate-400 font-semibold text-sm">Lorem, ipsum dolorequuntur eum aperiama desegfegergegegruntdgege iure repellat!</p>
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
     const NavigationToUpload=()=>{
          router.push("/Upload")
       }
     
   

  </script>
  <style>
  .toggle {
      --width: 70px;
      --height: calc(var(--width) / 4);

      position: relative;
      display: inline-block;
      width: var(--width);
      height: var(--height);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      border-radius: var(--height);
      cursor: pointer;
      margin-top: 2% ;
      margin-left: 45%;
    }

    .toggle input {
      display: none;
    }

    .toggle .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: var(--height);
      background-color: rgb(255, 214, 80);
      transition: all 0.4s ease-in-out;
    }

    .toggle .slider::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(var(--height));
      height: calc(var(--height));
      border-radius: calc(var(--height) / 2);
      background-color: #f3953d;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
      transition: all 0.4s ease-in-out;
    }

    .toggle input:checked+.slider {
      background-color: #2196F3;
    }

    .toggle input:checked+.slider::before {
      transform: translateX(calc(var(--width) - var(--height)));
    }

    .toggle .labels {
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 12px;
      font-family: sans-serif;
      transition: all 0.4s ease-in-out;
    }

    .toggle .labels::after {
      content: attr(data-off);
      position: absolute;
      right: 5px;
      color: #f3953d;
      opacity: 1;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
      transition: all 0.4s ease-in-out;
    }

    .toggle .labels::before {
      content: attr(data-on);
      position: absolute;
      left: 5px;
      color: #ffffff;
      opacity: 0;
      text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
      transition: all 0.4s ease-in-out;
    }

    .toggle input:checked~.labels::after {
      opacity: 0;
    }

    .toggle input:checked~.labels::before {
      opacity: 1;
    }
  
  </style>
