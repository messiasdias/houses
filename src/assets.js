import './scss/main.scss'
//import  'animate.css'
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faUser,
    faSearch, 
  
} from '@fortawesome/free-solid-svg-icons'

//import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(
    faUser,
    faSearch, 
)

Vue.component('font-awesome-icon', FontAwesomeIcon)