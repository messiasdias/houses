import Vue from 'vue'
import Vuex from 'vuex'
import data from './data.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        data: data,
        pageIndex: 1,
        menu: false,
        menuVisible: {
            display: 'none',
        },
        screen: {
            width: window.screen.width,
            heigth: window.screen.heigth,
        }
    },

    mutations:{
        pageIndexIncrement: function(state){

            if( (state.pageIndex >= 0 ) && (state.pageIndex <= (state.data.length-1) )  ){
                state.pageIndex += 1
            }else{
                state.pageIndex  = 1
            }
        },


        pageIndexDecrement: function(state){

            if( (state.pageIndex > 1 ) && (state.pageIndex <= state.data.length )  ){
                state.pageIndex -= 1
            }else{
                state.pageIndex = state.data.length
            }
        },



        menu: function(state, menu=false){
            if(menu){
                state.menuVisible.display = 'flex'
            }else{
                state.menuVisible.display = 'none !important'
            }
            state.menu = menu
        }
    },

    actions:{

    }
})