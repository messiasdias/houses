import './scss/main.scss'
//import  'animate.css'
import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faUser,
    faSearch,
    faLongArrowAltRight,
    faArrowRight,
    faArrowLeft,
    faBars ,
    faTimes 
  
} from '@fortawesome/free-solid-svg-icons'

//import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(
    faUser,
    faSearch,
    faLongArrowAltRight,
    faArrowRight,
    faArrowLeft,
    faBars,
    faTimes   
)

Vue.component('font-awesome-icon', FontAwesomeIcon)