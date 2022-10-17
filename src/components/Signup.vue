<template>
    <div class="bg-slate-100">
        <section class="h-screen flex center items-center justify-center">
          <div class="text-gray-800 w-2/5 h-3/5 bg-white rounded-2xl shadow-xl text-center">
            <h1 class="text-blue-300 text-4xl shadow-black pt-10 font-bold	 ">
              CRM<spam class="text-blue-500 text-4xl font-bold	">C</spam>
            </h1>
            <div class="pt-4 text-lg font-medium"><h2>Veuillez vous inscrire pour continuer</h2></div>
         
            <div class="pt-10">
              <div class="">
                <form>
                  <div class="mb-6">
                    <input
                      type="text"
                      class="bg-slate-100 form-control w-4/5 px-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                      id="InputEmail"
                      placeholder="E-mail"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="password"
                      class="bg-slate-100 form-control  w-4/5 px-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                      id="InputPassword"
                      placeholder="Mot de passe"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="password"
                      class="bg-slate-100   form-control w-4/5 px-4 py-4 text-base font-normal text-gray-700  bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                      id="InputPasswordConfirmation"
                      placeholder="Confirmer le mot de passe"
                    />
                  </div>
                 
                  <div class="pb-3 pt-8">
                    <button
                      type="button"
                      class=" w-4/5 py-4 bg-[#13698f] text-white text-sm rounded"
                      @click="Login"
                    >
                      Valider
                    </button>
                    </div>
                   
                   
                  <div class=" justify-between items-center mb-6 text-center pt-3">
                    <a href="#!" class=" text-sky-600 text-xs underline underline-offset-1">Vous avez un compte ?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    
    </template>
    <script setup>
    
    import { useRouter} from "vue-router"
    const router=useRouter()
    const Login=()=>{
        router.push("/")
     }
   

    </script>
    
