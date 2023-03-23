<template>
    <div class="pagination">
        <button>上一页</button>
        <button v-if="startNumAndEndNum.start > 1">1</button>

        <button v-if="startNumAndEndNum.start > 2">···</button>

        <!-- 中间部分 -->
        <button
            v-for="(page, index) in startNumAndEndNum.end"
            v-if="page >= startNumAndEndNum.start"
            :key="index"
        >
            {{ page }}
        </button>

        <button v-if="startNumAndEndNum.end < totalPage - 1">···</button>
        <button v-if="startNumAndEndNum.end < totalPage">
            {{ totalPage }}
        </button>
        <button>下一页</button>

        <button style="margin-left: 30px">共 {{ total }} 条</button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ["pageNo", "pageSize", "total", "continues"],
    computed: {
        //计算总共页数
        totalPage() {
            //向上取整
            return Math.ceil(this.total / this.pageSize);
        },
        //计算出连续页面的起始和结束
        startNumAndEndNum() {
            const { pageNo, continues, totalPage } = this;
            //初始化起始和结束数字
            let start = 0,
                end = 0;
            //如果实际连续页码数少于 continues
            if (continues > totalPage) {
                start = 1;
                end = totalPage;
            } else {
                //正常现象
                if (pageNo <= parseInt(continues / 2)) {
                }
                start = pageNo - parseInt(continues / 2);
                end = pageNo + parseInt(continues / 2);
                //当前页为1或2的情况
                if (start < 1) {
                    start = 1;
                    end = continues;
                }

                if (end > totalPage) {
                    start = totalPage - continues + 1;
                    end = totalPage;
                }
            }
            return { start, end };
        },
    },
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
</style>