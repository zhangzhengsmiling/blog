<template>
 <div class="ques_list">
   <question-item v-for="(question, index) in questionsList" :question="question" :key="index"></question-item>
 </div>
</template>

<script>
import QuestionItem from './QuestionItem.vue'
export default {
  props: ['questionsList'],
  data () {
    return {

    }
  },
  components: {
    QuestionItem
  }
}
</script>

<style>
 .ques_list {
   width: 100%;
   /* background: rgba(100, 100, 84, .4); */
 }
</style>
