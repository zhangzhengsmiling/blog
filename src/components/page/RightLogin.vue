<!--
  isLogin:控制用户是否登录，true：表示用户已登录  ps:isLogin需要从外部输入

  isHover判断鼠标是否移动到用户头像上
  isShowLoginTips值根据isLogin和isHorver的值判定 isShowTips = isLogin && isHover
-->
<template>
 <div class="right_login" @mouseover="loginMouseover" @mouseleave="loginMouseleave">
     <div :class="{'right_login_head':true , 'right_login_head_expand':isHover&&isLogin}">
         <img class="right_login_head_image" src="/static/images/head/head0.jpg" alt="">
         <div class="clickToLogin" v-if="isShowLoginTips">点击登录</div>
     </div>
     <div :class="{'right_login_head_button': true, 'right_login_head_button_show': isHover && isLogin}">
       <div class="right_login_circle1">我的博客</div>
       <div class="right_login_circle1">我的信息</div>
       <div class="right_login_circle1">Logout</div>
     </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: false,
      isShowLoginTip: false,
      isHover: false
    }
  },
  components: {

  },
  methods: {
    loginMouseover () {
      this.isHover = true
    },
    loginMouseleave () {
      this.isHover = false
    }
  },
  computed: {
    isShowLoginTips () {
      return !this.isLogin && this.isHover
    }
  }
}
</script>

<style>
    .right_login {
      position: fixed;
      z-index: 2;
        right:100px;
        top: 200px;
        width: 80px;
        height:80px;
        /* background: red; */
        border-radius: 40px;
        /* overflow: hidden; */
    }
    .right_login_head_expand {
      position: absolute;
      /* border: 1px solid red; */
      height: 400px;
      z-index: 2;
      /* width: 96px; */
      /* padding-left: 8px; */
      /* box-sizing: border-box; */
    }
    .right_login:hover {
      cursor: pointer;
    }
    .right_login_head {
      position: relative;
      width: 96px;
      padding-left: 8px;
      box-sizing: border-box;
    }
    .right_login_head_image {
      position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 40px;
        z-index: 10;

    }
    .right_login_circle1 {
      position: absolute;
      top:0;
      left: 8px;
      width: 80px;
      height: 80px;
      border-radius: 40px;
      font-size: 16px;
      text-align: center;
      line-height: 80px;
      font-weight: bold;
      color: #fff;
      border: 2px solid #1c410d;
      box-sizing: border-box;
      z-index: 2;
    }
    div.right_login_head_button_show :nth-child(1) {
      position: absolute;
      top: 100px;
    }
    div.right_login_head_button_show :nth-child(1):hover {
      transform: scale(1.2);
      border-color:red;
    }

    div.right_login_head_button_show :nth-child(2) {
      position: absolute;
      top: 200px;
    }
    div.right_login_head_button_show :nth-child(2):hover {
      transform: scale(1.2);
      border-color:red;
    }

    div.right_login_head_button_show :nth-child(3) {
      position: absolute;
      top: 300px;
    }
    div.right_login_head_button_show :nth-child(3):hover {
      transform: scale(1.2);
      border-color:red;
    }
    .clickToLogin {
      position: absolute;
      top: 30px;
      left:18px;
      font-weight: bolder;
      font-size: 14px;
      color: #fff;
      background: rgba(100 , 100 , 84 , .6);
      z-index: 10;
    }
</style>
