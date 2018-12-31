<!--
    适合08黑背景的文字颜色
    color:darkorange;
    color:darkorchid;
    color:gray;
-->

<template>
 <div>
   <pre class="blog_detail_view_content" v-html="text"></pre>
 </div>
</template>

<script>
import PubSub from 'pubsub-js'
let fs = require('fs')
export default {
  data () {
    return {
      text: '',
      path: '/static/Users/UserId/ArticleId/article.txt'
    }
  },
  components: {
  },
  mounted () {
    PubSub.subscribe('isShowList', (msg, data) => {
var fs=require('fs');
  
fs.readFile(this.path,'utf-8',function(err,data){
    if(err){
        console.error(err);
    }
    else{
        console.log(data);
    }
});
    })
  }
}
</script>

<style>
  .blog_detail_view_content {
    /* padding: 10px; */
    /* width: 100%; */
    /* height: 400px; */
    /* position: absolute; */
    z-index: 10;
    padding: 0 20px;
    border: 1px solid green;
    line-height: 30px;
    color: #fff;

    font-weight: 600;
    box-sizing: border-box;
  }
  .code{
    font-size: 16px;
    background:rgb(26, 25, 24);
    color:darkorchid;
    box-sizing: border-box;
  }
  .link {
    color: #0ff;
  }
</style>
