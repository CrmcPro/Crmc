<template >
  <div class="bg-slate-200  h-screen py-96 justify-center items-center flex">
      <section class="w-3/6  ">
        <div class="text-gray-800 bg-white shadow-xl rounded-2xl text-center py-4  ">
          <spam class="text-black text-sm shadow-black font-bold float-right mr-12" >3/3</spam>

          <h1 class="text-blue-300 text-4xl shadow-black pt-10 font-bold	 ">
            CRM<spam class="text-blue-500 text-4xl font-bold	">C</spam>
          </h1>
          <div class="pt-4 text-lg font-medium"><h2>Veuillez vous inscrire pour continuer</h2></div>
          <div class="pt-10">
            <div class="">
             
             
             
              <form>

             
                <section class="justify-center">

                        <div class="mb-6">
                                <input
                                type="email"
                                class="bg-slate-100 form-control mx-2 w-4/5  px-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                                id="email"
                                placeholder="Email"
                                v-model="form.email"
                                required
                                />
                                </div>


                                <div class="mb-6">
                                <input
                                    type="text"
                                    class="bg-slate-100 form-control mx-2 w-4/5  px-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                                    id="company_department"
                                    placeholder="Adresse"
                                    v-model="form.company_department"
                                    required
                                />
                                </div>

                                    <div class="mb-6">
                                    <input
                                        type="number"
                                        class="bg-slate-100   form-control mx-2 w-4/5  px-4 py-4 text-base font-normal text-gray-700  bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                                        id="zip_code"
                                        placeholder="Code postal"
                                        v-model="form.zip_code"
                                        required
                                    />
                                    </div>

                    </section> 
            
                <div class="pb-3 pt-8">
                  <button
                    type="submit"
                    class=" w-4/5 py-4 bg-[#13698f] text-white rounded"
                    @click="Submit"
                  >
                    Valider
                  </button>
                  </div>

                  <span class="pr-96 mr-48 cursor-pointer text-sm " 
                   @click="Signup2">
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

  <script setup>
  import { useRouter} from "vue-router"
  import { ref } from "vue"
  import axios from "axios"
import store from "../../store"
  
  const router=useRouter()
  const Login=()=>{
      router.push("/")
   }
   const Signup2=()=>{
      router.push("/Signup2")
   }


    let company_name = localStorage.getItem('company_name')
    let company_email = localStorage.getItem('company_email')
    let siren_number = localStorage.getItem('siren_number')
    let company_street = localStorage.getItem('company_street')
    let last_name = localStorage.getItem('last_name')
    let first_name = localStorage.getItem('first_name')
    let password = localStorage.getItem('password')
   


  const form = ref({email: "",
                    company_department:"",
                    zip_code:"",
                    company_name: company_name,
                    company_email: company_email,
                    siren_number: parseInt(siren_number),
                    company_street: company_street,
                    last_name: last_name,
                    first_name: first_name,
                    password: password
                  })

  const Submit = (e) =>{
    let data=(form.value)
    e.preventDefault();
      axios.post("/companies/registration/",data).then(res=>{    
            console.log("resultat",res)
          
      })
  
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