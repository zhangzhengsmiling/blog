<template>
 <div class="questios_view">
   <div class="ques_head">
     <div :class="{'ques_solved': true, 'current': isShowSolved}" @click="showSolvedQuestions">已解决</div>
     <div :class="{'ques_unsolved': true, 'current': !isShowSolved}" @click="showUnsolvedQuestions">待解决</div>
   </div>
   <questions-list class="questions_questions_list" :questionsList="questionsList.filter(question => isShowSolved === question.isSolved)"></questions-list>
 </div>
</template>

<script>
import QuestionsList from './QuestionsList.vue'
export default {
  props: ['questionsList'],
  data () {
    return {
      isShowSolved: true
    }
  },
  components: {
    QuestionsList
  },
  methods: {
    showSolvedQuestions () {
      this.isShowSolved = true
    },
    showUnsolvedQuestions () {
      this.isShowSolved = false
    }
  }
}
</script>

<style>
  .questios_view {
    /* width: 1100px; */
    width: 1100px;
    margin:20px 13%;
    /* margin: 20px auto; */
    height: auto;
    border: 1px solid lightblue;
    padding: 20px;
    box-sizing: border-box;
  }
  .ques_head {
    height: 40px;
    /* background: blue; */
    width: 160px;
    box-sizing: border-box;
  }
  .ques_head>div {
    height: 100%;
    width: 50%;
    float: left;
    line-height: 40px;
    text-align: center;
    font-weight: 800;
    color: #fff;
    text-shadow: lightblue 0px 0px 10px;
  }
  .ques_head>div:hover {
    border-bottom: 3px solid #fff;
    cursor: pointer;
  }
  .questions_questions_list {
    border-top: 1px solid #fff;
    margin-top: 10px;
  }
  .current {
    border-bottom: 3px solid #fff;
  }
</style>
