<template>
 <div class="answers_list">
   <answer-item v-for="(item, index) in answersList" :key="index" :item="item"></answer-item>
 </div>
</template>

<script>
import AnswerItem from './AnswerItem.vue'
export default {
  props: ['answersList'],
  data () {
    return {
    }
  },
  components: {
    AnswerItem
  }
}
</script>

<style>
  .answers_list {
    width: 100%;
    margin-top: 20px;
    height: auto;
    /* background: gray; */
  }
</style>
