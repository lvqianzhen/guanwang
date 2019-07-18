<template>
  <div class="home">
    <div class="header">
      <div class="header_content clearFix">
        <div class="content_left fll">
          <div class="left_content_box">
            <div class="content_left_top clearFix">
<!--              logo图片-->
              <div class="logo fll"></div>
              <div class="logo_desc fll">
                <div class="logo_name">
                  大湖车务
                </div>
                <div class="logo_name_desc">
                  明明白白修车养车
                </div>
              </div>
            </div>
            <a class="dow_btn" href="javascript:;" @click="jump(0)">
              立即下载
            </a>
          </div>
        </div>
        <div class="content_right fll">
<!--          header手机图片-->
          <div class="right_img"></div>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="nav_content">
        <div class="nav_title">
          大湖车务
        </div>
        <div class="nav_desc">
          <div class="nav_desc_one">
            以<span class="change_color">解决服务问题</span>为宗旨的&nbsp;<span class="change_color">"互联网+汽车后市场"&nbsp;线上线下相结合</span>的共享服务平台
          </div>
          <div class="nav_desc_two">
            与车相关的角色——车主、维修工/维修店、汽配/用品商、保险代理、二手车中介等——都可以通过平台快捷、高效、无障碍地直接沟通和交易
          </div>
        </div>
        <div class="nav_sex">
          <div class="sex_1" :class="{sex_active:item==1}">汽保工具</div>
          <div class="sex_2" :class="{sex_active:item==2}">福利超市</div>
          <div class="sex_3" :class="{sex_active:item==3}"  @mouseenter="enterItem({item:3,items:3})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=3)&&items!=3">
              <div class="text_one" :class="{text_one_active:item==3}">
                爱车资讯
              </div>
            </div>
            <div v-if="item==3&&items==3">
              <div class="text_one_content">
                祝您成为一名真
              </div>
              <div class="text_two_content">
                正懂车的人
              </div>
            </div>
          </div>
          <div class="sex_4" :class="{sex_active:item==4}"  @mouseenter="enterItem({item:4,items:4})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=4)&&items!=4">
              <div class="text_one" :class="{text_one_active:item==4}">
                用车常识
              </div>
            </div>
            <div v-if="item==4&&items==4">
              <div class="text_one_content">
                呵护好您的爱车
              </div>
              <div class="text_two_content">
                ，“TA”会更温顺
              </div>
            </div>
          </div>
          <div class="sex_5" :class="{sex_active:item==5}"  @mouseenter="enterItem({item:5,items:5})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=5)&&items!=5">
              <div class="text_one" :class="{text_one_active:item==5}">
                同城店铺
              </div>
            </div>
            <div v-if="item==5&&items==5">
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
          <div class="sex_6" :class="{sex_active:item==6}"  @mouseenter="enterItem({item:6,items:6})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=6)&&items!=6">
              <div class="text_one" :class="{text_one_active:item==6}">
                在线技师
              </div>
            </div>
            <div v-if="item==6&&items==6">
              <div class="text_one_content">
                与技师直接沟通
              </div>
              <div class="text_two_content">
                ，快速解决您的
              </div>
              <div class="text_three_content">
                问题
              </div>
            </div>
          </div>
          <div class="sex_7" :class="{sex_active:item==7}">汽车配件</div>
          <div class="sex_8" :class="{sex_active:item==8}"  @mouseenter="enterItem({item:8,items:8})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=8)&&items!=8">
              <div class="text_one" :class="{text_one_active:item==8}">
                ...
              </div>
            </div>
            <div v-if="item==8&&items==8">
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
          <div class="sex_9" :class="{sex_active:item==9}">专业咨询</div>
          <div class="sex_10" :class="{sex_active:item==10}" @mouseenter="enterItem({item:10,items:10})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=10)&&items!=10">
              <div class="text_one" :class="{text_one_active:item==10}">
                预约服务
              </div>
              <div class="text_two" :class="{text_one_active:item==10}">
                工位管理
              </div>
            </div>
            <div v-if="item==10&&items==10">
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
          <div class="sex_11" :class="{sex_active:item==11}">维修保养</div>
          <div class="sex_12" :class="{sex_active:item==12}" @mouseenter="enterItem({item:12,items:12})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=12)&&items!=12">
              <div class="text_one" :class="{text_one_active:item==12}">
                发布需求
              </div>
            </div>
            <div v-if="item==12&&items==12">
              <div class="text_one_content">
                与车有关的问题
              </div>
              <div class="text_two_content">
                ，都可以通过平
              </div>
              <div class="text_three_content">
                台“求救”
              </div>
            </div>
          </div>
          <div class="sex_13" :class="{sex_active:item==13}">二手物品</div>
          <div class="sex_14" :class="{sex_active:item==14}" @mouseenter="enterItem({item:14,items:14})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=14)&&items!=14">
              <div class="text_one" :class="{text_one_active:item==14}">
                车友圈
              </div>
            </div>
            <div v-if="item==14&&items==14">
              <div class="text_one_content">
                通过“TA”找到
              </div>
              <div class="text_two_content">
                知音！
              </div>
            </div>
          </div>
          <div class="sex_15" :class="{sex_active:item==15}" @mouseenter="enterItem({item:15,items:15})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=15)&&items!=15">
              <div class="text_one" :class="{text_one_active:item==15}">
                智能养护
              </div>
              <div class="text_two" :class="{text_one_active:item==15}">
                自助诊断
              </div>
            </div>
            <div v-if="item==15&&items==15">
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
          <div class="sex_16" :class="{sex_active:item==16}">汽车用品</div>
          <div class="sex_17" :class="{sex_active:item==17}" @mouseenter="enterItem({item:17,items:17})" @mouseleave="leaveItem({item:0,items:0})">
            <div v-if="(item!=17)&&items!=17">
              <div class="text_one" :class="{text_one_active:item==17}">
                二维码挪车
              </div>
            </div>
            <div v-if="item==17&&items==17">
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
        </div>
      </div>
    </div>
    <div class="choose">
      <div class="choose_box">
        <div class="why_choose">
          为什么选择大湖车务？
        </div>
        <div class="reason_box clearFix">
          <div class="type_box fll">
            <div class="type_item" :class="{choose_active:active ==1}" @mouseover="active=1" @click="active=1">
              车主
            </div>
            <div class="type_item" :class="{choose_active:active ==2}" @mouseover="active=2" @click="active=2">
              维修店
            </div>
            <div class="type_item" :class="{choose_active:active ==3}" @mouseover="active=3" @click="active=3">
              维修工
            </div>
            <div class="type_item" :class="{choose_active:active ==4}" @mouseover="active=4" @click="active=4">
              汽配/用品商
            </div>
          </div>
          <div class="type_desc fll">
<!--            车主-->
            <div class="item_type" v-if="active==1">
              <div class="item_type_title">
                放心用车有保障
              </div>
              <div class="line"></div>
              <ul class="item_type_content">
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    同城修理店口碑排名、位置分布、价格信息全面展示，在线预约、一键导航。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    个人维修技师在线咨询，找专业人士问问，修车养车再也不用担心没有“熟人”。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    爱车智能养护方案生成，根据车型、行使里程，通过大数据实现定制化养护。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    汽车用品、汽车配件在线购买，海量商品供选择，货比三家，性价比更优。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    车友社区聊一聊，爱车资讯看一看；用车常识多了解，热点话题不错过。
                  </div>
                </li>
              </ul>
            </div>
<!--            维修店-->
            <div class="item_type" v-if="active==2">
              <div class="item_type_title">
                快捷入驻，永久不分成
              </div>
              <div class="line"></div>
              <ul class="item_type_content">
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    同城海量用户快速定位，生意再也不限于周围几公里。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    遇到技术难题？在线找专家或同行咨询，没什么解决不了的。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    车型越来越多怎么办？在线找维修技师，什么车都能修！
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    工位管理，提高效率，增加收入；还可以充分调度人员和资源。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    共享时代，我为人人，人人为我，养个店面不再那么辛苦！
                  </div>
                </li>
              </ul>
            </div>
<!--            维修工-->
            <div class="item_type" v-if="active==3">
              <div class="item_type_title">
                自由自在把钱挣
              </div>
              <div class="line"></div>
              <ul class="item_type_content">
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    不开口即可全面展现自己，一招手艺天下知。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    随时随地和车主沟通，关系好了，生意自然来。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    和修理厂建立合作，术业有专攻，只做自己喜欢和擅长的。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    技师圈子聚在一起，业务水平、人脉关系同步增长。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    我的时间我做主！收入增加了，干着也开心了。
                  </div>
                </li>
              </ul>
            </div>
<!--            汽配/用品商-->
            <div class="item_type" v-if="active==4">
              <div class="item_type_title">
                再也没有难卖的配件
              </div>
              <div class="line"></div>
              <ul class="item_type_content">
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    免费开店，没有分成，增加销售收入，积累口碑和品牌。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    车主和修理厂都可以找到你，增加销售渠道，提高销售利润。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    联系厂家，拓展货源，为客户提供物美价优的商品。
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    给自己的爱车找靠谱的管家/维修技师，放心用车有保障 ！
                  </div>
                </li>
                <li class="content_item clearFix">
                  <div class="dian_box fll">
                    <div class="dian"></div>
                  </div>
                  <div class="text fll">
                    参与技术交流，了解行业动态，未来把握在自己手中！
                  </div>
                </li>
              </ul>
            </div>
            <a href="javascript:;" class="choose_btn" :class="{choose_btn_active:active1 ==true}" @mouseover="mouseEnter(true)" @click="jump(0)" @mouseleave="leave(false)">
              详情及更多功能&nbsp;请扫码下载大湖车务APP
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="floor">
      <div class="floor_box">
        <div class="floor_item_one clearFix">
          <div class="fi_left fll"></div>
          <div class="fi_right fll">
            <div class="fi_right_box">
              <div class="fi_right_top clearFix">
                <div class="table_left fll">
                  <div class="kong"></div>
                  <div class="word">
                    找店铺，找技师
                  </div>
                </div>
                <div class="table_right fll">
                  01
                </div>
              </div>
              <div class="line"></div>
              <div class="find_shop">
                随时随地查找周边的店铺或技师，直接联系沟通
              </div>
              <div class="find_shop">
                修车养车不用担心没“熟人”，放心用车有保障
              </div>
            </div>
          </div>
        </div>
        <div class="floor_item_two clearFix">
          <div class="fi_left fll">
            <div class="fi_left_box">
              <div class="fi_left_top clearFix">
                <div class="table_left flr">
                  <div class="kong"></div>
                  <div class="word">
                    描述问题，发布需求
                  </div>
                </div>
                <div class="table_right flr">
                  02
                </div>
              </div>
              <div class="line_box">
                <div class="line"></div>
              </div>
              <div class="find_shop">
                疑难杂症、稀有配件、特殊环境，都可以通过平台“求救”
              </div>
              <div class="find_shop">
                定向匹配，择优推荐，满足您的需求，解决您的问题
              </div>
            </div>
          </div>
          <div class="fi_right fll"></div>
        </div>
        <div class="floor_item_three clearFix">
          <div class="fi_left fll"></div>
          <div class="fi_right fll">
            <div class="fi_right_box">
              <div class="fi_right_top clearFix">
                <div class="table_left fll">
                  <div class="kong"></div>
                  <div class="word">
                    智能养护-自助诊断
                  </div>
                </div>
                <div class="table_right fll">
                  03
                </div>
              </div>
              <div class="line"></div>
              <div class="find_shop">
                根据您的爱车信息和里程，自动推荐定制化养护方案
              </div>
              <div class="find_shop">
                提前了解自己爱车问题所在，明明白白修车养车
              </div>
            </div>
          </div>
        </div>
        <div class="floor_item_fore clearFix">
          <div class="fi_left fll">
            <div class="fi_left_box">
              <div class="fi_left_top clearFix">
                <div class="table_left flr">
                  <div class="kong"></div>
                  <div class="word">
                    专业商超，精准高效
                  </div>
                </div>
                <div class="table_right flr">
                  04
                </div>
              </div>
              <div class="line_box">
                <div class="line"></div>
              </div>
              <div class="find_shop">
                汽车配件，汽车用品，汽保工具，维修保养，美容改装，二手物品等
              </div>
              <div class="find_shop">
                涵盖与车有关的所有业务；只做与车有关的业务
              </div>
            </div>
          </div>
          <div class="fi_right fll"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_box">
        <div class="top_position">
          <div class="box_top clearFix">
            <div class="code_item1 fll">
              <div class="code_img"></div>
              <div class="code_desc">大湖车务APP</div>
            </div>
            <div class="code_item2 fll">
              <div class="code_img"></div>
              <div class="code_desc">大湖车务公众号</div>
            </div>
          </div>
        </div>
        <div class="warn">
          详情及更多功能 请扫码下载大湖车务APP
        </div>
        <div class="address">
          <span>©2018-2019 大湖科技（北京）有限公司</span>
          <span>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802028910"
               target="_blank">京公网安备：11010802028910号
            </a>
          </span>
          <span>ICP证：京B2-20190908</span>
        </div>
        <div class="phone_box">
          电话：400-700-3696<span class="phone_address">地址：北京市海淀区北四环中路209号</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bg_1 from '../assets/bg_1.png';
  import bg_2 from '../assets/bg_2.png';
  import header_phone from '../assets/header_phone.png';
  import test_code from '../assets/test_code.png';
  import app_code from '../assets/app_code.png';
  import logo_icon from '../assets/logo_icon.png';
  import phone_01 from '../assets/phone_01.png';
  import phone_02 from '../assets/phone_02.png';
  import phone_03 from '../assets/phone_03.png';
  import phone_04 from '../assets/phone_04.png';

  export default {
    data() {
      return {
        bg_1: bg_1,
        bg_2: bg_2,
        header_phone: header_phone,
        app_code: app_code,
        logo_icon: logo_icon,
        phone_01: phone_01,
        phone_02: phone_02,
        phone_03: phone_03,
        phone_04: phone_04,
        test_code: test_code,

        active:1,//为什么选择大湖车务
        active1:false,//关注公众号按钮

        item:'',//哪一个六边形被激活
        items:0,//显示内容
      }
    },
    methods:{
      mouseEnter(val){
        this.active1 = val;
      },
      leave(val){
        this.active1 = val;
      },
      jump(index){
        this.active1 = true;
        // 用 class="instance_title" 添加锚点
        let jump = document.querySelectorAll('.footer');
        let total = jump[index].offsetTop;
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
          smoothDown();
        } else {
          let newTotal = distance - total;
          step = newTotal / 50;
          smoothUp();
        }
        function smoothDown () {
          if (distance < total) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10);
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total;
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothUp, 10);
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total;
          }
        }
      },

      enterItem(val){
        this.item = val.item;
        this.items = val.items;
      },
      leaveItem(val){
        this.items = val.items;
        this.item = val.item;
      },
      goLink(){

      }
    }
  }
</script>

<style lang="scss">
  .home {
    background: #fff;
    .header {
      height: 8.19rem;
      background: url("../assets/bg_1.png") no-repeat;
      background-size: 100%,100%;
      .header_content{
        width: 12rem;
        margin: 0 auto;
        padding-top: 1.13rem;
        .content_left{
          width: 4.44rem;
          margin-right: 1.8rem;
          height: 7.06rem;
          position: relative;
          .left_content_box{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          }
          .content_left_top{
            margin-bottom: 1.02rem;
            .logo{
              width: 1.36rem;
              height: 1.36rem;
              background: url("../assets/logo_icon.png") no-repeat;
              background-size: 100%,100%;
            }
            .logo_desc{
              margin-left: 0.27rem;
              .logo_name{
                font-size: 0.48rem;
                color: #fff;
                /*-webkit-font-family:MicrosoftYaHei;*/
                /*-moz-font-family:MicrosoftYaHei;*/
                /*-o-font-family:MicrosoftYaHei;*/
                /*-o-ms-family:MicrosoftYaHei;*/
                font-family:MicrosoftYaHei;
              }
              .logo_name_desc{
                margin-top: 0.18rem;
                font-size: 0.34rem;
                color: #fff;
                font-family:MicrosoftYaHei;
              }
            }
          }
          .dow_btn{
            width: 4.44rem;
            height: 0.60rem;
            line-height: 0.60rem;
            display: block;
            text-align: center;
            background: #fff;
            font-size: 0.26rem;
            color: #2DBEFE;
            cursor: pointer;
            border-radius: 0.60rem;
          }
        }
        .content_right{
          width: 5.75rem;
          .right_img{
            width: 5.75rem;
            height: 7.06rem;
            background: url("../assets/header_phone.png") no-repeat;
            background-size: 100%,100%;
          }
        }
      }
    }
    .nav{
      background: #fff;
      .nav_content{
        width: 12rem;
        margin: 0 auto;
        .nav_title{
          padding-top: 1.24rem;
          font-size: 0.36rem;
          color: #333333;
          text-align: center;
          font-family:MicrosoftYaHei;
        }
        .nav_desc{
          padding-top: 0.58rem;
          .nav_desc_one{
            font-size: 0.22rem;
            color: #666666;
            margin-bottom: 0.28rem;
            text-align: center;
            font-family:MicrosoftYaHei;
            .change_color{
              font-size: 0.28rem;
              color: #2DBEFE;
              text-align: center;
              font-family:MicrosoftYaHei;
            }
          }
          .nav_desc_two{
            font-size: 0.16rem;
            color: #666666;
            text-align: center;
            font-family:MicrosoftYaHei;
          }
        }
        .nav_sex{
          height: 6.40rem;
          margin-top: 0.81rem;
          margin-bottom: 0.79rem;
          position: relative;
          .sex_1{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 0.87rem;
            top: 0;
            text-align: center;
            line-height: 1.81rem;
            font-size:0.24rem;
            font-family:MicrosoftYaHei;
            color: #666666;
            cursor: pointer;
            background: url("../assets/sex_angle.png") no-repeat;
            background-size: 100%,100%;
          }
          .sex_2{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 6.14rem;
            top: 0;
            text-align: center;
            line-height: 1.81rem;
            font-size:0.24rem;
            font-family:MicrosoftYaHei;
            color: #666666;
            cursor: pointer;
            background: url("../assets/sex_angle.png") no-repeat;
            background-size: 100%,100%;
          }
          .sex_3{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 9.63rem;
            top: 0;
            text-align: center;
            cursor: pointer;
            background: #E9F3FC;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              line-height: 1.81rem;
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.65rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_4{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 0px;
            top: 1.49rem;
            text-align: center;
            cursor: pointer;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              line-height: 1.81rem;
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.65rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_5{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 1.74rem;
            top: 1.49rem;
            text-align: center;
            cursor: pointer;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              line-height: 1.81rem;
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.50rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_three_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_6{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 7.01rem;
            top: 1.49rem;
            text-align: center;
            cursor: pointer;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              line-height: 1.81rem;
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.50rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_three_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_7{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 8.75rem;
            top: 1.49rem;
            text-align: center;
            line-height: 1.81rem;
            font-size:0.24rem;
            font-family:MicrosoftYaHei;
            color: #666666;
            cursor: pointer;
            background: url("../assets/sex_angle.png") no-repeat;
            background-size: 100%,100%;
          }
          .sex_8{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 10.49rem;
            top: 1.49rem;
            text-align: center;
            cursor: pointer;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              line-height: 1.81rem;
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.50rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_three_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_9{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 2.62rem;
            top: 3.00rem;
            text-align: center;
            line-height: 1.81rem;
            font-size:0.24rem;
            font-family:MicrosoftYaHei;
            color: #666666;
            cursor: pointer;
            background: url("../assets/sex_angle.png") no-repeat;
            background-size: 100%,100%;
          }
          .sex_10{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 4.36rem;
            top: 3.00rem;
            text-align: center;
            cursor: pointer;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
              margin-top: 0.60rem;
            }
            .text_two{
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
              margin-top: 0.05rem;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.50rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_three_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_11{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 6.12rem;
            top: 3.00rem;
            text-align: center;
            line-height: 1.81rem;
            font-size:0.24rem;
            font-family:MicrosoftYaHei;
            color: #666666;
            cursor: pointer;
            background: url("../assets/sex_angle.png") no-repeat;
            background-size: 100%,100%;
          }
          .sex_12{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 7.88rem;
            top: 3.00rem;
            text-align: center;
            cursor: pointer;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              line-height: 1.81rem;
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.50rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_three_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_13{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 0px;
            top: 4.50rem;
            text-align: center;
            line-height: 1.81rem;
            font-size:0.24rem;
            font-family:MicrosoftYaHei;
            color: #666666;
            cursor: pointer;
            background: url("../assets/sex_angle.png") no-repeat;
            background-size: 100%,100%;
          }
          .sex_14{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 1.75rem;
            top: 4.50rem;
            text-align: center;
            cursor: pointer;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              line-height: 1.81rem;
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.65rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_15{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 5.25rem;
            top: 4.50rem;
            text-align: center;
            cursor: pointer;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
              margin-top: 0.60rem;
            }
            .text_two{
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
              margin-top: 0.05rem;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.50rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_three_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_16{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 8.75rem;
            top: 4.50rem;
            text-align: center;
            line-height: 1.81rem;
            font-size:0.24rem;
            font-family:MicrosoftYaHei;
            color: #666666;
            cursor: pointer;
            background: url("../assets/sex_angle.png") no-repeat;
            background-size: 100%,100%;
          }
          .sex_17{
            width: 1.56rem;
            height: 1.81rem;
            position: absolute;
            left: 10.50rem;
            top: 4.50rem;
            text-align: center;
            cursor: pointer;
            background: url("../assets/sex_color.png") no-repeat;
            background-size: 100%,100%;
            .text_one{
              line-height: 1.81rem;
              font-size:0.24rem;
              font-family:MicrosoftYaHei;
              color: #666666;
            }
            .text_one_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.50rem;
            }
            .text_two_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_three_content{
              font-size:0.18rem;
              font-family:MicrosoftYaHei;
              color: #fff;
              margin-top: 0.05rem;
            }
            .text_one_active{
              color: #fff;
            }
          }
          .sex_active{
            width: 1.56rem;
            height: 1.81rem;
            color: #fff;
            background: url("../assets/sex_angle_active.png") no-repeat;
            background-size: 100%,100%;
          }
        }
      }
    }
    .choose{
      height: 6.28rem;
      background: url("../assets/bg_2.png") no-repeat;
      background-size: 100%,100%;
      .choose_box{
        width: 12.00rem;
        margin: 0 auto;
        .why_choose{
          padding-top: 0.70rem;
          padding-bottom: 0.70rem;
          font-size: 0.36rem;
          color: #fff;
          text-align: center;
        }
        .reason_box{
          padding-bottom: 0.2rem;
          .type_box{
            .type_item{
              width: 2.12rem;
              height: 0.50rem;
              margin-bottom: 0.33rem;
              line-height: 0.50rem;
              font-size: 0.26rem;
              color: #fff;
              cursor: pointer;
              text-align: center;
              &:last-child{
                margin-bottom: 0px;
              }
            }
            .choose_active{
              width: 2.12rem;
              height: 0.50rem;
              line-height: 0.50rem;
              font-size: 0.26rem;
              color: #2DBEFE;
              text-align: center;
              cursor: pointer;
              background: url("../assets/active_btn.png") no-repeat;
              background-size: 100%,100%;
            }
          }
          .type_desc{
            margin-left: 0.80rem;
            .item_type{
              width: 9.08rem;
              .item_type_title{
                font-size: 0.26rem;
                color: #fff;
              }
              .line{
                width: 1.00rem;
                height: 0.01rem;
                background: #fff;
                margin-top: 0.20rem;
              }
              .item_type_content{
                margin-top: 0.18rem;
                .content_item{
                  margin-bottom: 0.18rem;
                  .dian_box{
                    width: 0.06rem;
                    height: 0.26rem;
                    margin-right: 0.10rem;
                    position: relative;
                    .dian{
                      width: 0.06rem;
                      height: 0.06rem;
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      background: #fff;
                      border-radius: 0.06rem;
                      transform: translate(-50%,-50%);
                    }
                  }
                  .text{
                    font-size: 0.20rem;
                    color: #fff;
                  }
                }
                .content_item:last-child{
                  margin-bottom: 0px;
                }
              }
            }
            .choose_btn{
              box-sizing: border-box;
              width: 4.40rem;
              height: 0.32rem;
              line-height: 0.32rem;
              display: block;
              text-align: center;
              font-size: 0.16rem;
              color: #fff;
              cursor: pointer;
              border: 1px solid #fff;
              border-radius: 0.32rem;
              margin-top: 0.67rem;
            }
            .choose_btn_active{
              box-sizing: border-box;
              width: 4.40rem;
              height: 0.32rem;
              line-height: 0.32rem;
              text-align: center;
              font-size: 0.16rem;
              color: #2DBEFE;
              cursor: pointer;
              border: 0.01rem solid #fff;
              background: #fff;
              border-radius: 0.32rem;
              margin-top: 0.67rem;
            }
          }
        }
      }
    }
    .floor{
      margin-top: 1.03rem;
      .floor_box{
        width: 12.00rem;
        margin: 0 auto;
        .floor_item_one{
          margin-bottom: 0.85rem;
          .fi_left{
            width: 5.88rem;
            height: 6.78rem;
            margin-right: 0.24rem;
            background: url("../assets/phone_01.png") no-repeat;
            background-size: 100%,100%;
          }
          .fi_right{
            width: 5.88rem;
            height: 6.78rem;
            position: relative;
            .fi_right_box{
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(0,-50%);
              .fi_right_top{
                .table_left{
                  .kong{
                    height: 0.70rem;
                  }
                  .word{
                    font-size: 0.30rem;
                    color: #333333;
                    text-align: end;
                    margin-right: 0.78rem;
                  }
                }
                .table_right{
                  font-size: 1.00rem;
                  color: #2DBEFE;
                  font-family:FZFSFW--GB1-0;
                  font-weight:400;
                }
              }
              .line{
                width: 0.80rem;
                height: 0.02rem;
                margin-bottom: 0.30rem;
                background: #2DBEFE;
              }
              .find_shop{
                font-size: 0.18rem;
                color: #666666;
                margin-bottom: 0.15rem;
              }
            }
          }
        }
        .floor_item_two{
          margin-bottom: 0.85rem;
          .fi_left{
            width: 5.78rem;
            height: 6.76rem;
            position: relative;
            .fi_left_box{
              position: absolute;
              top: 50%;
              right: 0;
              transform: translate(0,-50%);
              .fi_left_top{
                .table_left{
                  .kong{
                    height: 0.70rem;
                  }
                  .word{
                    font-size: 0.30rem;
                    color: #333333;
                  }
                }
                .table_right{
                  font-size: 1.00rem;
                  color: #2DBEFE;
                  margin-right: 0.78rem;
                  font-family:FZFSFW--GB1-0;
                }
              }
              .line_box{
                position: relative;
                margin-bottom: 0.30rem;
                .line{
                  width: 0.80rem;
                  height: 0.02rem;
                  background: #2DBEFE;
                  position: absolute;
                  right: 0;
                }
              }
              .find_shop{
                text-align: right;
                font-size: 0.18rem;
                color: #666666;
                margin-bottom: 0.15rem;
              }
            }
          }
          .fi_right{
            width: 5.98rem;
            height: 6.76rem;
            margin-left: 0.24rem;
            background: url("../assets/phone_02.png") no-repeat;
            background-size: 100%,100%;
          }
        }
        .floor_item_three{
          margin-bottom: 0.85rem;
          .fi_left{
            width: 5.88rem;
            height: 6.78rem;
            margin-right: 0.24rem;
            background: url("../assets/phone_03.png") no-repeat;
            background-size: 100%,100%;
          }
          .fi_right{
            width: 5.88rem;
            height: 6.78rem;
            position: relative;
            .fi_right_box{
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(0,-50%);
              .fi_right_top{
                .table_left{
                  .kong{
                    height: 0.70rem;
                  }
                  .word{
                    font-size: 0.30rem;
                    color: #333333;
                    text-align: end;
                    margin-right: 0.78rem;
                  }
                }
                .table_right{
                  font-size: 1.00rem;
                  color: #2DBEFE;
                  font-family:FZFSFW--GB1-0;
                }
              }
              .line{
                width: 0.80rem;
                height: 0.02rem;
                margin-bottom: 0.30rem;
                background: #2DBEFE;
              }
              .find_shop{
                font-size: 0.18rem;
                color: #666666;
                margin-bottom: 0.15rem;
              }
            }
          }
        }
        .floor_item_fore{
          margin-bottom: 0.85rem;
          .fi_left{
            width: 5.78rem;
            height: 6.76rem;
            position: relative;
            .fi_left_box{
              position: absolute;
              top: 50%;
              right: 0;
              transform: translate(0,-50%);
              .fi_left_top{
                .table_left{
                  .kong{
                    height: 0.70rem;
                  }
                  .word{
                    font-size: 0.30rem;
                    color: #333333;
                  }
                }
                .table_right{
                  font-size: 1.00rem;
                  color: #2DBEFE;
                  margin-right: 0.78rem;
                  font-family:FZFSFW--GB1-0;
                }
              }
              .line_box{
                position: relative;
                margin-bottom: 0.30rem;
                .line{
                  width: 0.80rem;
                  height: 0.02rem;
                  background: #2DBEFE;
                  position: absolute;
                  right: 0;
                }
              }
              .find_shop{
                text-align: right;
                font-size: 0.18rem;
                color: #666666;
                margin-bottom: 0.15rem;
              }
            }
          }
          .fi_right{
            width: 5.98rem;
            height: 6.76rem;
            margin-left: 0.24rem;
            background: url("../assets/phone_04.png") no-repeat;
            background-size: 100%,100%;
          }
        }
      }
    }
    .footer{
      background:#2DBEFE;
      .footer_box{
        width: 12.00rem;
        margin: 0 auto;
        padding-top: 0.6rem;
        .top_position{
          width: 100%;
          height: 2.5rem;
          position: relative;
          .box_top{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            .code_item1{
              .code_img{
                width: 2.00rem;
                height: 2.00rem;
                background: url("../assets/test_code.png") no-repeat;
                background-size: 100%,100%;
                margin-right: 1.03rem;
              }
              .code_desc{
                color: #ffffff;
                font-size:0.20rem;
                font-family:MicrosoftYaHei;
                text-align: center;
                margin-right: 1.03rem;
                margin-top: 0.10rem;
              }
            }
            .code_item2{
              .code_img{
                width: 2.00rem;
                height: 2.00rem;
                background: url("../assets/account.png") no-repeat;
                background-size: 100%,100%;
              }
              .code_desc{
                color: #ffffff;
                font-size:0.20rem;
                font-family:MicrosoftYaHei;
                text-align: center;
                margin-top: 0.10rem;
              }
            }
          }
        }
        .warn{
          color: #ffffff;
          font-size:0.28rem;
          font-family:MicrosoftYaHei;
          text-align: center;
          margin-top: 0.23rem;
        }
        .address{
          text-align: center;
          font-size:0.14rem;
          color: #ffffff;
          font-family:MicrosoftYaHei;
          margin-top: 0.20rem;
          span:nth-child(2){
            margin-left: 0.20rem;
            a{
              color: #fff;
            }
            a:hover{
              color: #0000ff;
            }
          }
          span:nth-child(3){
            margin-left: 0.20rem;
          }
        }
        .phone_box{
          height: 0.3rem;
          line-height: 0.3rem;
          margin-top: 0.1rem;
          padding-bottom: 0.3rem;
          text-align: center;
          font-size:0.14rem;
          color: #ffffff;
          font-family:MicrosoftYaHei;
          .phone_address{
            margin-left: 0.2rem;
          }
        }
      }
    }
  }
</style>
