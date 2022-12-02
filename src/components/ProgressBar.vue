<template>
  <section class="bg-white">
  
    <div class="">
      <div class="">
        <div class="">
          <div class="">
            <div>
              
    <section class="">
        <p class="text-xl text-center p-4 font-semibold ">Traitement encours ..</p>
        <div class="w-full bg-gray-500 rounded-full dark:bg-gray-700">
        <div id="Progressbar" class="bg-cyan-600 text-xs h-3.5  text-white   text-center  
        leading-none rounded-full"  :style="{ 'color': 'white' ,'width': progress +  '%'}" >{{ Math.floor(progress) + '%'}}</div>
        </div>
        <p class="text-center pt-6 pb-10">Veuillez patientez</p>
     </section>
            <h1 class="title text-cyan-600">{{statusText}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
 
  },
  props : ["progress" ,"statusText"],



}
</script>