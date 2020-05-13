<template>
    <div class="center"  >   

            <div class="center-container" >
            
                <div class="social" >
                    <div class="item active" >Behance</div>
                    <div class="item" >Instagram</div>
                </div>
                    
                <div class="section" >
                    <small>2020</small>
                    <h1>{{data[this.pageIndex - 1].title }}</h1>  

                    <p> 
                      {{data[this.pageIndex - 1 ].text }} 
                    </p>  
                </div>

                <div class="slide-selection"  >
                       <span>{{ '01' }}  </span>
                    
                    <div class="bar"  >
                        <span class="bar-item" :class="{ active : item.id == pageIndex }"  :style="{height:`calc(100%/${data.length})` }"  v-for="(item, index ) in data" :key="index"  ></span> 
                    </div> 

                    <span>{{ '0'+data.length }} </span>     
                </div>
                
            </div>


          <div class="center-container btn-container" >  
            
            <a class="btn" >Explore 
                <font-awesome-icon icon="long-arrow-alt-right" />
            </a>

          </div>

    </div>
</template>

<script>
import {mapState} from 'vuex'

export default{
    name: 'Center',
     computed: {
        ...mapState({
            data: 'data',
            pageIndex: 'pageIndex',
        })
    }
}

</script>
