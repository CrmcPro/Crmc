<template>
  <div >
  <Navbar/>
    <RouterView/>
  </div>
</template>
<script setup>
import Navbar from "./components/NavBar.vue"
const components = {
  Navbar ,
}
</script>

<style scoped></style>
