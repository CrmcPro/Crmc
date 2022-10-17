
<template>
  <div class="bg-slate-100 h-screen min-w-max">
    <div class="flex items-center text-center justify-between p-3">
      <h1 class="font-bold p-6">Liste des dossiers</h1>
      <button class="bg-cyan-700 w-70 h-9 p-5  text-white rounded-lg flex items-center justify-between" >
    <img src="../assets/add.svg" class="bg-white w-5 h-5 rounded-3xl m-3">
           Ajouter un dossier</button>
    </div>
  <div class="bg-white  rounded-xl">
                            <!-- ChercheBar -->
                     <Cherchebar/>
                        <!-- Tableau de suive -->
                <div class="overflow-hidden border-2  border-inherit rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-cyan-700">
                            <tr  class="">
                                <th scope="col" class="py-3 pl-4">
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-left text-[#ffffff] uppercase"
                                >
                                    ID dossier
                                   
                                </th>
                              <th
                                    scope="col"
                                    class=" flex px-6 py-3 text-xs font-bold text-left text-[#ffffff] uppercase"
                                >
                                    Nom Dossier
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-4 h4 flex" stroke="#ffffff" >
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                                  </svg>
 
                                </th>
                           
                                
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-left text-[#ffffff] uppercase"
                                >
                                    Client
                                   
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-right text-[#ffffff] uppercase"
                                >
                                    User
                                   
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-right text-[#ffffff] uppercase"
                                >
                                    Date
                                   
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-right text-[#ffffff] uppercase"
                                >
                                    Statut
                                   
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-right text-[#ffffff] uppercase"
                                >
                                    Description
                                   

                                </th>
                            </tr>
                        </thead>
                        <tbody class=" divide-black text-center">
                            <tr>
                                <td class="py-3 pl-4">
                                    <div class="flex items-center h-5">
                                        <input
                                            type="checkbox"
                                            class="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                        />
                                        <label for="checkbox" class="sr-only">
                                            Checkbox
                                        </label>
                                    </div>
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                                >
                                    #MN0129
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                                >
                                    SW Consulting
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                                >
                                    Robert DM
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                                >
                                  
                                        Samuel Snadi
                                
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    20/10/2021
                                </td>
                            </tr>
                            <tr>
                                <td class="py-3 pl-4">
                                    <div class="flex items-center h-5">
                                        <input
                                            type="checkbox"
                                            class="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                        />
                                        <label for="checkbox" class="sr-only">
                                            Checkbox
                                        </label>
                                    </div>
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                                >
                                    1
                                </td>
                                <td
                                    class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                                >
                                    Jone Doe
                                </td>
                                <td
                                    class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                                >
                                    jonne62@gmail.com
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <a
                                        class="text-green-500 hover:text-green-700"
                                        href="#"
                                    >
                                        Edit
                                    </a>
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"
                                >
                                    <a
                                        class="text-red-500 hover:text-red-700"
                                        href="#"
                                    >
                                        Delete
                                    </a>
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
const router=useRouter()

const components = {
Cherchebar
};
export default {
name: 'Accueil',
components,

};
 </script>