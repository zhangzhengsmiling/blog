<template>
  <li class="blog_item">
    <h2 class="blog_item_tilte">{{item.title}}</h2>
    <div class="blog_item_author">
      <img class="blog_item_author_head" :src="item.author.headUrl" alt="">
      <div class="blog_item_author_accountname" :title="item.author.accountName">{{item.author.accountName}}</div>
    </div>
    <div class="blog_item_classify">{{item.classify}}</div>
    <div class="blog_item_stars">{{item.stars}}</div>
    <div class="blog_item_comments_count">{{item.commentsCount}}</div>
    <div class="blog_item_publish_time">{{item.publishTime}}</div>
  </li>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style>
  .blog_item {
    list-style: disc;
    position: relative;
    padding: 10px;
    height: 120px;
    /* background: red; */
    color: #fff;
    border-bottom: 1px solid rgb(58, 43, 43);
    box-sizing: border-box;
  }
  .blog_item:hover {
    border:3px solid rgb(8, 61, 24);
    cursor: pointer;
  }
  h2 {
    line-height: 60px;
  }
  .blog_item:hover h2 {
    text-decoration: underline;
    color: blue;
  }
  .blog_item_author {
    position: absolute;
    /* top: */
    background:red;
  }
  .blog_item_author_head {
    position: absolute;
    left: 40px;;
    width: 40px;
    height:40px;
    border-radius: 20px;
  }
  .blog_item_author_accountname {
    position: absolute;
    background: gray;
    top: 0px;
    left: 100px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .blog_item_classify {
    position: absolute;
    top: 70px;
    left: 300px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: green;
  }
  .blog_item_stars {
    position: absolute;
    top: 70px;
    left: 600px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: green;
  }
  .blog_item_comments_count {
    position: absolute;
    top: 70px;
    left: 720px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: green;
  }
  .blog_item_publish_time {
    position: absolute;
    top: 70px;
    left: 860px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: green;
  }
</style>
