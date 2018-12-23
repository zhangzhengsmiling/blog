<template>
 <div class="left_navigation">
   <div class="left_nav_blog">
     博客
   </div>
   <div class="left_nav_ques">
     问答
   </div>
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
  .left_navigation {
    position: fixed;
    width :60px;
    height: 120px;
    background: red;
    line-height: 60px;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
  }
  .left_nav_blog {
    width: 100%;
    height: 50%;
    background: green;
  }
  .left_nav_ques {
    width: 100%;
    height: 50%;
    background:blanchedalmond;
  }
  .left_nav_blog:hover,
  .left_nav_ques:hover {
    background: lightgray;
    color:blue;
    cursor: pointer;
  }
</style>
