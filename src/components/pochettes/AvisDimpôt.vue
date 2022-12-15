<template>
  <section v-if="looding">
                  <Spinner/>
                </section>
    <div  v-if="(!looding && view)" class="bg-slate-100 ">   
        <section>
                <DescriptionDevis :id_props_pochette="id_pochette" :id_props_dossier="parseInt(this.$route.query.id_dossier)"  :title="currentTitle" @onReloadEnd="reloadData"/>              
          </section>
     </div>
          <section v-if="(!looding && !view)" >
            <div class="bg-slate-100  ">
             <div  class="bg-white flex flex-col  items-center rounded-3xl">
              <DropFile :id_props_pochette="id_pochette" :title="currentTitle" :id_props_dossier="parseInt(this.$route.query.id_dossier)" @onReloadEnd="reloadData" />
                </div>
              </div>
     </section>
     </template>
  
  
  <script>
  import Swal from 'sweetalert2'
  import { mapActions , mapGetters} from "vuex"
  import DropFile from "../DropFile.vue"
  import DescriptionDevis from "../DescriptionDevis.vue"
  import progressBar from "../ProgressBar.vue"
  import { useRouter } from 'vue-router'
  import Spinner from "../Spinner.vue"
  export default {
      name:"AvisDimpôt",
      
  
  data()
  {
      return {
       looding : true ,
        router:useRouter(),
        view : false ,
        test: false ,
        id_pochette: 12,
        currentTitle : "AvisDimpôt"
      }
  },
  
  components: {
      DropFile ,
      DescriptionDevis ,
      Spinner ,
      progressBar
    },
  computed : {
       ...mapGetters(['dossier_id']),
           },
  methods : {
      reloadData() {
       Swal.fire({
         position: 'center',
         icon: 'success',
         title: 'le document est téléchargé ',
         showConfirmButton: false,
         timer: 3000
         }).then(res=>(
           
           this.view= !this.view
         ))  
   },
      ...mapActions(['getdocument' , 'SETIdPochette','getPochetteData','testProgress']),
  },
  async mounted() {
   console.log('Audit', this.id_pochette , "route" , parseInt(this.$route.query.id_dossier) )
    const response = await   this.getdocument({
        pochette_id : this.id_pochette ,
        dossier_id : parseInt(this.$route.query.id_dossier),
      })
      console.log('response',response)
      if(response.success)
       {
      this.looding = false 
      this.view = true
      }else if(response.success === false)

      {
        this.view = false
        this.looding = false 
     }
 
   },
  }
  </script>

<style>

</style>