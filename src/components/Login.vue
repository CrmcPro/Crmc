<script setup >
import { useRouter} from "vue-router"
import { ref } from "vue"
import axios from "axios"
import store from "../store"
 const router=useRouter()
const Singup=()=>{
    router.push("/Signup")
 }

const form = ref({username: "", password: ""})
const ErrorView = ref(false)

const submitForm = (e) =>{
 
  let data = form.value
  axios.post("accounts/login/",data).then(response=>{
  console.log("=>>>",response)
  const token = response.data.token
  store.commit('setToken',token)
  axios.defaults.headers.common['Authorization'] = 'Token '+ token
  localStorage.setItem('token',token)
 if(store.state.isAuthenticated){
  router.push("/Accueil")
 } 
}).catch(Err=>(
  console.log("cc2")
))
}


 
</script>




<template>

    <div class="bg-slate-100">
        <section class="h-screen flex center items-center justify-center">
          <div class="text-gray-800 w-2/5 h-3/5 bg-white shadow-xl rounded-2xl text-center">
            <h1 class="text-blue-300 text-4xl shadow-black pt-10 font-bold	 ">
              CRM<spam class="text-blue-500 ml-0 text-4xl font-bold	">C</spam>
            </h1>
            <div class="pt-4 text-lg font-medium"><h2>Veuillez vous connecter pour continuer</h2></div>
         
            <div class="pt-12">

              <div class="">
                <form >
                  <div class="mb-6">
                    <input
                      type="text"
                      class=" bg-slate-100  form-control w-4/5 pl-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid  rounded transition ease-in-out  focus:text-gray-700 focus:bg-slate-100 focus:border-sky-200 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="E-mail"
                      v-model="form.username"


                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="password"
                      class="bg-slate-100 form-control w-4/5 pl-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-slate-100 focus:border-sky-200 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Mot de passe"
                      v-model="form.password"
                    />
                  </div>
                 
                  <div class=" pb-3 pt-8">
                    <button
                      type="button"
                      class=" w-4/5 py-4 bg-[#13698f] text-white text-sm rounded "
                      @click="submitForm"
                    >
                      Connextion
                    </button>
                    </div>
                   
                    <div>
                    <button
                      type="button"
                      class=" w-4/5 py-4 border border-sky-600	 rounded text-sm  text-cyan-600 "
                      @click="Singup"
                    >
                      Inscription
                    </button>
                  </div>
                  <div class=" justify-between items-center mb-6 text-center pt-3">
                    <a href="#!" class=" text-sky-600 text-xs underline underline-offset-1">Mot de passe oublié ?</a>
                  </div>
                </form>
              </div>
            </div>
            <div v-if="ErrorView" class="flex flex-row  justify-center items-center gap-2" >
              <img alt="Vue logo" src="../assets/illustration.png" class="w-5 h-5">
              <h2 class="text-red-500 font-mono ">Wrong password or E-mail</h2>

              </div>
          </div>
         
        </section>
       
      </div>
    </template>
   
    <style scoped>
    
    </style>