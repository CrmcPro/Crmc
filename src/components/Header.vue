<template>
    <div class="flex flex-nowrap pt-3 pl-3 ">
          <div class=" flex  p-0  items-center bg-white w-96   rounded "  >
                  <div class=  "bg-cyan-700 w-1.5 h-20 rounded-3xl m-3"></div>
                  <div>
                    <div class="flex justify-between ">
                      <div >
                        <h1 class="font-bold">DOSSIER NOM   
                        </h1>
                      </div >
                      <div class="pl-32">
                        <label class="toggle">
                          <input type="checkbox" >
                          <span class="slider"></span>
                          <span class="labels" data-on="Terminé" data-off="En cours"></span>
                        </label>
                      </div>
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
                <div class="mr-2 flex  p-0   justify-between items-center bg-white w-96   rounded "  >
                <div class="text-cyan-700 text-lg ml-2">
                  <h1>Client</h1> 
                  <p>Ajouter par </p>
                   <p>Date d'ajout</p>  
                </div>
                
                  <div class=  "bg-cyan-700 w-1.5 h-20 rounded-3xl m-3"></div>
                  
                </div>
        </div>
</template>