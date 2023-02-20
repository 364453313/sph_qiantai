<template>
    <div class="type-nav">
        <div class="container">
            <!-- 事件的委派 -->
            <div @mouseleave="leaveIndex">
                <h2 class="all">全部商品分类</h2>
                <div class="sort">
                    <div class="all-sort-list2" @click="goSearch">
                        <div
                            class="item"
                            v-for="(c1, index) in categoryList"
                            :key="c1.categoryId"
                            :class="{ cur: currentIndex == index }"
                        >
                            <h3 @mouseenter="changeIndex(index)">
                                <a
                                    :data-categoryName="c1.categoryName"
                                    :data-category1Id="c1.categoryId"
                                    href="javascript:;"
                                    >{{ c1.categoryName }}</a
                                >
                                <!-- router-link声明式导航，可是一个组件，当服务器的数据返回之后，循环出很多的router-link组件【创建组件实例】 一瞬间创建1000+很耗内存，因此出现卡顿-->
                                <!-- <router-link to="/search">{{
                                    c1.categoryName
                                }}</router-link> -->
                            </h3>
                            <div
                                class="item-list clearfix"
                                :style="{
                                    display:
                                        currentIndex == index
                                            ? 'block'
                                            : 'none',
                                }"
                            >
                                <div
                                    class="subitem"
                                    v-for="(c2, index) in c1.categoryChild"
                                    :key="c2.categoryId"
                                >
                                    <dl class="fore">
                                        <dt>
                                            <a
                                                :data-categoryName="
                                                    c2.categoryName
                                                "
                                                :data-category2Id="
                                                    c2.categoryId
                                                "
                                                href="javascript:;"
                                                >{{ c2.categoryName }}</a
                                            >
                                        </dt>
                                        <dd>
                                            <em
                                                v-for="(
                                                    c3, index
                                                ) in c2.categoryChild"
                                                :key="c3.categoryId"
                                            >
                                                <a
                                                    :data-categoryName="
                                                        c3.categoryName
                                                    "
                                                    :data-category3Id="
                                                        c3.categoryId
                                                    "
                                                    href="javascript:;"
                                                    >{{ c3.categoryName }}</a
                                                >
                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">尚品汇超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
//按需引入节流函数
import throttle from "lodash/throttle";
export default {
    name: "TypeNav",
    data() {
        return {
            //存储用户鼠标移上哪一个一级分类
            currentIndex: -1,
        };
    },
    //组件挂载完毕向服务器发送请求
    mounted() {
        this.$store.dispatch("categoryList");
    },
    computed: {
        ...mapState({
            categoryList: (state) => state.home.categoryList,
        }),
    },
    methods: {
        //鼠标进入修改响应式数据currentIndex属性
        changeIndex: throttle(function (index) {
            //index：鼠标移上某个一级分类的元素的索引值
            this.currentIndex = index;
        }, 50),
        //一级分类移除的事件回调
        leaveIndex() {
            this.currentIndex = -1;
        },
        //进行路由跳转的方法
        goSearch(event) {
            //最好的解决方案：编程式导航 + 事件委派
            let element = event.target;
            // console.log(element)
            //节点有一个属性dataset属性，可以获取节点的自定义属性和属性值
            let { categoryname, category1id, category2id, category3id } =
                element.dataset;
            if (categoryname) {
                let location = { name: "search" };
                let query = { categoryName: categoryname };
                if (category1id) {
                    query.category1Id = category1id;
                } else if (category2id) {
                    query.category2Id = category2id;
                } else {
                    query.category3Id = category3id;
                }
                //整理完整参数
                location.query = query;
                //路由跳转
                this.$router.push(location);
            }
        },
    },
};
</script>

<style scoped lang="less">
.type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }

        .sort {
            position: absolute;
            left: 0;
            top: 45px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;

            .all-sort-list2 {
                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }
                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 210px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;

                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    /* &:hover {
                        .item-list {
                            display: block;
                        }
                    } */
                }
                .cur {
                    background-color: skyblue;
                }
            }
        }
    }
}
</style>