<template>
    <div class="footer_container">
        <div class="footer_content">
            <p>
                <!-- <span>中央网络安全和信息化委员会办公室</span> -->
                <span>国家互联网应急中心 © 版权所有</span>
                <a href="">联系我们</a>
            </p>
            <p>
                <span>技术支持：长安通信科技有限责任公司　</span>
                <a href="">京ICP备14042428号</a>
                <a href=""><i class="gwa"></i>京公网安备11040102700108号</a>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'corporatePortrait',
    data() {
        return {
            currentPage: 1,
            pageSize: 10,
            tabeltotal: 100,

            jine: 33333,
            fullContent: '',
            contenttitle: '',
            dialogVisible: false,
            detailshow: false,
            detaileInfo: {},
            tableData: [
                {
                    decisionDate: '1',
                    punishNumber: '1',
                    type: '1',
                    content: '1',
                    departmentName: '1',
                }
            ],
        };
    },
    mounted() {
    },

    methods: {

    }
}


</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}

h2 {
    font-size: 100%;
    font-weight: 400;
    font-variant: normal;
}

.footer_container {
    width: 100%;
    height: 150px;
    text-align: center;
}

.footer_content {
    position: relative;
    width: 1000px;
    margin: 0 auto;
    padding-top: 40px;


    p {
        font-size: 16px;
        line-height: 36px;
        color: #666666;

        span {
            margin: 5px;
        }

        a:link,
        a:visited,
        a:hover,
        a:active {
            color: #666666;
        }

        a:hover {
            text-decoration: underline;
            /* 鼠标悬停时显示下划线 */
        }


        .gwa {
            padding: 5px 10px;
            margin-right: 5px;
            background: url(../../../assets/font/beian.png) -235px -295px no-repeat;
            text-indent: -999em;
        }

    }
}
</style>