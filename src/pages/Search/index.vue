<template>
    <div>
        <h1>搜索区域</h1>
        <h2>query参数{{$route.query.k}}-----{{k}}</h2>
        <h2>params参数{{$route.params.keyword}}-----{{keyword}}</h2>
    </div>
</template>

<script>
export default {
    name: "Home",
    props:['keyword','k']
};
</script>

<style>
</style>