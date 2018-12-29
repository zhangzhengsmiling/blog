<template>
 <div class="blog_detail_view">
   <div class="blog_detail_view_msg">
     <blog-msg></blog-msg>
   </div>
   <blog-content></blog-content>
   <comments-list></comments-list>
   <div class="blog_detail_view_fixed_block">
     <div class="blog_detail_view_fixed_block_stars" @click="giveStar">
       <span class="icon-heart"></span>
     </div>
    <div class="blog_detail_view_fixed_block_collect" @click="collct">
       <span class="icon-star-empty"></span>
     </div>
    <div class="blog_detail_view_fixed_block_comments" @click="showCommentInput">
       <span class="icon-bubble2"></span>
     </div>
   </div>
   <div class="comment_input_area" v-show="isShowCommentInput">
     <input class="comment_input" type="text" v-model="commentText">
     <div class="comment_send" @click="sendComment">发布</div>
   </div>
 </div>
</template>
<script>
import BlogMsg from './BlogMsg.vue'
import BlogContent from './BlogContent.vue'
import CommentsList from '../comments/CommentsList.vue'
export default {
  data () {
    return {
      commentText: '',
      isShowCommentInput: false,
      isLogin: true
    }
  },
  components: {
    BlogMsg,
    BlogContent,
    CommentsList
  },
  methods: {
    sendComment () {
      // 点击发布后，发布评论信息
    },
    giveStar () {
      // 点击爱心，点赞数增加
    },
    collct () {
      // 点击后将文章添加到用户的收藏列表
    },
    showCommentInput () {
      // 需定义一个信号量，标记当前评论输入界面是否显示
      // 当评论输入界面隐藏时，点击后显示评论输入界面
      // 当评论输入界面显示时，点击欧隐藏评论输入界面
      if (this.isLogin === true) {
        this.isShowCommentInput = !this.isShowCommentInput
      }
    }
  }
}
</script>

<style>
  .blog_detail_view_msg {
    box-sizing: border-box;
  }
  .blog_detail_view_fixed_block {
    position: fixed;
    bottom: 40px;
    left: 1310px;
    width: 60px;
    height: 120px;
    color: aliceblue;
    /* background: red; */
  }
  .blog_detail_view_fixed_block>div {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border: 2px solid green;
    box-sizing: border-box;
    border-collapse: collapse;
    box-shadow: #fff 0px 0px 10px;
  }
  .blog_detail_view_fixed_block>div:hover {
    background: #fff;
    color: black;
  }
  .comment_input_area {
    position: fixed;
    right: 214px;
    bottom: 40px;
    width: 1100px;
    line-height: 40px;
    height: 40px;
    border: 2px solid green;
    background: green;
    box-sizing: border-box;
    box-shadow: #fff 0px 0px 10px;
    z-index: 10;
  }
  .comment_input {
    position: absolute;
    font-size: 20px;
    font-family: Verdana, Tahoma, sans-serif;
    height: 100%;
    width: 1010px;
  }
  .comment_send {
    position: absolute;
    right: 2px;
    width: 75px;
    height: 30px;
    background: green;
    line-height: 30px;
    text-align: center;
    font-weight: 1000;
    color: #fff;
    margin-top: 3px;
  }
  .comment_send:hover {
    color: #080808;
    background: #fff;
    cursor: pointer;
  }
</style>
