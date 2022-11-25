<template>
  <div >
    <div  v-if="this.$store.state.isAuthenticated">
      <Navbar/>
    </div>
    <RouterView/>
  </div>
</template>
<script >
import Navbar from "./components/NavBar.vue"
import axios from 'axios'
import router from "./router"

export default {
  name: "App",
  components:{
   Navbar ,
  },
  beforeCreate(){
    this.$store.commit('initializeStore')
  const token =this.$store.state.token
  if(token){
    let test = axios.defaults.headers.common['Authorization'] = "token " + token
    console.log('==>',test)

  }else {
    axios.defaults.headers.common['Authorization'] = ''
  }
  
  }
}
const components = {
  Navbar ,
}
</script>

<style scoped></style>
