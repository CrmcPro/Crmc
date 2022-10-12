<!-- <template>
  <div>
    <h1 class="font-extrabold">Home</h1>
    <p>Name in Store  {{name}}</p>
  </div>
</template>

<script setup>
import {computed} from "vue"
import {useStore} from "vuex"
import { useRouter} from "vue-router"
const router = useRouter ()
const store = useStore()
const name = computed(()=>{
  return store.state.user.name
})
</script> -->
<template>
  <div class="bg-slate-100 h-screen min-w-max">
    <div class="bg-white border">
      <nav
        class="
          container
          px-6
          py-3
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
            ><h1 class="text-blue-300 text-4xl shadow-black pt-0 font-bold	 ">
              CRM<spam class="text-blue-500 ml-0 text-4xl font-bold	">C</spam>
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
            md:mt-0
          "
        >
         
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Acceuil
          </li>
          <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Utilisateurs
          </li>
    
        </ul>
        <ul>
          <li>Name</li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>