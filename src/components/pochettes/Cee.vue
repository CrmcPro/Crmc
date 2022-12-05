<template>
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

    name:"Cee",

data()
{
    return {
        looding : false ,
      router:useRouter(),
      view : false ,
      test: false ,
      id_pochette: 3,
      currentTitle : "CEE"
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
async mounted() {
   
   const response = await this.getdocument({
     pochette_id : 1 ,
     dossier_id : parseInt(this.$route.query.id_dossier)
 
    })
    console.log('response.success',response)
 
    if(response.success){
 
     this.view = true
     this.looding = false
    }else if(response.success==false){
     this.looding = false
    }
    else
    this.looding = false
   
 
   },

}
</script>

<style>

</style>