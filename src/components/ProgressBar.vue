<template>
    <section class="">
        <p class="text-xl text-center p-4 font-semibold ">Traitement encours ..</p>
        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div id="Progressbar" class="bg-cyan-600 text-xs   text-cyan-600  text-center  leading-none rounded-full" :style="{'width': precentage + '%'}" >{{ Math.floor(precentage) + '%'}}</div>
        </div>
        <p class="text-center pt-6 pb-10">Veuillez patientez</p>
     </section>
</template>



<script>
export default {
    data :()=> {
        return { 
            precentage : 0
        }
    },

    8(){
        var intval =setInterval(()=>{
            if(this.precentage < 100)
            this.precentage += .1
            else 
            clearInterval(intval);
        },10)
    }
}

</script>