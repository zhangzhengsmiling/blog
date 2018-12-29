<template>
 <div class="comments_item">
   <div class="comments_item_head">
     <img :src="commentItem.headUrl" alt="" class="comments_item_head_image">
     <div class="comments_item_viewer_name" :title="commentItem.username">{{commentItem.username}}</div>
   </div>
   <div class="comments_content">
     <div class="comments_content_text">{{commentItem.commentText}}</div>
    <div class="comments_content_time">发表于{{commentItem.commentTime}}</div>
   </div>
 </div>
</template>

<script>
export default {
  props: ['commentItem'],
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
    position: relative;
    margin-top: 3px;
    padding: 10px;
    width: 100%;
    height: 140px;
    background:transparent;
    box-sizing: border-box;
    border-bottom: 1px solid #fff;
  }
  .comments_item_head {
    width: 100px;
    height: 100px;
  }
  .comments_item_head_image {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  .comments_item_viewer_name {
    width:100%;
    height: 20px;
    text-align: center;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 12px;
    font-weight: 800;
    color: aqua;
  }
  .comments_item_viewer_name:hover {
    cursor: pointer;
  }
  .comments_content {
    position: absolute;
    padding: 10px;
    top: 0;
    left: 120px;
    width: 970px;
    height: 140px;
    color:cadetblue;
    border-left: 4px solid gray;
    text-indent: 2em;
    box-sizing: border-box;
    box-sizing: border-box;
  }
  .comments_content_text {
    width: 100%;
    height: 100px;
  }
  .comments_content_time {
    position: absolute;
    top: 110px;
    left: 700px;
    font-size: 12px;
    color:antiquewhite;
  }
</style>
