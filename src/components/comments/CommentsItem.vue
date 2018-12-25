<template>
 <div class="comments_item">
   <div class="comments_item_head">
     <img class="comments_item_headImg" src="/static/images/head/head2.jpg" alt="">
     <div class="comments_item_name" title="name">依然是一个长名字</div>
   </div>
   <div class="comments_item_comment">
     <div class="comments_item_content">这是一个评论区文本，总是喜欢说一些废话，好了，下面是废话的内容：你好，我很喜欢你的文章，虽然我一点也没看懂，当我就是很喜欢，支持原创作者加油，好了，写满一行，开溜！</div>
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
  .comments_item {
    width: 100%;
    height: auto;
    background:rgb(159, 164, 168);
    padding:0 10px;
    box-sizing: border-box;
  }
  .comments_item_head {
    width:120px;
    height: 88px;
    background: red;
  }
  .comments_item_headImg {
    width: 60px;
    height: 60px;
    margin-left: 30px;
    border-radius: 30px;
  }
  .comments_item_comment {
    /* background: red; */
    padding: 10px;
    margin-top: -84px;
    margin-left: 120px;
    background: blue;
  }
  .comments_item_name {
    width: 120px;
    line-height: 20px;
    font-size: 12px;
    height: 20px;
    font-weight: 600;
    color: lightgoldenrodyellow;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .comments_item_name:hover {
    cursor: default;
  }
</style>
