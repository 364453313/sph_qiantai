<template>
  <div>
    <!-- 使用三级联动全局组件,已经注册为全局组件,不需要引入 -->
<!--     <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Brand /> -->

    <button @click="add">点我加1</button>
    <span>仓库的数据{{count}}</span>
    <button>点我减1</button>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

import {mapState} from 'vuex'
export default {
    name:'Home',
    components:{
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed:{
        ...mapState(['count'])
    },
    methods: {
        //派发action
        add(){
            this.$store.dispatch("add")
        }
    },
}
</script>

<style>

</style>