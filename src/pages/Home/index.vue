<template>
  <div>
    <!-- 使用三级联动全局组件,已经注册为全局组件,不需要引入 -->
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor />
    <Brand />
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import TodayRecommend from '@/pages/Home/TodayRecommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

export default {
    name:'Home',
    data(){
        return {
            a:2
        }
    },
    components:{
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed:{
    },
    methods: {
    },
}
</script>

<style>

</style>