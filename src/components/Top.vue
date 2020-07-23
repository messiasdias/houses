<template>
    <div class="top" >
     
            <h1 class="brand" > <a href="/">Houses</a></h1>
          
     
            <ul class="menu"  :style="menuVisible"   >
                <font-awesome-icon class="menu-close"  @click="$store.commit('menu', false)" icon="times" /> 
                
                <li class="item" >About us</li>
                <li class="item active" >Projects</li>
                <li class="item" >News</li>
                <li class="item" >Contact us</li>
                <li class="icons" > 
                   <font-awesome-icon icon="user" /> 
                   <font-awesome-icon icon="search" />
                 </li>

            </ul>

    

             <font-awesome-icon class="menu-open" icon="bars" @click.prevent="$store.commit('menu', true)" /> 

            

    </div>
</template>

<script>
import {mapState} from 'vuex'

export default{
    name: 'Top',
    computed: {
        ...mapState({
            menuVisible: 'menuVisible',
            screen:'screen'
        })
    },
    mouted:function(){

    },
    methods:{


    }
    
}

</script>

