<template>
    <div>
        <Header />
        <!-- 路由组件出口的地方 -->
        <router-view></router-view>
        <!-- Home/Search显示，Login/Register不显示 -->
        <Footer v-show="$route.meta.show" />
    </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
    name: "App",
    components: {
        Header,
        Footer
    },
    mounted() {
        //派发一个action 获取商品分类三级列表的数据
        //app只挂载一次，获取数据放在这里可以不用每次都发送请求，优化代码
        this.$store.dispatch("categoryList");
    },
};
</script>

<style>
</style>