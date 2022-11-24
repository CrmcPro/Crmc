<template >
  <teleport to="body" >
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        ref="modal-backdrop"
        class=" absolute -inset-0 h-max flex-auto bg-black bg-opacity-50"
        v-show="showModal"
      >

        <div
          class=" flex justify-center items-center  py-24"
        >
          <transition
            enter-active-class="transition ease-out duration-300 transform "
            enter-from-class="opacity-0 translate-y-10 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
          >
            <div
              class="relative bg-white px-5 rounded-lg text-left overflow-hidden shadow-xl  w-2/5"
              role="dialog"
              ref="modal"
              aria-modal="true"
              v-show="showModal"
              aria-labelledby="modal-headline"
            >
          
            <img src="../assets/close.png" @click="closeModal()" class="absolute   right-4 top-2 ">              

              <slot>I'm empty inside</slot>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { ref, watch } from 'vue';
import useClickOutside from '../composables/useClickOutside';
const components = {
  
};
export default {
  name: 'ProfilModel',
  props:{
    show: {
    type: Boolean,
    default: false,
  },
  },
  components,
  setup(props, context) {
    const showModal = ref(false);
    const modal = ref(null);
    const { onClickOutside } = useClickOutside();
    function closeModal() {
      context.emit('close');
    }
    onClickOutside(modal, () => {
      if (showModal.value === true) {
        closeModal();
      }
    });
    watch(
      () => props.show,
      show => {
        showModal.value = show;
      },
    );
    return {
      closeModal,
      showModal,
      modal,
    };
  },
};
</script>

<style></style>