<template class="bg-black h-screen w-screen">
  <section v-if="looding">
                <Spinner/>
              </section>
  <div  v-if="view &&!looding" class="bg-slate-100 ">   
      <section>
              <DescriptionDevis  :title="currentTitle" @onDeleteEnd="deletedata"/>              
        </section>
   </div>
        <section v-if="!view &&!looding" >
          <div class="bg-slate-100  ">
           <div  class="bg-white flex flex-col  items-center rounded-3xl">
          
            <DropFile :id_props_pochette="id_pochette" :title="currentTitle" :id_props_dossier="dossier_id" @onReloadEnd="reloadData" />
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
    name:"Audit",

data()
{
    return {
      looding : false ,
      router:useRouter(),
      view : false ,
      test: false ,
      id_pochette: 2,
    
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
    ...mapActions(['getdocument' , 'SETIdPochette','getPochetteData']),
},
async mounted() {
    console.log('==============>', this.id_pochette , this.dossier_id)

    const response = await   this.getdocument({
        pochette_id : this.id_pochette ,
        dossier_id : this.dossier_id,
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