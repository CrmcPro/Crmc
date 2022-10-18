import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import store from "./store"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */

import { faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'



/* add each imported icon to the library */
library.add(faToggleOff)
library.add(faFolderOpen)
library.add(faCodeCompare)
library.add(faCircleExclamation)
library.add(faPen)




createApp(App)
.component('font-awesome-icon',FontAwesomeIcon)
.use(router)
.use(store)
.mount('#app')
