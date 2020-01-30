import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        bgImage: 'house1.jpg',
    },

    mutations:{
        bgImage: function(state, image=false){
            if(image){

                switch(image){
                    case 1-4:
                        state.bgImage  = `house${image}.jpg`
                    break  
                    
                    default:
                        state.bgImage  = 'house1.jpg'
                    break
                }
               
            }   
        }
    },

    actions:{

    }
})