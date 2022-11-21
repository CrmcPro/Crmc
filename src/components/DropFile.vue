<template>

  <div class="text-l flex flex-col py-10 ">
                
                <h1 class="font-bold " >Devis</h1>
                     <p class="px-6"> Vous n'avez pas encore importer votre document ! </p>  
              </div>
  
      <div class="main">
        <div
          class="dropzone-container"
          @dragover="dragover"
          @dragleave="dragleave"
          @drop="drop"
        >
          <input
            type="file"
            multiple
            name="file"
            id="fileInput"
            class="hidden-input"
            @change="onChange"
            ref="file"
            accept=".pdf,.jpg,.jpeg,.png"
          />
           
          <label for="fileInput" class="file-label">
            <div v-if="!Spin">
            <img src="/src/assets/upload.png" alt="image" class="w-12 h-12 flex items-center bg-none mb-8 ml-40 "/>    
            <div v-if="isDragging">Déposer ICI.</div>
            <div v-else>GLisser & Déposer votre fichier.</div>
            <div class="btn1">Sélectionnner un fichier</div>
            </div>
          
            <div class="py-10" v-if="Spin"><progressBar/></div>
          </label>
             
          <div class="preview-container mt-4" v-if="files.length">
          <div v-for="file in files" :key="file.name" class="preview-card">
            <div>
              <p class="pt-5">
                {{ file.name }}
              </p>
            </div>
            <div> <a href=""></a>
              <button
                class="ml-2"
                type="submit"
                @click.prevent.stop="sendFile(files)"
                title="Send file"
              >
                <div class="btn2">Importer</div> 
                
                
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </template>
  <script>
  
  
  import axios from 'axios';
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import progressBar from "./ProgressBar.vue"
  import Swal from 'sweetalert2'
  import store from "../store"
  export default {
  
    components: {
      
      progressBar,
      

  
    },
  
  data() {
        return {
          Spin :false,
          isDragging: false,
          files: [],
        };
  },
  props : ['pochette' , "view"],
  
  
  
  mounted () {
    this.onChange()
  },
  
  computed : {
    ...mapGetters(["dossier_id","pochette_id"]),
          
  
            },
  methods: {
  ...mapActions(["getdocument"]) ,
  
  
        onChange() {
          this.files = [...this.$refs.file.files];
  
        },
        dragover(e) {
          e.preventDefault();
          this.isDragging = true;
        
        },
        dragleave() {
          this.isDragging = false;
        },
        drop(e) {
          e.preventDefault();
          this.$refs.file.files = e.dataTransfer.files;
          this.onChange();
          this.isDragging = false;
        },
  
  
        async sendFile() {
        this.Spin=true;
        let bodyformData = new FormData();
        bodyformData.append('pochette_id',this.pochette)
        bodyformData.append('dossier_id',this.dossier_id)
        bodyformData.append('file',this.files[0])
       const response= await axios.post("/api/dossiers/document/",bodyformData)
        if (response)
        {
      
            this.Spin=false;
            this.getdocument({
          pochette_id : this.pochette,
          dossier_id : this.dossier_id,
         })
           this.$emit('onReloadEnd')
          }
       }
      },
    };
    </script>
  <style>
  .main {
      display: flex;
      flex-grow: 1;
      align-items: center;
      padding-top: 3%;
      justify-content: center;
      text-align: center;
  }
  
  .btn1{
      border-radius: 4%;
      height: 2.5rem;
      width: 14rem;
      padding-top: 1%;
      margin-top: 1rem;
      margin-left: 20%;
      background-color: rgb(24, 115, 168);
      color: white;
  }
  .btn2{
      border-radius: 4%;
      height: 2.4rem;
      width: 8rem;
      padding-top: 2%;
      margin-top: 1rem;
      margin-left: 20%;
      background-color: rgb(24, 115, 168);
      color: white;
      font-size: large;
  }
  
  .dropzone-container {
      width: 30rem;
      padding: 3rem;
      background: transparent;
      border: 3px;
      border-style: dashed;
      border-color:silver;
  }
  
  .hidden-input {
      opacity: 0;
      overflow: hidden;
      position: absolute;
      width: 1px;
      height: 1px;
     
  }
  
  .file-label {
      
      font-size: 20px;
      display: block;
      cursor: pointer;
  }
  
  .preview-container {
      display: flex;
      margin-top: 3rem;
  }
  
  .preview-card {
      display: flex;
      padding: 5px;
      margin-left: 10px;
  }
  
  .preview-img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      border: 1px solid #a2a2a2;
      background-color: #a2a2a2;
  }
  
  
  
  </style>