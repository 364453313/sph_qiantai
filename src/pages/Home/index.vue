<template>
    <div>
        <!-- 使用三级联动全局组件,已经注册为全局组件,不需要引入 -->
        <TypeNav />
        <ListContainer />
        <TodayRecommend />
        <Rank />
        <Like />
        <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor" />
        <Brand />
    </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";

export default {
    name: "Home",
    mounted() {
        this.$store.dispatch("getFloorList");
    },
    computed: {
        ...mapState({
            floorList: (state) => state.home.floorList,
        })
    },
    components: {
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand,
    },
};
</script>

<style>
</style>