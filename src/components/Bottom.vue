<template>
    <div class="bottom"  >
         <div class="section" >

            <div class="item" >
                <label>Architect</label>
                <p>Alexander Kovpak</p>
            </div>

            <div class="item" >
                <label>Architect</label>
                <p>Sergey Mahhno</p>
            </div>


            <div class="item" >
                <label>Location</label>
                <p>Carpathians</p>
            </div>

        </div>

         <div class="buttons" > 
           
            <a class="btn-circle" > 
                <font-awesome-icon icon="arrow-left" @click="$store.commit('pageIndexDecrement')" />
            </a>

            <a class="btn-circle" > 
                <font-awesome-icon icon="arrow-right"  @click="$store.commit('pageIndexIncrement')" />
            </a>

         </div>   

    </div>
</template>

<script>
import {mapState} from 'vuex'

export default{
    name: 'Bottom',
    computed: {
        ...mapState({
            pageIndex: 'pageIndex',
        })
    },
    
}

</script>

