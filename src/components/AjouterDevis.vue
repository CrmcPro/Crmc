<script>
import { useRouter} from "vue-router"
import Header from "./Header.vue"
import axios from "axios";
import DragDrop from "./DragDrop.vue"

const components = {
DragDrop,
Header
};
const router=useRouter()

const NavigationToAccueil=()=>{
    router.push("/Accueil")
  }

const NavigationToUpload=()=>{
        router.push("/AjouterDevis")
    }
   


export default {
  data() {
    return {
      selectedFile: "",
    };
  },
  methods: {
    onFileChange(e) {
      const selectedFile = e.target.files[0]; // accessing file
      this.selectedFile = selectedFile;
    },
    onUploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);  // appending file

     // sending file to the backend
      axios
        .post("http://localhost:4500/upload", formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};








</script>

<template >
    <div class="bg-slate-100  min-w-max ">
     <Header/>
   
          <section class="  mt-8  flex flex-col items-center ">
                <div class=" w-11/12 " >
                  <table class="  text-white text-sm text-center w-full  h-10">
                    <div class="absolute ml-2 mt-1.5 w-1.5 h-7  rounded-3xl  bg-cyan-700"></div>
                    <thead>
                      <tr>
                        <td class=" font-medium text-solid  rounded-l  w-28 bg-white text-cyan-700 "><button>Devis</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 "><button>Document 2</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 "><button>Document 3</button></td>
                        <td class="border border-slate-300  	bg-cyan-700"><button>Document 4</button></td>
                        <td class="border border-slate-300  	bg-cyan-700"><button>Document 5</button></td>
                        <td class="border border-slate-300  	bg-cyan-700"><button>Document 6</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 "><button>Document 7</button></td>
                        <td class="border border-slate-300	bg-cyan-700 "><button>Document 8</button></td>
                        <td class="border border-slate-300 	bg-cyan-700 "><button>Document 9</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 10</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 11</button></td>
                        <td class="border border-slate-300 	bg-cyan-700"><button>Document 12</button></td>
  
                      </tr>
                    </thead>
                </table>
                </div>
              </section>  
              
           <div  class="bg-white flex flex-col  items-center rounded-3xl">
            <div class="text-xl flex flex-col mr-52 mb-3  mt-32">
              
              <h1 class="font-bold" >Devis</h1>
                   <p>Vous n'avez pas encore importer votre document ! </p>  
            </div>
              <div @drop="dragFile"  class="flex flex-col   w-3/12 h-72 align-center text-center justify-center   rounded  outline-dashed outline-gray-300">
                 
                 <div class=" flex justify-center items-center ">
                   <img src="/src/assets/upload.png" alt="image" class="w-16 h-16 flex items-center bg-none mb-8  "/>    
                  </div>            
                   <p class="text-center text-lg text-stone-600">Glisser & Déposer votre fichier</p>
                   <div class="mt-8">
                   
                     <button @click="onUploadFile" disabled="!this.selectedFile" class="bg-cyan-700  w-64 p-3 rounded  text-xl  text-white"> Sélectionner un fichier</button>  
                   </div>
                  </div> 
                  <div>
                  
                  </div>
                     


              </div>
            </div>
   </template>



<style>

</style>