
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
    <div class="flex items-center text-center justify-between p-3">
      <h1 class="font-bold p-6">Liste des dossiers</h1>
      <button class="bg-cyan-700 w-70 h-9 p-5  text-white rounded-lg flex items-center justify-between" >
    <img src="../assets/add.svg" class="bg-white w-5 h-5 rounded-3xl m-3">
           Ajouter un dossier</button>
    </div>
  <div class="bg-white  rounded-xl">

    <div class="flex flex-col  p-3  shadow-2xl ">
        <div class="overflow-x-auto rounded">
                <form >   
    <label  class="mb-1 text-sm font-medium sr-only dark:text-gray-300">Search</label>
    <div class="relative">
        <div class="flex absolute  inset-y-0 left-0 items-center pl-3 pointer-events-none ">
            <svg aria-hidden="true" class="w-5 h-5   text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search"  class="block p-2 pl-10 w-full text-sm text-gray-90 bg-slate-100 rounded" placeholder="Search ..." >
        <button type="submit" class=" absolute right-2.5 bottom-2.5   font-medium rounded text-sm px-4 "><img src="../assets/60954.png" class="w-5 h-5 text-gray-400" alt=""/></button>
    </div>
    </form>
     
                </div>
            </div>

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
<script >

</script>