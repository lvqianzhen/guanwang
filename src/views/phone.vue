<template>
  <div class="phone">
    <div class="header_box">
      <div class="header">
        <div class="logo"></div>
        <div class="header_middle">
          <div class="middle_top">
            下载大湖车务APP
          </div>
          <div class="middle_bottom">
            —&nbsp;明明白白修车养车&nbsp;—
          </div>
        </div>
        <div class="header_right flr">
          <div class="header_right_btn" onclick="window.open('http://portal.d-hu.cn/static/checkPhone.html','_self')">
            立即下载
          </div>
        </div>
      </div>
    </div>
    <div class="nav_box">
      <div class="nav">
        <div class="nav_top">
          <div class="nav_top_box">
            <div class="nav_top_logo"></div>
            <div class="nav_top_right">
              <div class="nav_title">
                大湖车务
              </div>
              <div class="nav_desc">
                明明白白修车养车
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg_2"></div>
    </div>
    <div class="down_box">
      <div class="down_btn" onclick="window.open('http://portal.d-hu.cn/static/checkPhone.html','_self')">
        立即下载
      </div>
    </div>
    <div class="company">
      大湖车务
    </div>
    <div class="company_desc">
      以<span>解决服务问题</span>为宗旨的<span>“互联网+汽车后市场”线上线下相结合</span>的共享服务平台
    </div>
    <div class="company_desc_1">
      与车相关的角色——车主、维修工/维修店、汽配/用品商、保险代理、二手车 中介等——都可以通过平台快捷、高效、无障碍地直接沟通和交易
    </div>
    <div class="floor">
      <div class="floor_box">
        <div class="sex_1" :class="{sex_active:item==1}" @click="handle({item:1})">
          <div class="text_one" v-if="item!=1">
            爱车资讯
          </div>
          <div v-if="item==1">
            <div class="text_one_content">
              助您成为一名真
            </div>
            <div class="text_two_content">
              正懂车的人
            </div>
          </div>
        </div>
        <div class="sex_2" :class="{sex_active:item==2}" @click="handle({item:2})">
          <div class="text_one" v-if="item!=2">
            ...
          </div>
          <div v-if="item==2">
            <div class="text_one_content">
              详情及更多功能
            </div>
            <div class="text_two_content">
              请扫码下载大湖
            </div>
            <div class="text_three_content">
              车务APP
            </div>
          </div>
        </div>
        <div class="sex_3" :class="{sex_active:item==3}" @click="handle({item:3})">
          <div class="text_one" v-if="item!=3">
            二维码挪车
          </div>
          <div v-if="item==3">
            <div class="text_one_content">
              在考虑方便的同
            </div>
            <div class="text_two_content">
              时要注意保护隐
            </div>
            <div class="text_three_content">
              私哦
            </div>
          </div>
        </div>
        <div class="sex_4">
          <div class="text_one">
            汽车配件
          </div>
        </div>
        <div class="sex_5">
          <div class="text_one">
            汽车用品
          </div>
        </div>
        <div class="sex_6" :class="{sex_active:item==6}" @click="handle({item:6})">
          <div class="text_one" v-if="item!=6">
            发布需求
          </div>
          <div v-if="item==6">
            <div class="text_one_content">
              与车有关的问题
            </div>
            <div class="text_two_content">
              都可以通过平台
            </div>
            <div class="text_three_content">
              “求救”
            </div>
          </div>
        </div>
        <div class="sex_7" :class="{sex_active:item==7}" @click="handle({item:7})">
          <div class="text_one" v-if="item!=7">
            在线技师
          </div>
          <div v-if="item==7">
            <div class="text_one_content">
              与技师直接沟通
            </div>
            <div class="text_two_content">
              快速解决您的问
            </div>
            <div class="text_three_content">
              题
            </div>
          </div>
        </div>
        <div class="sex_8">
          <div class="text_one">
            福利超市
          </div>
        </div>
        <div class="sex_9">
          <div class="text_one">
            维保需求
          </div>
        </div>
        <div class="sex_10" :class="{sex_active:item==10}" @click="handle({item:10})">
          <div class="text_one" v-if="item!=10">
            预约服务<br/>
            工位管理
          </div>
          <div v-if="item==10">
            <div class="text_one_content">
              在线预约，提前
            </div>
            <div class="text_two_content">
              沟通，节省养车
            </div>
            <div class="text_three_content">
              时间
            </div>
          </div>
        </div>
        <div class="sex_11" :class="{sex_active:item==11}" @click="handle({item:11})">
          <div class="text_one" v-if="item!=11">
            智能养护<br/>
            自助诊断
          </div>
          <div v-if="item==11">
            <div class="text_one_content">
              提前了解自己爱
            </div>
            <div class="text_two_content">
              车问题所在，明
            </div>
            <div class="text_three_content">
              明白白修车养车
            </div>
          </div>
        </div>
        <div class="sex_12">
          <div class="text_one">
            专业咨询
          </div>
        </div>
        <div class="sex_13" :class="{sex_active:item==13}" @click="handle({item:13})">
          <div class="text_one" v-if="item!=13">
            车友圈
          </div>
          <div v-if="item==13">
            <div class="text_one_content">
              通过“TA”找到
            </div>
            <div class="text_two_content">
              知音！
            </div>
          </div>
        </div>
        <div class="sex_14" :class="{sex_active:item==14}" @click="handle({item:14})">
          <div class="text_one" v-if="item!=14">
            同城店铺
          </div>
          <div v-if="item==14">
            <div class="text_one_content">
              随时随地查找你
            </div>
            <div class="text_two_content">
              身边最适合你需
            </div>
            <div class="text_three_content">
              求的店铺
            </div>
          </div>
        </div>
        <div class="sex_15">
          <div class="text_one">
            福利超市
          </div>
        </div>
        <div class="sex_16" :class="{sex_active:item==16}" @click="handle({item:16})">
          <div class="text_one" v-if="item!=16">
            用车常识
          </div>
          <div v-if="item==16">
            <div class="text_one_content">
              呵护好您的爱车
            </div>
            <div class="text_two_content">
              “TA”会更温顺
            </div>
          </div>
        </div>
        <div class="sex_17">
          <div class="text_one">
            二手物品
          </div>
        </div>
      </div>
    </div>
    <div class="choose">
      <div class="title">
        为什么选择大湖车务？
      </div>
      <div class="table">
        <div class="table_item" :class="{table_item_active:items==1}" @click="handleItem({items:1})">
          车主
        </div>
        <div class="table_item" :class="{table_item_active:items==2}" @click="handleItem({items:2})">
          维修店
        </div>
        <div class="table_item" :class="{table_item_active:items==3}" @click="handleItem({items:3})">
          维修工
        </div>
        <div class="table_item" :class="{table_item_active:items==4}" @click="handleItem({items:4})">
          汽配/用品商
        </div>
      </div>
      <div class="table_type" v-if="items==1">
        <div class="top">
          <div class="top_desc">
            放心用车有保障
          </div>
          <div class="line_box">
            <div class="line"></div>
          </div>
        </div>
        <div class="type_content">
          <div class="content_item">
            同城修理店口碑、位置、价格全面展示，在线预约、一键导航
          </div>
          <div class="content_item">
            个人技师在线咨询，找专业人士，修车养车不用担心没"熟人"
          </div>
          <div class="content_item">
            智能养护方案，根据车型、里程，通过大数据实现定制化养护
          </div>
          <div class="content_item">
            汽车用品/配件/工具，海量商品在线选，货比三家,性价比更优
          </div>
          <div class="content_item">
            车友社区，爱车资讯，用车常识，热点话题，放心用车有保障
          </div>
        </div>
      </div>
      <div class="table_type" v-if="items==2">
        <div class="top">
          <div class="top_desc">
            快捷入驻，永久不分成
          </div>
          <div class="line_box">
            <div class="line"></div>
          </div>
        </div>
        <div class="type_content">
          <div class="content_item">
            同城海量用户快速定位，生意再也不限于周围几公里
          </div>
          <div class="content_item">
            遇到技术难题？在线找专家或同行咨询，没什么解决不了的
          </div>
          <div class="content_item">
            车型越来越多怎么办？在线找维修技师，什么车都能修！
          </div>
          <div class="content_item">
            工位管理，提高效率，增加收入；还可以充分调度人员和资源
          </div>
          <div class="content_item">
            共享时代，我为人人，人人为我，养个店面不再那么辛苦！
          </div>
        </div>
      </div>
      <div class="table_type" v-if="items==3">
        <div class="top">
          <div class="top_desc">
            自由自在把钱挣
          </div>
          <div class="line_box">
            <div class="line"></div>
          </div>
        </div>
        <div class="type_content">
          <div class="content_item">
            不开口即可全面展现自己，一招手艺天下知
          </div>
          <div class="content_item">
            随时随地和车主沟通，关系好了，生意自然来
          </div>
          <div class="content_item">
            和修理厂建立合作，术业有专攻，只做自己喜欢和擅长的
          </div>
          <div class="content_item">
            技师圈子聚在一起，业务水平、人脉关系同步增长
          </div>
          <div class="content_item">
            我的时间我做主！收入增加了，干着也开心了
          </div>
        </div>
      </div>
      <div class="table_type" v-if="items==4">
        <div class="top">
          <div class="top_desc">
            再也没有难卖的配件
          </div>
          <div class="line_box">
            <div class="line"></div>
          </div>
        </div>
        <div class="type_content">
          <div class="content_item">
            免费开店，没有分成，增加销售输入，积累口碑和品牌
          </div>
          <div class="content_item">
            车主和修理厂都可以找到你，增加销售渠道，提高销售利润
          </div>
          <div class="content_item">
            联系厂家，拓展货源，为客户提供物美价优的商品
          </div>
          <div class="content_item">
            给自己的爱车找靠谱的管家/维修技师，放心用车有保障 ！
          </div>
          <div class="content_item">
            参与技术交流，了解行业动态，未来把握在自己手中！
          </div>
        </div>
      </div>
      <div class="down_btn" :class="{down_btn_active:btnActive==1}" @click="goLink({btnActive:1})">
        详情及更多功能  请扫码下载大湖车务APP
      </div>
    </div>
    <div class="phone_item">
      <div class="phone_top">
        <div class="top_title">
          找店铺，找技师
        </div>
        <div class="line"></div>
      </div>
      <div class="phone_desc">
        随时随地查找周边的店铺或技师，直接联系沟通
      </div>
      <div class="phone_desc1">
        修车养车不用担心没“熟人”，放心用车有保障
      </div>
      <div class="phone_1"></div>
    </div>
    <div class="phone_item">
      <div class="phone_top">
        <div class="top_title">
          描述问题，发布需求
        </div>
        <div class="line"></div>
      </div>
      <div class="phone_desc">
        疑难杂症、稀有配件、特殊环境，都可以通过平台“求救”
      </div>
      <div class="phone_desc1">
        定向匹配，择优推荐，满足您的需求，解决您的问题
      </div>
      <div class="phone_2"></div>
    </div>
    <div class="phone_item">
      <div class="phone_top">
        <div class="top_title">
          智能养护，自助诊断
        </div>
        <div class="line"></div>
      </div>
      <div class="phone_desc">
        根据您的爱车信息和里程，自动推荐定制化养护方案
      </div>
      <div class="phone_desc1">
        提前了解自己爱车问题所在，明明白白修车养车
      </div>
      <div class="phone_3"></div>
    </div>
    <div class="phone_item">
      <div class="phone_top">
        <div class="top_title">
          专业商超，精准高效
        </div>
        <div class="line"></div>
      </div>
      <div class="phone_desc">
        汽车配件，汽车用品，汽保工具，维修保养，美容改装，二手物品等
      </div>
      <div class="phone_desc1">
        涵盖与车有关的所有业务；只做与车有关的业务
      </div>
      <div class="phone_4"></div>
    </div>
    <div class="bottom_box">
      <div class="top">
        <div class="img"></div>
        <div class="title">
          扫描二维码关注微信公众号或
        </div>
        <div class="title1">
          微信搜索[大湖车务]即可
        </div>
      </div>
      <div class="down">
        <div class="down_one">
          ©2018-2019  大湖科技（北京）有限公司
        </div>
        <div class="down_two">
          京公网安备：11010802028910号  ICP证：京B2-20190908
        </div>
        <div class="down_three">
          电话：400-700-3696    地址：北京市海淀区北四环中路209号
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "phone",
    data(){
      return{
        item:'',
        items:1,
        btnActive:0
      }
    },
    methods:{
      handle(val){
        this.item = val.item
      },
      handleItem(val){
        this.items = val.items
      },
      goLink(val){
        this.btnActive = val.btnActive;
        window.open('http://portal.d-hu.cn/static/checkPhone.html','_self')
      }
    }
  }
</script>

<style lang="scss">
  .header_box {
    width: 7.50rem;
    height: 1.10rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background: rgba(0, 0, 0, .5);

    .header {
      padding: 0.16rem 0.3rem;
      display: flex;

      .logo {
        width: 0.76rem;
        height: 0.76rem;
        background: url("../assets/phone/logo.png") no-repeat;
        background-size: 100%, 100%;
      }

      .header_middle {
        margin-left: 0.21rem;
        flex: 1;

        .middle_top {
          font-family: PingFang-SC-Medium;
          color: #FFFFFF;
          font-size: 0.36rem;
          font-weight: 500;
        }

        .middle_bottom {
          font-family: PingFang-SC-Medium;
          color: #FFFFFF;
          font-size: 0.2rem;
          font-weight: 500;
        }
      }

      .header_right {
        width: 2rem;
        height: 0.76rem;
        position: relative;

        .header_right_btn {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 0.58rem;
          text-align: center;
          line-height: 0.58rem;
          border-radius: 0.58rem;
          font-family: PingFang-SC-Medium;
          font-size: 0.24rem;
          font-weight: 500;
          color: #fff;
          background: #2DBEFE;
        }
      }
    }
  }

  .nav_box {
    position: relative;
    width: 7.5rem;
    height: 8.97rem;

    .nav {
      width: 7.5rem;
      height: 8.43rem;
      background: url("../assets/phone/bg_1.png") no-repeat;
      background-size: 100%, 100%;

      .nav_top {
        padding-top: 1.74rem;
        padding-bottom: 0.63rem;
        display: flex;
        justify-content: center;
        align-items: center;

        .nav_top_box {
          display: flex;

          .nav_top_logo {
            margin-top: 0.05rem;
            width: 0.88rem;
            height: 0.88rem;
            background: url("../assets/phone/logo.png") no-repeat;
            background-size: 100%, 100%;
          }

          .nav_top_right {
            margin-left: 0.2rem;

            .nav_title {
              font-size: 0.4rem;
              color: #fff;
              font-weight: Bold;
              font-family: PingFang-SC-Bold;
            }

            .nav_desc {
              font-size: 0.22rem;
              color: #fff;
              font-weight: Bold;
              margin-top: 0.11rem;
              font-family: PingFang-SC-Medium;
            }
          }
        }
      }
    }

    .bg_2 {
      width: 4.49rem;
      height: 5.72rem;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      background: url("../assets/phone/bg_2.png") no-repeat;
      background-size: 100%, 100%;
    }
  }

  .down_box {
    display: flex;
    justify-content: center;
    align-items: center;

    .down_btn {
      width: 4rem;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: center;
      color: #fff;
      background: #2DBEFE;
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      border-radius: 0.7rem;
      margin-top: 0.81rem;
      margin-bottom: 1.05rem;
    }
    .down_btn_active{
      width: 4rem;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: center;
      color: #2DBEFE;
      background: #fff;
      font-size: 0.3rem;
      font-family: PingFang-SC-Medium;
      border-radius: 0.7rem;
      margin-top: 0.81rem;
      margin-bottom: 1.05rem;
    }
  }

  .company {
    margin-bottom: 0.48rem;
    font-size: 0.4rem;
    color: #333;
    font-family: PingFang-SC-Medium;
    text-align: center;
    font-weight: 500;
  }
  .company_desc {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    line-height: 1.5;
    text-align: left;
    font-family: PingFang-SC-Medium;
    color: #666666;
    font-size: 0.22rem;
    font-weight: 500;
    span {
      font-family: PingFang-SC-Medium;
      color: #2DBEFE;
      font-size: 0.28rem;
      font-weight: 500;
    }
  }
  .company_desc_1{
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    margin-top: 0.19rem;
    margin-bottom: 0.6rem;
    line-height: 1.5;
    text-align: left;
    font-family:PingFang-SC-Regular;
    color: #666666;
    font-size: 0.2rem;
    font-weight: 500;
  }
  .floor{
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    .floor_box{
      position: relative;
      height: 13.1rem;
      .sex_1{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        left: 0rem;
        top: 0.87rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition: transform 0.1s ease;
        .text_one{
          font-family: PingFang-SC-Medium;
          color: #666666;
          font-size: 0.18rem;
          font-weight:500;
        }
        .text_two_content{
          /*margin-top: 0.1rem;*/
        }
        .text_two_three{
          /*margin-top: 0.1rem;*/
        }
      }
      .sex_1_active{
        /*width: 2.2rem;*/
        /*height: 1.94rem;*/
        transform: scale(1.1,1.1);
        background: url("../assets/phone/sex_active.png") no-repeat;
        background-size: 100%,100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .text_one_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
        .text_two_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
      }
      .sex_2{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        left: 1.65rem;
        top: 0rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        transition: transform 0.1s ease;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_2:active{
        transform: scale(1.1,1.1)
      }
      .sex_3{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 0rem;
        top: 0rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        transition: transform 0.1s ease;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_3:active{
        transform: scale(1.1,1.1)
      }
      .sex_4{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_null.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 3.45rem;
        top: 1.8rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_5{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_null.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 0rem;
        top: 1.8rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_6{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 1.75rem;
        top: 2.7rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        transition: transform 0.1s ease;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_6:active{
        transform: scale(1.1,1.1)
      }
      .sex_7{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 3.45rem;
        top: 3.65rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        transition: transform 0.1s ease;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_7:active{
        transform: scale(1.1,1.1)
      }
      .sex_8{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_null.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        left: 0;
        top: 4.6rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_9{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_null.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 1.75rem;
        top: 4.6rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_10{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 1.75rem;
        top: 6.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        transition: transform 0.1s ease;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_10:active{
        transform: scale(1.1,1.1)
      }
      .sex_11{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 0rem;
        top: 5.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        transition: transform 0.1s ease;
        /*.text_two_content{*/
        /*  margin-top: 0.1rem;*/
        /*}*/
        /*.text_two_three{*/
        /*  margin-top: 0.1rem;*/
        /*}*/
      }
      .sex_11_active{
        transform: scale(1.1,1.1);
        background: url("../assets/phone/sex_active.png") no-repeat;
        background-size: 100%,100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .text_one_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
        .text_two_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
        .text_three_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
        .text_fore_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
      }

      .sex_12{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_null.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 1.75rem;
        top: 8.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_13{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 0rem;
        top: 9.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        transition: transform 0.1s ease;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_13:active{
        transform: scale(1.1,1.1)
      }
      .sex_14{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        left: 1.65rem;
        top: 9.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        transition: transform 0.1s ease;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_14:active{
        transform: scale(1.1,1.1)
      }
      .sex_15{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_null.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        left: 0;
        top: 10.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_16{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_blue.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        left: 1.65rem;
        top: 11.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        transition: transform 0.1s ease;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_16:active{
        transform: scale(1.1,1.1)
      }
      .sex_17{
        width: 1.8rem;
        height: 1.56rem;
        background: url("../assets/phone/sex_null.png") no-repeat;
        background-size: 100%,100%;
        position: absolute;
        right: 0rem;
        top: 11.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: PingFang-SC-Medium;
        color: #666666;
        font-size: 0.24rem;
        font-weight:500;
        .text_two_content{
          margin-top: 0.1rem;
        }
        .text_two_three{
          margin-top: 0.1rem;
        }
      }
      .sex_active{
        transform: scale(1.1,1.1);
        background: url("../assets/phone/sex_active.png") no-repeat;
        background-size: 100%,100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .text_one_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
        .text_two_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
        .text_three_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
        .text_fore_content{
          transform: scale(0.75,0.75);
          font-family: PingFang-SC-Medium;
          color: #fff;
          font-size: 0.18rem;
          text-align: center;
          font-weight:500;
        }
      }
    }
  }
  .choose{
    position: relative;
    height: 7.2rem;
    background: url("../assets/phone/bg_3.png") no-repeat;
    background-size: cover;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    margin-top: 0.98rem;
    .title{
      padding-top: 0.58rem;
      padding-bottom: 0.6rem;
      font-size: 0.4rem;
      color: #fff;
      text-align: center;
      font-family:PingFang-SC-Medium;
      font-weight:500;
    }
    .table{
      height: 0.58rem;
      line-height: 0.58rem;
      display: flex;
      flex: 4;
      box-sizing: border-box;
      border: 1px solid #fff;
      border-radius: 0.04rem;
      .table_item{
        flex: 1;
        text-align: center;
        font-size:0.24rem;
        color: #fff;
        font-family:PingFang-SC-Medium;
        font-weight:500;
      }
      .table_item_active{
        background: #fff;
        color: #2DBEFE;
        font-size: 0.24rem;
        font-family:PingFang-SC-Medium;
        font-weight:500;
      }
    }
    .table_type{
      .top{
        margin-top: 0.41rem;
        .top_desc{
          font-size:0.26rem;
          color: #fff;
          font-family:PingFang-SC-Medium;
          font-weight:500;
          text-align: center;
        }
        .line_box{
          margin-top: 0.25rem;
          .line{
            width: 0.8rem;
            height: 0.02rem;
            color: #fff;
            background: #fff;
            margin: 0 auto;
          }
        }
      }
      .type_content{
        margin-top: 0.25rem;
        .content_item{
          margin-top: 0.2rem;
          line-height: 1.1;
          color: #fff;
          text-align: center;
          font-size:0.20rem;
          font-family:PingFang-SC-Regular;
          font-weight:400;
          /*text-align: left;*/
        }
      }
    }
    .down_btn{
      position: absolute;
      bottom: 0.5rem;
      left: 0;
      right: 0;
      width: 6rem;
      margin: 0 auto;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 0.44rem;
      font-size: 0.18rem;
      color: #fff;
      font-family:PingFang-SC-Regular;
      font-weight:400;
    }
    .down_btn_active{
      position: absolute;
      bottom: 0.5rem;
      left: 0;
      right: 0;
      width: 6rem;
      height: 0.44rem;
      margin: 0 auto;
      line-height: 0.44rem;
      text-align: center;
      border: 1px solid #2DBEFE;
      border-radius: 0.44rem;
      font-size: 0.18rem;
      color: #2DBEFE;
      background: #fff;
      font-family:PingFang-SC-Regular;
      font-weight:400;
    }
  }
  .phone_item{
    margin-top: 1.01rem;
    padding: 0rem 0.3rem;
    .phone_top{
      .top_title{
        font-size: 0.4rem;
        color: #333;
        text-align: center;
        font-family:PingFang-SC-Medium;
        font-weight:500;
      }
      .line{
        width: 0.8rem;
        height: 0.04rem;
        background: #2DBEFE;
        margin: 0.16rem auto 0.19rem;
      }
    }
    .phone_desc{
      font-size:0.2rem;
      color: #666;
      text-align: center;
      font-family:PingFang-SC-Regular;
      font-weight:400;
    }
    .phone_desc1{
      font-size:0.2rem;
      color: #666;
      text-align: center;
      margin-top: 0.1rem;
      font-family:PingFang-SC-Regular;
      font-weight:400;
    }
    .phone_1{
      width: 5.88rem;
      height: 6.77rem;
      margin: 0.46rem auto 0.82rem;
      background: url("../assets/phone/phone_1.png") no-repeat;
      background-size: 100%,100%;
    }
    .phone_2{
      width: 5.97rem;
      height: 6.76rem;
      margin: 0.46rem auto 0.82rem;
      background: url("../assets/phone/phone_2.png") no-repeat;
      background-size: 100%,100%;
    }
    .phone_3{
      width: 5.96rem;
      height: 6.77rem;
      margin: 0.46rem auto 0.82rem;
      background: url("../assets/phone/phone_3.png") no-repeat;
      background-size: 100%,100%;
    }
    .phone_4{
      width: 5.95rem;
      height: 6.76rem;
      margin: 0.46rem auto 0.82rem;
      background: url("../assets/phone/phone_4.png") no-repeat;
      background-size: 100%,100%;
    }
  }
  .bottom_box{
    background:#2DBEFE;
    .top{
      padding: 0.5rem 0.3rem 0;
      .img{
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 auto 0.2rem;
        background: url("../assets/phone/code.png") no-repeat;
        background-size: 100%,100%;
      }
      .title{
        font-size: 0.2rem;
        color: #fff;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        text-align: center;
        margin-bottom: 0.1rem;
      }
      .title1{
        font-size: 0.2rem;
        color: #fff;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        text-align: center;
        margin-bottom: 0.44rem;
      }
    }
    .down{
      padding:0 0.3rem 0.6rem;
      .down_one{
        color: #fff;
        font-size:0.18rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        text-align: center;
        margin-bottom: 0.1rem;
      }
      .down_two{
        color: #fff;
        font-size:0.18rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        margin-bottom: 0.1rem;
        text-align: center;
      }
      .down_three{
        color: #fff;
        font-size:0.18rem;
        font-family:PingFang-SC-Regular;
        font-weight:400;
        text-align: center;
      }
    }
  }
</style>
