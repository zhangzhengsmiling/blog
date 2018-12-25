<!--
  博客标题信息展示
-->
<template>
 <div class="blog_msg">
   <div class="blog_msg_author_btn_back" @click="backToList"><span class="icon-arrow-left2"></span></div>
   <div class="blog_msg_title">this is article title</div>
   <div class="blog_msg_author">
     <img class="blog_msg_author_headImg" src="/static/images/head/head1.jpg" alt="">
     <div class="blog_msg_authorName" title="有一个很长的名字">@有一个很长的名字呢</div>
   </div>
   <span class="blog_msg_concern">+关注</span>
   <span class="blog_msg_viewers"><span class="icon-eye icon"></span>访问量</span>
   <span class="blog_msg_stars"><span class="icon-heart icon"></span> 点赞数</span>
   <span class="blog_msg_commentsCount"><span class="icon-bubble2 icon"></span>评论数</span>
   <span class="blog_msg_publish_time">写于yyyy年mm月dd日</span>
 </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    backToList () {
      PubSub.publish('isShowList', {isShowList: true, articleId: ''})
    }
  }
}
</script>

<style>
  .blog_msg {
    position: relative;
    z-index: 10;
    width: 100%;
    height: 340px;
    background: rgba(100, 100, 84, .2);
    padding: 20px;
    /* border: 1px solid blue; */
    box-sizing: border-box;
  }
  .blog_msg_author_btn_back {
    background:rgb(42, 138, 42);
    border-radius: 5px;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 20px;
    width: 40px;
    box-sizing: border-box;
    height:20px;
  }
  /* 鼠标hover返回按钮效果 */
  .blog_msg_author_btn_back:hover {
    background: transparent;
    cursor: pointer;
    color: lightpink;
  }
  .blog_msg_title {
    /* background: red; */
    width: 100%;
    height: 60px;
    /* border: 1px solid red; */
    box-sizing: border-box;
    margin-top: 50px;

    /*浮雕文字效果*/
    font-size: 50px;
    padding-left: 10px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color:#080808;
    text-shadow:#fff 1px 1px 12px;
  }
  .blog_msg_author {
    position: absolute;
    top: 129px;
    left: 20;
    margin-top: 77px;
  }
  .blog_msg_author_headImg {
    width: 60px;
    height: 60px;
    border-radius: 30px;
  }
  .blog_msg_authorName {
    font-style: italic;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    position: absolute;
    width: 100px;
    padding: 3px 10px;
    top: 22px;
    left: 70px;
    background: lightgray;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .blog_msg_authorName:hover {
    cursor: default;
  }
  /*关注按钮*/
  .blog_msg_concern {
    position: absolute;
    top:228px;
    left: 220px;
    background: green;
    padding: 3px 10px;
  }
  .blog_msg_concern:hover {
    background: red;
    cursor: default;
  }

  .blog_msg_viewers {
    position: absolute;
    top:228px;
    left: 800px;
    padding: 3px 10px;
    /* background: red; */
    color: #fff;
  }
  .blog_msg_stars {
    position: absolute;
    top:228px;
    left: 680px;
    padding: 3px 10px;
    /* background: red; */
    color: #fff;
  }
  .blog_msg_commentsCount {
    position: absolute;
    top:228px;
    left: 560px;
    padding: 3px 10px;
    /* background: red; */
    color: #fff;
  }
  .blog_msg_commentsCount {
    position: absolute;
    top:228px;
    left: 560px;
    padding: 3px 10px;
    /* background: red; */
    color: #fff;
  }
  .blog_msg_publish_time{
    position: absolute;
    top:300px;
    left: 860px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    padding: 3px 10px;
    /* background: red; */
    color:burlywood;
  }
  .icon {
    padding:3px 10px;
  }
</style>
