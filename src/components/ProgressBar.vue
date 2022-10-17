<template>
        <p class="text-3xl text-center p-20">Traitement encours ..</p>
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div id="Progressbar" class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" :style="{'width': precentage + '%'}" >{{ Math.floor(precentage) + '%'}}</div>
  </div>
    <p class="text-center  py-5 pb-20">Veuillez patientez</p>
</template>



<script>
export default {
    data :()=> {
        return { 
            precentage : 0
        }
    },

    created(){
        var intval =setInterval(()=>{
            if(this.precentage < 100)
            this.precentage += .1
            else 
            clearInterval(intval);
        },10)
    }
}

</script>