<template>

</template>
<script>
 import axios from "axios"
export default {
    name: 'VerificationList' ,
    data() {
        return {
        Lists : [] ,
        }
    },
    mounted () {
        axios.get("/api/dossiers/compare/?dossier_id=1").then(res=>{
             this.List = res.data
             console.log(Lists)
        })
    },
   methods() {
   
  

   }
}
</script>