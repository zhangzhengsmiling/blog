<template>
 <div class="line_star">
   <div class="line_block"></div>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
  .line_star {
    position: relative;
    /* width: 70%; */
    margin:0 auto;
    height: 8px;
    background:rgba(100 , 10 , 84 , .8);
    padding: 1px;
    box-sizing: border-box;
  }
  .line_block {
    width: 14px;
    height: 6px;
    background:white;
    position: absolute;
    top: 1px;
    animation: flow 4s ease-in-out alternate infinite;
  }
  @keyframes flow {
    0% {
      left: 0%;
    }
    100% {
      left: 99%;;
    }
  }
</style>
