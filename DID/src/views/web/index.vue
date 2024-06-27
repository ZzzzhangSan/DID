<template>
  <div style="margin-bottom: 30px;">
    <div style="height: 400px;">
      <el-carousel>
        <el-carousel-item v-for="item in imageUrl" :key="item.url">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main">
      <div>
        <div class="left" v-for="(item, idx) in maincontent" :key="idx">
          <div class="news-normal-title">
            <p class="normal-title"><i>xxxxx</i> {{ item['title'] }}</p>
          </div>
          <div class="newsList">
            <ul class="news-normal">
              <li v-for="(initem, index) in item['content']" :key="index">
                <h5>
                  <!-- <el-button type="text" size="small" style="color: #3286ff; width: 40px; margin: 0px; padding: 0px"
                    @click="tonews(initem['content'])">{{ initem['content'] }}</el-button> -->
                  <a :href="initem['href']">{{ initem['content'] }}</a>
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="right">
          <div class="news-normal-title">
            <p class="normal-title">用户指南</p>
          </div>
          <div class="newsList">
            <ul class="news-normal">
              <li v-for="(item, index) in yonghuzhinan" :key="index">
                <h5> <a :href="item.href">{{ item.content }}</a> </h5>
              </li>
            </ul>
          </div>
        </div> -->
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data() {
    return {
      maincontent: {
        gongzuodongtai: {
          title: '工作动态',
          content: [{ content: '电子提单专题研讨会在京召开', href: '/#/news?content=电子提单专题研讨会在京召开' }]
        },
        yonghuzhinan: {
          title: '用户指南',
          content: [
            { content: '客户企业使用DID', href: '/#/news?content=客户企业使用DID' },
            // { content: '境内中小微企业用户使用DID', href: '/#/news?content=境内中小微企业用户使用DID' },
            // { content: '境内平台型企业使用DID', href: '/#/news?content=境内平台型企业使用DID' },
            // { content: '境外用户使用DID', href: '/#/news?content=境外用户使用DID' },
            { content: '平台企业使用DID', href: '/#/news?content=平台企业使用DID' },
          ]
        },
        yingyongchangjing: {
          title: '应用场景',
          content: [
            { content: '电子提单场景', href: '/#/news?content=电子提单场景' },
            { content: '电子放货场景', href: '/#/news?content=电子放货场景' },
            // { content: '多式联运场景', href: '/#/news?content=多式联运场景' },
            // { content: '信用证应用场景', href: '/#/news?content=信用证应用场景' },
            // { content: '航运贸易数字化案例', href: '/#/news?content=航运贸易数字化案例' },
          ]
        },
        ruanjainxiazai: {
          title: '软件下载',
          content: [
            { content: 'DID app', href: '#' },
            // { content: 'DID 浏览器插件（个人和企业用户）', href: '#' },
            { content: 'DID 操作台', href: '#' },
          ]
        },
        jishuwendang: {
          title: '技术文档',
          content: [
            { content: 'API接口文档', href: '/#/news?content=API接口文档' },
          ]
        },
        biaozhunguifan: {
          title: '标准规范',
          content: [
            { content: 'W3C DIDs v1.0 推荐标准', href: '/#/news?content=W3C DIDs v1.0 推荐标准' },
          ]
        },
      },
      imageUrl: [
        { url: "http://www.gengdan.cn/wp-content/uploads/2023/03/2023030921323441.jpg" },
        { url: "http://www.gengdan.cn/wp-content/uploads/2023/03/2023030921333114.jpg" },
        { url: "http://www.gengdan.cn/wp-content/uploads/2023/03/2023030921323441.jpg" },
        { url: "http://www.gengdan.cn/wp-content/uploads/2023/03/2023030921325368.jpg" },
      ],
    }
  },
  // mounted() {
  // },

  methods: {
    tonews() {
      this.$router.push({
        path: "/news",
        query: {
          cid: this.$route.query.cid,
          searchcontent: this.$route.query.searchcontent,
          companyName: this.$route.query.companyName,
        }
      })
    },
  }
}


</script>

<style lang="less" scoped>
@hover_color: #3370ff;

* {
  margin: 0;
  padding: 0;
}

.main {
  width: 1400px;
  margin: 0 auto;
  margin-top: 50px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

::v-deep .el-carousel__container {
  height: 400px
}

.left {
  display: inline-block;
  vertical-align: top;
  width: 48%;
  margin-right: 2%;
}

.right {
  display: inline-block;
  vertical-align: top;
  width: 48%;
  margin-right: 2%;
}

.news-normal-title {
  height: 50px;
  margin-bottom: 10px;
  border-bottom: 3px solid #dedede;

  p {
    i {
      display: block;
      float: left;
      width: 36px;
      height: 36px;
      margin: 5px 5px 0 0;
      background: url(../../assets/img/index/yonghuzhinan.png);
      // background-color: red;
      color: red;
      font-size: 0;
      text-indent: -999em;
    }
  }
}

.normal-title {
  float: left;
  height: 50px;
  padding: 0 15px 0 10px;
  background: #f5f5f5;
  border-bottom: 3px solid #c50707;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: #c50707;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
}

.news-normal {
  padding-left: 15px;
  margin-bottom: 20px;

  li {
    box-sizing: border-box;
    height: 58px;
    overflow: hidden;
    border-bottom: 1px solid #f1f1f1;

    h5 {
      float: left;
      width: 85%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      a {
        color: #333;
        font-size: 18px;
        font-weight: normal;
        line-height: 58px;
      }

      a:hover {
        color: red
      }
    }
  }
}
</style>
