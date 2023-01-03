import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import store from "./store"
import moment from 'moment'

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
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash,faFile} from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {faCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import VueAxios from 'vue-axios'


axios.defaults.baseURL="http://192.168.1.123:8000/"


/* add each imported icon to the library */
library.add(faUser)
library.add(faPlus)
library.add(faToggleOff)
library.add(faFolderOpen)
library.add(faCodeCompare)
library.add(faCircleExclamation)
library.add(faPen)
library.add(faEye)
library.add(faCheck)
library.add(faTrash)
library.add(faFile)
library.add(faCircleDown)
library.add(faChevronRight)
library.add(faArrowLeft)


createApp(App)
.component('font-awesome-icon',FontAwesomeIcon)
.use(router)
.use(store)
.use(VueAxios, axios)
.mount('#app')
