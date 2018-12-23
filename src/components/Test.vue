<template>
 <div class="test" @mouseover="over" @mouseleave="leave">
   <transition name="move">
     <div :class="{'a': isHover,'b': !isHover}"></div>
   </transition>
 </div>
</template>

<script>
export default {
  data () {
    return {
      isHover: false
    }
  },
  components: {

  },
  methods: {
    over () {
      this.isHover = true
    },
    leave () {
      this.isHover = false
    }
  }
}
</script>

<style>
  .test {
    width: 400px;
    height: 400px;
    background: red;
    margin :0 auto;
  }
  .a {
    width: 100px;
    height : 100px;
    background: blue;
  }
  .b{
    width: 100px;
    height : 100px;
    background: blue;
    transform: translateX(300px);
  }
  /* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.move-fade-enter-active {
  transition: all 2s ease;
}
.move-fade-leave-active {
  transition: all 2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>
