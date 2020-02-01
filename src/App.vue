<template>
    <div id="app"  >
        <div class="container" :style="{ backgroundImage:`url('assets/img/house${pageIndex}.jpg')` }" > 
            <div class="overlay" ></div>  
            <Top/>
            <Center/>
            <Bottom/>
        </div>
    </div>
</template>

<script>
import Top from './components/Top.vue'
import Center from './components/Center.vue'
import Bottom from './components/Bottom.vue'
import {mapState} from 'vuex'

export default{
    name: 'App',
    components:{
        Top,
        Center,
        Bottom
    },
    computed:{
        ...mapState({
            pageIndex: 'pageIndex',
            menuVisible: 'menuVisible',
        })
    },
    mounted: function() {
        
        //setInterval( () => {  this.$store.commit('pageIndex', 1  ) }, 10000 )

        if(screen.width > 768){
            this.$store.commit('menu', true)
        }else{
             this.$store.commit('menu', false)
        }
    },

    
}

</script>

