<template>
<section v-if="looding">
                <Spinner/>
              </section>
  <div  v-if="(!looding && view)" class="bg-slate-100 ">   
      <section>
              <DescriptionDevis  :title="currentTitle" @onDeleteEnd="deletedata"/>              
        </section>
   </div>
        <section v-if="(!looding && !view)" >
          <div class="bg-slate-100  ">
           <div  class="bg-white flex flex-col  items-center rounded-3xl">
            <DropFile :id_props_pochette="id_pochette" :title="currentTitle" :id_props_dossier="parseInt(dossier_id)" @onReloadEnd="reloadData" />
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
    name:"Devis",
    

data()
{
    return {
     looding : true ,
      router:useRouter(),
      view : false ,
      test: false ,
      id_pochette: 1,
    }
},

components: {
    DropFile ,
    DescriptionDevis ,
    Spinner ,
    progressBar
  },
computed : {
     ...mapGetters(['dossier_id','pochette_id']),
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

    const res = await this.testProgress({
        pochette_id : this.pochette_id ,
        dossier_id : parseInt(this.dossier_id),
      })
console.log(res)



    console.log('==============>', this.pochette_id , this.dossier_id)

    const response = await   this.getdocument({
        pochette_id : this.pochette_id ,
        dossier_id : parseInt(this.dossier_id),
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