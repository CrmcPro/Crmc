<template>
  <section v-if="reOpen_Mode_UploadFils">
    <Spinner/>
  </section>
   <!-- <div v-if="reOpen_Mode_UploadFils">
   </div> -->
   <section v-if="!reOpen_Mode_UploadFils">

     <div class="text-l flex flex-col " >               
               <h1 class="font-bold pt-24 text-black" >{{title}}</h1>
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
           <div v-else class="py-2">GLisser & Déposer votre fichier.</div>
           <div class="flex flex-row justify-around ">
 
             <div class="text-white text-sm p-2  bg-[#1873a8] rounded text-center ">
               Sélectionnner un fichier</div>
           <div v-if="files.length"> <a href=""></a>
             <button
               type="submit"
               @click.prevent.stop="sendFile(files)"
               title="Send file"
             >
             <AnimatedBtn/>
             </button>
           </div>
         </div>
           </div>
           
         
           <div class="py-5 text-center" v-if="Spin">
             <ProgressBar :progress="progress" :statusText="statusText"/>
           </div>
         </label>
            
         <div class="preview-container mt-4" v-if="files.length">
         <div v-for="file in files" :key="file.name" class="preview-card">
           <div>
             <p class=" border-b-2 border-black ml-32">
               {{ file.name }}
             </p>        
           </div>
           <div    v-if="!progressOn">
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
   </section>

    </template>
  <script>
  
  
  import axios from 'axios';
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import ProgressBar from "./ProgressBar.vue"
  import AnimatedBtn from './AnimatedBtn.vue';
  import Swal from 'sweetalert2'
  import Spinner from './Spinner.vue'
  import store from "../store"
  export default {
  
    components: {
      AnimatedBtn ,
      ProgressBar , 
      Spinner
  
    },
  
  data() {
        return {
          reOpen_Mode_UploadFils: false , 
          statusText:'' , 
          progress : 0 , 
          Spin :false,        //responsible for the progress view 
          isDragging: false,
          files: [],
        };
  },
  
  props : ['id_props_pochette' ,'id_props_dossier',"title" ],  
 
  
 watch(){

 },
  computed : {
    ...mapGetters(["pochette_name"]),
          
  
            },
  methods: {
    ...mapActions(['getdocument' , 'SETIdPochette','getPochetteData','testProgress']),
  
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
  
  
        async sendFile() {
        this.Spin=true;
        let bodyformData = new FormData();
        bodyformData.append('pochette_id',this.id_props_pochette)
        bodyformData.append('dossier_id',this.id_props_dossier)
        bodyformData.append('file',this.files[0])
       const response= await axios.post("/api/dossiers/document/",bodyformData)
        if (response)
        {
  
          this.Spin=false;
           this.getdocument({
           pochette_id : this.id_props_pochette,
           dossier_id : this.id_props_dossier,
          })
            this.$emit('onReloadEnd')
          }
       }
      },
      async  mounted() {
      
    const res = await this.testProgress({
        pochette_id : this.id_props_pochette ,
        dossier_id : this.id_props_dossier,
      })
console.log('resDrop',res )
    if( res.dossier_id === this.id_props_dossier && res.pochette_id === this.id_props_pochette && res.pct !==100){
      this.Spin=true;
      this.progress = res.pct 
      console.log('progres', this.progress , "yes you condition work fine ")
     }
    this.onChange()
    var pusher = new Pusher('c03731b582014f75770a', {
      cluster: 'eu',
      encrypted: true
    });
    let channelName =  `CEE-project`
    var channel = await pusher.subscribe(channelName);
   
    channel.bind('cee_project',async (data) => {
      let maxProgress = await data.message.progress;
        this.progress =  data.message.progress    
        setInterval(() => {
          if(this.progress<= maxProgress){
          this.progress +=.1    
          }
  
        }, 10);
        
      this.statusText = data.message.message;
      console.log(maxProgress)
       
     if(this.progress===100){
      this.getdocument({
          pochette_id : this.id_props_pochette,
          dossier_id : this.id_props_dossier,
         })
         this.$emit('onReloadEnd')
         console.log( this.$emit('onReloadEnd'))
        }
    })

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
      background-color: #1873a8;
      color: white;
  }
  .btn2{
      border-radius: 4%;
      height: 2.4rem;
      width: 8rem;
      padding-top: 2%;
      margin-top: 1rem;
      margin-left: 20%;
      background-color: #1873a8;
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