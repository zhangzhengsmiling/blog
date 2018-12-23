<template>
 <div class="right_login" @mouseover="loginMouseover" @mouseleave="loginMouseleave">
     <div class="right_login_head">
         <img class="right_login_head_image" src="/static/images/head/head0.jpg" alt="">
         <div class="clickToLogin" v-if="isShowLoginTip">点击登录</div>
     </div>
     <div class="right_login_head_button">
       <transition>
         <!-- <div :class="{'button':true, 'button2':}">button1</div> -->
       </transition>
     </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin: true,
      isShowLoginTip: false
    }
  },
  components: {

  },
  methods: {
    loginMouseover () {
      if (!this.isLogin) {
        this.isShowLoginTip = true
      } else {
        console.log('登录成功')
      }
    },
    loginMouseleave () {
      this.isShowLoginTip = false
    }
  }
}
</script>

<style>
    .right_login {
        position: absolute;
        right:100px;
        top: 200px;
        width: 80px;
        height:80px;
        /* background: red; */
        border-radius: 40px;
        /* overflow: hidden; */
    }
    .right_login:hover {
      cursor: pointer;
    }
    .right_login_head_image {
      position: absolute;
        width: 80px;
        height: 80px;
        border-radius: 40px;
    }
    .button {
      position: absolute;
      width: 80px;
      height: 80px;
      border: 1px solid green;
      box-sizing: border-box;
      background:blue;
      z-index: -1;
      border-radius: 40px;
    }
    .clickToLogin {
      position: absolute;
      top: 30px;
      left:10px;
      font-weight: bolder;
      font-size: 14px;
      color: #fff;
      background: rgba(100 , 100 , 84 , .6);
    }
</style>
