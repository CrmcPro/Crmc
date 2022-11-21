<template>
  <section class="bg-white">
    <div class="" v-show="!connectivityStatus">
      <button class=""></button>
      {{connectivityText}}
    </div>
    <div class="">
      <div class="">
        <div class="">
          <div class="">
            <div>
              
    <section class="">
        <p class="text-xl text-center p-4 font-semibold ">Traitement encours ..</p>
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div id="Progressbar" class="bg-cyan-600 text-xs   text-black  text-center  
        leading-none rounded-full" :style="{'width': progress +  '%'}" >{{ Math.floor(progress) + '%'}}</div>
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
import pusher from 'pusher-js';

export default {
  data() {
    return {
      statusText: '',
      progress: 0,
      connectivityText: '',
      connectivityStatus: true,
    }
  },
  created() {
    var pusher = new Pusher('c03731b582014f75770a', {
      cluster: 'eu',
      encrypted: true
    });
    var channel = pusher.subscribe('CEE-Project');
    channel.bind('cee_project', (data) => {
      console.log('data====>',data.message.progress)
      this.statusText = data.message.message;
      this.progress = data.message.progress;    
    }); 
  },
 
  

}
</script>