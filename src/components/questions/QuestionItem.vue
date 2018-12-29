<template>
 <div class="ques_item" @click="showQuesDetail">
   <div class="ques">{{question.questionText}}</div>
   <div class="questioner_name" :title="question.questioner">{{question.questioner}}</div>
   <div class="ques_classify">{{question.classify}}</div>
   <div class="question_time">提问时间: yyyy年mm月dd日 hh:mm</div>
   <div class="answer_count">回答数：{{question.answersCount}}</div>
 </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  props: ['question'],
  data () {
    return {

    }
  },
  methods: {
    showQuesDetail () {
      PubSub.publish('isShowQuesDetail', {isShowQuesDetail: true, questionId: this.question.questionId})
    }
  },
  components: {

  }
}
</script>

<style>
  .ques_item {
    position: relative;
    width: 1000px;
    margin: 8px auto;
    height: 120px;
    border: 1px solid #fff;
    padding: 10px 5px;
    box-sizing: border-box;
  }
  .ques_item:hover {
    border: 3px solid transparent;
    box-shadow: rgb(171, 71, 211) 0px 0px 20px;
    width: 994px;
    animation: shadow-anim 1s alternate linear infinite;
    cursor: pointer;
  }
  @keyframes shadow-anim{
    0% {
      box-shadow: rgb(171, 71, 211) 0px 0px 20px;
    }
    100% {
      box-shadow: rgb(171, 71, 211) 0px 0px 1px;
    }
  }
  .ques {
    width: 600px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    font-weight: 900;
    font-family: 'Times New Roman', Times, serif;
    color: #fff;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .questioner_name {
    margin-top: 10px;
    margin-left: 20px;
    width: 120px;
    height: 40px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-style: italic;
    font-size: 16px;
    color: rgb(67, 159, 172);
    line-height: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .questioner_name:hover {
    cursor: default;
  }
  .ques_classify {
    position: absolute;
    top: 70px;
    left: 180px;
    width: 120px;
    height: 40px;
    color: rgb(123, 75, 179);
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 40px;
  }
  .answer_count {
    position: absolute;
    top: 40px;
    width: 120px;
    left: 800px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background: rgb(12, 83, 12);
  }
  .question_time {
    position: absolute;
    top: 70px;
    left: 340px;
    color: #fff;
    width: 240px;
    height: 40px;
    line-height: 40px;
    /* background: red; */
    font-size: 14px;
  }
</style>
