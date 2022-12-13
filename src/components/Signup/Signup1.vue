

<template >
  <div class="bg-slate-200  h-screen py-96 justify-center items-center flex">
      <section class="w-3/6 ">
        
        <div class="text-gray-800 bg-white shadow-xl rounded-2xl text-center py-6  "> 
          <spam class="text-black text-sm shadow-black font-bold float-right mr-12" >1/3</spam>
          <h1 class="text-blue-300 text-4xl shadow-black pt-10 font-bold	 ">
            CRM<spam class="text-blue-500 text-4xl font-bold	">C</spam>
          </h1>
          <div class="pt-4 text-lg font-medium"><h2>Veuillez vous inscrire pour continuer</h2></div>
          <div class="pt-10">
            <div class="">
              <form>

               <section class="flex flex-wrap justify-center ">

                <div  class="mb-6 ">
                  
                  <input
                    type="text"
                    class="bg-slate-100 form-control w-80 mx-2 px-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                    id="CompanyName"
                    placeholder="Nom Compagnie"
                    
                    required
                    v-model="form.company_name"
                    
                  />
                </div>

                <div  class="mb-6">
                  <input
                    type="text"
                    class="bg-slate-100 form-control mx-2 w-80 px-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                    id="CompanyEmail"
                    placeholder="Email Compagnie"
                    required
                    v-model="form.company_email"
                  />
                </div>

               
              </section> 
              <section class="flex flex-wrap justify-center">
                <div  class="mb-6">
                  <input
                    type="text"
                    class="bg-slate-100   form-control mx-2 w-80 px-4 py-4 text-base font-normal text-gray-700  bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                    id="SirenNumber"
                    placeholder="Numero Siren"
                    required
                    v-model="form.siren_number"
                  />
                </div>

                <div  class="mb-6">
                  <input
                    type="text"
                    class="bg-slate-100 form-control mx-2 w-80  px-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                    id="StreetCompany"
                    placeholder="Rue du Compagnie"
                    required
                    v-model="form.company_street"
                  />
                </div>

    
                </section> 
 
                <div class="pb-3 pt-8">
                  <button
                    type="button"
                    class=" w-4/5 py-4 bg-[#13698f] text-white  rounded"
                    @click="() => ToSignup2(form)" >  
                  
                    Suivant 
                    <font-awesome-icon icon="fa-solid fa-chevron-right"  class="float-right pr-3"/>
                 

                  </button>
                  </div>
                  <span class="pr-96 mr-48 cursor-pointer text-sm " 
                   @click="Login">
                    <font-awesome-icon icon="fa-solid fa-arrow-left" /> 
                    Précédent 
                  </span>
                 
                <div class=" justify-between items-center mb-6 text-center pt-3">
                  <button 
                   class=" text-sky-600 text-xs underline underline-offset-1"
                   @click="Login"
                   
                   >         
                   Vous avez un compte ?
                  </button>
                </div>  
              </form>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>

<script setup >
import { useRouter} from "vue-router"
import { ref } from "vue"
import axios from "axios"
  

  
  
  const router=useRouter()
  const Login=()=>{
      router.push("/")
   }
  
   
  const form = ref({company_name: "", company_email: "",siren_number: "", company_street: ""})
  const ErrorView = ref(false)

  
  const ToSignup2 =(form )=> {
          
          router.push({
            path : '/Signup2',  
          })
          
          localStorage.setItem('company_name',form.company_name)
          localStorage.setItem('company_email',form.company_email)
          localStorage.setItem('siren_number',form.siren_number)
          localStorage.setItem('company_street',form.company_street)     
      
     
  }  
    
  
  
  
  </script>
  
  <style>
  .file {
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
  text-align: center;

}
.file-input label {
  display: block;
  position: relative;
  width: 150px;
  height: 40px;
  border-radius: 25px;
  background: linear-gradient(20deg, #13698f, #b9bffa);
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: transform .2s ease-out;
  margin-left: 40%;
}
  
  </style>