<template>
    <div class="flex flex-nowrap  p-4 ">
          <div class=" flex  items-center bg-white w-[30%] h-21 shadow-lg  rounded "  >
                  <div class=  "bg-cyan-700 w-1.5 h-20 rounded-3xl m-3"></div>
                  <div>
                    <div class="flex justify-between ">
                      <div >
                        <h1 class="font-bold text-xl pr-16">DOSSIER NOM </h1>
                      </div >
                      <div class="px-12">
                        <label class="toggle">
                          <input type="checkbox" >
                          <span class="slider"></span>
                          <span class="labels" data-on="Terminé" data-off="En cours"></span>
                        </label>
                      </div>
                    </div>
                    <p>#D0001</p>                   
                    <p class="text-neutral-600">Lorem ipsum repellendus omnis</p>
                  </div>
                </div>
               
                <div class="mx-auto md:flex flex-col mt-10 md:justify-between md:items-center ">
                  <div >
                  <router-link 
                            to="/Pochettes"
                            tag="button"                     
                            class="   p-3  px-10 bg-cyan-600	 rounded-l text-sm  text-white "
                          ><font-awesome-icon icon="fa-solid fa-folder-open"/>  
                           Documents
                   </router-link>
                 
                  <router-link  to="/test"  tag="button"   class="  p-3   px-10 bg-cyan-700	 rounded-r text-sm  text-white ">
                    <font-awesome-icon icon="fa-solid fa-code-compare"/>  Comparer   </router-link>  
                    
                   </div>
                   <div class="flex flex-row items-center text-red-500 text-xs">
                      <font-awesome-icon icon="fa-solid fa-circle-exclamation"   class="pr-1 text-lg"/> 
                      <p>Documents qui manque</p>
                    </div>
                  </div>  
                  
                
                <div class="mr-2 flex  p-0   justify-between items-center bg-white w-[30%]  shadow-lg rounded "  >
                <div class="text-cyan-700 font-semibold text-lg ml-2">
                  <h1>Client</h1> 
                  <p>Ajouter par </p>
                   <p>Date d'ajout</p>  
                </div>
                
                  <div class=  "bg-cyan-700 w-1.5 h-20 rounded-3xl m-3"></div>
                  
                </div>

        </div>
</template>