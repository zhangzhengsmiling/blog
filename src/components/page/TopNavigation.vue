<template>
 <div class="top_nav">
     <nav class="top_nav_nav">
         <li class="clssify">首页</li>
         <li class="clssify">最新文章</li>
         <li class="clssify">人工智能</li>
         <li class="clssify">大数据 </li>
         <li class="clssify">区块链</li>
         <li class="clssify">运维</li>
         <li class="clssify">前端</li>
         <li class="clssify">后端</li>
         <li class="clssify">数据库</li>
         <li class="clssify">云计算</li>
     </nav>
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
    .top_nav {
        width: 1050px;
        height: 40px;
        margin-top: 0;
        margin-left: 15%;
    }
    .top_nav_nav>li {
        float: left;
        width: 100px;
        height: 40px;
        font-size: 20px;
        list-style: none;
        background: green;
        color:bisque;
        text-align: center;
        border-right: 1px solid black;
        line-height: 40px;
        transition: .3s all linear;
    }
     .top_nav_nav>li:hover {
         transform: scale(1.2);
         cursor: pointer;
         background: gray;
         border: none;
         color: azure
     }
    .top_nav_nav::after {
        content: "";
        display: block;
        clear: both;
    }
</style>
