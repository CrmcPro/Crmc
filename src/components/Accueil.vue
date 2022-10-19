
<template>
  <div class="bg-slate-100 h-screen min-w-max">
    <div class="flex items-center text-center justify-between p-3">
      <h1 class="font-bold text-2xl py-6 pl-10">Liste des dossiers</h1>
      <button class="bg-cyan-700 w-70 h-9 p-5  text-white rounded-lg flex items-center justify-between" >
    <img src="../assets/add.svg" class="bg-white w-5 h-5 rounded-3xl m-3">
           Ajouter un dossier</button>
    </div>
  <div class="bg-white px-10 rounded-xl">
                            <!-- ChercheBar -->
                     <Cherchebar/>
                        <!-- Tableau de suive -->
                <div class="overflow-hidden  border-inherit rounded-lg">
                    <table class="min-w-full divide-y  divide-gray-100">
                        <thead class="bg-cyan-700  ">
                            <tr  class="border-2">
                                <th scope="col" class="py-3 pl-4 border-2 rounded-tl-md">
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                >
                                    ID dossier
                                   
                                </th>
                              <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                >
                                    Nom Dossier
                                    
 
                                </th>
                           
                                
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                >
                                    Client
                                   
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                >
                                    User
                                   
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                >
                                    Date
                                   
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center border-2 text-[#ffffff] uppercase"
                                >
                                    Statut
                                   
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-center border-2 rounded-tr-md text-[#ffffff] uppercase"
                                >
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody class=" divide-black text-center border-2 border-slate-100">
                            <tr class="hover:bg-slate-200">
                                <td class="py-3 pl-2">
                                    <div class="flex items-center h-5">
                                        <input
                                            type="checkbox"
                                            class="text-blue-600  border-gray-200 rounded focus:ring-blue-500"
                                        /> 
                                        <label for="checkbox" class="sr-only border-2 border-slate-100">
                                            Checkbox
                                        </label>
                                    </div>
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-gray-800 border-2 border-slate-100 whitespace-nowrap"
                                >
                                    #MN0129
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium border-2 border-slate-100 text-gray-800 whitespace-nowrap"
                                >
                                    SW Consulting
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium border-2 border-slate-100 text-gray-800 whitespace-nowrap"
                                >
                                    Robert DM
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium  border-2 border-slate-100 text-right whitespace-nowrap"
                                >
                                  
                                        Samuel Snadi
                                
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-right  border-2 border-slate-100 whitespace-nowrap"
                                >
                                    20/10/2021
                                </td>
                                <td
                                class="px-6 py-4 text-sm font-medium text-right  border-2 border-slate-100 whitespace-nowrap"

                                >
                                    test
                                </td>
                                <td
                                class="px-6 py-4 text-sm font-medium text-right  border-2 border-slate-100 whitespace-nowrap"

                                >
                                    test
                                </td>

                            </tr>
                            <tr  class="hover:bg-slate-200">
                                <td class="py-3 pl-2 w-8 border-2 border-slate-100 ">
                                    <div class="flex items-center  h-5">
                                        <input
                                           
                                            type="checkbox"
                                            class="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                        />
                                        <label for="checkbox" class="sr-only" @click="Clicked.value = !Clicked.value" >
                                            Checkbox
                                        </label>
                                    </div>
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium border-2 border-slate-100 text-gray-800 whitespace-nowrap"
                                >
                                    1
                                </td>
                                <td
                                    class="px-6 py-4 text-sm text-gray-800 border-2 border-slate-100 whitespace-nowrap"
                                >
                                    Jone Doe
                                </td>
                                <td
                                    class="px-6 py-4 text-sm text-gray-800 border-2 border-slate-100 whitespace-nowrap"
                                >
                                    jonne62@gmail.com
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium border-2 border-slate-100 text-right whitespace-nowrap"
                                >
                                    <a
                                        class="text-green-500 hover:text-green-700"
                                        href="#"
                                    >
                                        Edit
                                    </a>
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium border-2 border-slate-100 text-right whitespace-nowrap"
                                >
                                    <a
                                        class="text-red-500 hover:text-red-700"
                                        href="#"
                                    >
                                        Delete
                                    </a>
                                </td>
                                <td
                                class="px-6 py-4 text-sm font-medium border-2 border-slate-100 text-right whitespace-nowrap">
                                    test
                                </td>
                                <td
                                class="px-6 py-4 text-sm font-medium border-2 border-slate-100 text-right whitespace-nowrap">

                                    test
                                </td>
                            </tr>
                        </tbody>
                    </table>
              
    </div>
    </div>
  </div>
</template>

<script>
import { useRouter} from "vue-router"
import Cherchebar from "../screen/ChercheBar.vue"
import { ref } from 'vue';

const router=useRouter()

const components = {
Cherchebar
};
export default {
name: 'Accueil',
components,
setup (){
    const Clicked = ref(false);
    console.log('==>',Clicked.value)
    return {Clicked}

}

};
 </script>