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
          class=" fixed -inset-0 bg-black bg-opacity-50"
          v-show="showModal"
        >
          <div
            class="flex items-start justify-center  p-80 text-center"
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
                class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl pr-5 pl-5 pt-8 pb-8 w-4/5"
                role="dialog"
                ref="modal"
                aria-modal="true"
                v-show="showModal"
                aria-labelledby="modal-headline"
              >
                <button type="button" class="absolute top-4 right-6" >                           
                      <span @click="closeModal">x</span>      
                </button>

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
  const props = {
    show: {
      type: Boolean,
      default: false,
    },
  };
  const components = {
    
  };
  export default {
    name: 'ProgressbarModel',
    props,
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