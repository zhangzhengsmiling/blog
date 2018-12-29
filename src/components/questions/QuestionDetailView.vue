<template>
 <div class="ques_detial_view">
 <div class="ques_detail_btn_back" @click="backToQuesList"><span class="icon-arrow-left2"></span></div>
   <div class="ques_info">
     <div class="ques_detail_desc">
       <div class="ques_detail_hide_scroll">
         {{currentQuestion.questionText}}
       </div>
     </div>
      <div class="ques_detail_questioner" :title="currentQuestion.questioner">提问者：{{currentQuestion.questioner}}</div>
      <div class="ques_detail_classify">{{currentQuestion.classify}}</div>
      <div class="ques_detail_question_time">提问时间: {{currentQuestion.questionTime}}</div>
   </div>
   <answers-list :answersList="currentQuestion.answersList"></answers-list>
 </div>
</template>

<script>
import PubSub from 'pubsub-js'
import AnswersList from './AnswersList.vue'
export default {
  props: ['currentQuestion'],
  data () {
    return {
      AnswersList
    }
  },
  components: {
    AnswersList
  },
  methods: {
    backToQuesList () {
      PubSub.publish('isShowQuesDetail', {isShowQuesDetail: false, questionId: ''})
    }
  }
}
</script>

<style>
  .ques_detial_view {
    /* width: 1100px; */
    width: 1100px;
    margin:20px 13%;
    /* margin: 20px auto; */
    height: auto;
    border: 1px solid lightblue;
    padding: 20px;
    box-sizing: border-box;
    /* background: red; */
    position: relative;
    /* opacity: 0.3; */
  }
  .ques_info {
    margin-top: 10px;
    width: 100%;
    height: 300px;
    border: 1px solid green;
    /* background: green; */
    /* color: aqua; */
  }
  .ques_detail_btn_back {
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
  .ques_detail_btn_back:hover {
    background: transparent;
    cursor: pointer;
    color: lightpink;
  }
  .ques_detail_desc {
    width: 100%;
    /* background: blue; */
    padding: 10px;
    height: 200px;
    color: aliceblue;
    font-weight: 800;
    font-size: 20px;
    box-sizing: border-box;
    border: 1px solid rgb(23, 73, 121);
    box-sizing: border-box;
    overflow: hidden;
    /* text-indent: 2em; */
  }
  .ques_detail_hide_scroll {
    width: 1070px;
    height: 100%;
    overflow: auto;
  }

  .ques_detail_questioner {
    position: absolute;
    top: 280px;
    left: 40px;
    /* margin: 10px 20px; */
    width: 200px;
    height: 40px;
    line-height: 40px;
    /* background: gray; */
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: bisque;
  }
  .ques_detail_questioner:hover {
    cursor: default;
  }
  .ques_detail_classify {
    position: absolute;
    top: 280px;
    left: 260px;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: aqua;
    font-weight: 800;
    font-size: 18px;
    /* background: orange; */
  }
  .ques_detail_question_time {
    position: absolute;
    top: 320px;
    left: 800px;
    width: 240px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: rgb(100, 100, 84);
  }

</style>
