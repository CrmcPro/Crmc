<template>
<div class="flex justify-center items-center">
    <h1 class="absolute font-bold text-[#FF1D00] font-mono">{{Math.floor(percent)}}%</h1>
    <CircleProgress
      :percent="percent"
      :viewport="true"
      :show-percent="false"
      :is-gradient="true"
    />
</div>
  
  

  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import CircleProgress from "vue3-circle-progress";
  import "vue3-circle-progress/dist/circle-progress.css";
  export default {
    name: "circleProgressBar",
    data() {
    return {
      percent: 0,
    }
  },
    components: {
      CircleProgress: CircleProgress,
    },
    created() {

      
        setInterval(() => {
          if(this.percent<= 100){
          this.percent +=.1    
          }
  
        }, 10);
        
        
    
  },
  };
  </script>
  



