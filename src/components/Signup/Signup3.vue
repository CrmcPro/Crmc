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
                                id="Email"
                                placeholder="Email"
                                v-model="form.Email"
                                required
                                />
                                </div>


                                <div class="mb-6">
                                <input
                                    type="text"
                                    class="bg-slate-100 form-control mx-2 w-4/5  px-4 py-4 text-base font-normal text-gray-700 bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                                    id="Adresse"
                                    placeholder="Adresse"
                                    v-model="form.Adresse"
                                    required
                                />
                                </div>

                                    <div class="mb-6">
                                    <input
                                        type="text"
                                        class="bg-slate-100   form-control mx-2 w-4/5  px-4 py-4 text-base font-normal text-gray-700  bg-clip-padding border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-slate-100 focus:border-slate-100 focus:outline-none"
                                        id="CodePostal"
                                        placeholder="Code postal"
                                        v-model="form.CodePostal"
                                        required
                                    />
                                    </div>

                    </section> 
            
                <div class="pb-3 pt-8">
                  <button
                    type="button"
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


    let CompanyName1 = localStorage.getItem('CompanyName')
    let CompanyEmail = localStorage.getItem('CompanyEmail')
    let SirenNumber = localStorage.getItem('SirenNumber')
    let StreetCompany = localStorage.getItem('StreetCompany')
    let Nom = localStorage.getItem('Nom')
    let Prenom = localStorage.getItem('Prenom')
    let password = localStorage.getItem('password')
    let PasswordConfirmation = localStorage.getItem('PasswordConfirmation')

  let data2= {CompanyName1,CompanyEmail,SirenNumber,StreetCompany,Nom,Prenom,password,PasswordConfirmation}
   
   console.log("Data2",data2)
  
  const data = ref({Email: "",Adresse: "",CodePostal: "",CompanyName1,CompanyEmail,SirenNumber,StreetCompany,Nom,Prenom,password,PasswordConfirmation})
  console.log("data",data)
 
  // console.log("Data",data)

  // let data1 = form.value

  // console.log("data1",data)
  // let data={data1,data2}

  // console.log("Data",data)

  
  const Submit = () =>{
      
      axios.post("/companies/registration/",data).then(res=>{
          
            console.log("resultat",res.data)
          
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