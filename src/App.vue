<template>
    <div id="app"  >
        <div class="container" :style="{ backgroundImage:`url('assets/img/${bgImage}')` }" > 
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
            bgImage: 'bgImage'
        })
    }
}

</script>

