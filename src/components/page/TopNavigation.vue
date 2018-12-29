<template>
 <div class="top_nav">
     <nav class="top_nav_nav">
       <li :class="{'current_class': index === currentClass}" v-for="(classify, index) in classifyList" :key="index" @click="showClassify">{{classify}}</li>
     </nav>
 </div>
</template>

<script>
export default {
  data () {
    return {
      classifyList: ['首页', '最新文章', '人工智能', '大数据', '区块链', '运维', '前端', '后端', '数据库', '云计算'],
      currentClass: 0
    }
  },
  methods: {
    showClassify (e) {
      this.currentClass = this.classifyList.findIndex(classify => e.target.innerText === classify)
    }
  }
}
</script>

<style>
    .top_nav {
        position: relative;
        width: 1050px;
        height: 40px;
        margin-top: 0;
        margin-left: 15%;
        z-index: 20;
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
         color: azure;
     }
    .top_nav_nav::after {
        content: "";
        display: block;
        clear: both;
    }
    .top_nav_nav>li.current_class {
      transform: scale(1.2);
      cursor: pointer;
      background: gray;
      border: none;
      color: azure;
    }
</style>
