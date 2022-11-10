<template>

<div class="text-l flex flex-col ">
              
              <h1 class="font-bold py-2 " >Devis</h1>
                   <p class="px-6">         Vous n'avez pas encore importer votre document ! </p>  
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
          <img src="/src/assets/upload.png" alt="image" class="w-12 h-12 flex items-center bg-none mb-8 ml-40 "/>    
          <div v-if="isDragging">Déposer ICI.</div>
          <div v-else>GLisser & Déposer votre fichier.</div>
          <div class="btn1">Sélectionnner un fichier</div>
        </label>
           
        <div class="preview-container mt-4" v-if="files.length">
        <div v-for="file in files" :key="file.name" class="preview-card">
          <div>
            <p>
              {{ file.name }}
            </p>
          </div>
          <div>
            <button
              class="ml-2"
              type="button"
              @click="remove(files.indexOf(file))"
              title="Remove file"
            >
              <b>×</b>
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
import store from "../store"
export default {

data() {
      return {
        isDragging: false,
        files: [],
        pochette_id:2,
        dossier_id:4 ,
      };
},

mounted () {
   this.getdossiers()
},

computed : {
      ...mapGetters(['dossier']) ,
          },
methods: {
  ...mapActions(['getdossiers']),
    uploadFiles() {
    const files = this.files;
    const formData = new FormData();
    files.forEach((file) => {
        formData.append("selectedFiles", file);
    });
},
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
      remove(i) {
       this.files.splice(i, 1);
     },
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
    margin-top: 2rem;
}

.preview-card {
    display: flex;
    border: 1px solid #a2a2a2;
    padding: 5px;
    margin-left: 5px;
}

.preview-img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #a2a2a2;
    background-color: #a2a2a2;
}



</style>