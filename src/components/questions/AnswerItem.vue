<template>
 <div class="answer_item">
  <div class="answer_item_left">
      <div class="answer_item_answer">
        <img class="answer_head_image" :src="item.answerUserHeadUrl" alt="">
        <div class="answer_name" :title="item.answerUser">{{item.answerUser}}</div>
        <div class="answer_time">发布于{{item.answerTime}}</div>
      </div>
  </div>
  <div class="answer_item_rigth">
    <div class="answer_text">
      <div class="scroll_hide">
        {{item.answerText}}
      </div>
    </div>
  </div>
 </div>
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
  .answer_item {
    position: relative;
    width: 100%;
    height: 300px;
    border: 2px solid springgreen;
    box-sizing: border-box;
    /* background: blue; */
  }
  .answer_item_answer {
    position: absolute;
    /* left: 20px; */
    top: 60px;
    margin-left: 40px;
    width: 100px;
    /* background: green; */
  }
  .answer_item_left {
    height: 100%;
    width: 180px;
    border-right: 3px solid rgb(39, 101, 126);
    box-sizing: border-box;
    /* background: yellow; */
  }
  .answer_head_image {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  .answer_name {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    color: aqua;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .answer_time {
    position: absolute;
    line-height: 40px;
    text-align: right;
    color: bisque;
    top: 180px;
    left: -50px;
    width: 180px;
    font-size: 12px;
    height: 40px;
    font-family:Georgia, 'Times New Roman', Times, serif;
  }
  .answer_item_rigth {
    padding: 10px;
    width: 873px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 180px;
    box-sizing: border-box;
  }
  .answer_text {
    width: 100%;
    height: 100%;
    color: azure;
    font-size: 18px;
    overflow: hidden;
  }
  .scroll_hide {
    overflow: auto;
    height: 100%;
    width: 870px;
  }
</style>
