<template>
 <div class="questions">
   <questions-view v-show="!isShowQuesDetail" :questionsList='questionsList'></questions-view>
   <question-detail-view v-show="isShowQuesDetail" :currentQuestion="currentQuestion"></question-detail-view>
 </div>
</template>

<script>
import PubSub from 'pubsub-js'
import QuestionsView from './QuestionsView.vue'
import QuestionDetailView from './QuestionDetailView.vue'
export default {
  data () {
    return {
      isShowQuesDetail: false,
      currentQuestionId: '',
      questionsList: [
        {
          questionId: 1, questioner: 'username1', questionText: '计算机网络能过吗？', answersCount: 100, classify: '计算机网络', isSolved: false, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: '中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些中文字符应该会稍微好一些', answerTime: 'yyyy-mm-dd hh:mm'
            },
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            },
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            },
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            },
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 2, questioner: '浙江科技学院某算机专业', questionText: '计算机网络还没开始复习怎么办？', answersCount: 50, classify: '计算机网络', isSolved: false, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 3, questioner: '浙科老斯基', questionText: 'dfs与bfs是什么？', answersCount: 50, classify: '计算机网络', isSolved: false, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 4, questioner: '浙科老斯基', questionText: '前端如何学习？', answersCount: 50, classify: '计算机', isSolved: true, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 5, questioner: '浙科老斯基', questionText: '前端如何学习？', answersCount: 50, classify: '计算机', isSolved: true, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 6, questioner: '工大老斯基', questionText: '区块链分布式账本该怎么创建？', answersCount: 50, classify: '区块链', isSolved: true, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 7, questioner: '老斯基', questionText: '前端如何学习？', answersCount: 50, classify: '计算机', isSolved: true, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 8, questioner: '浙科老斯基', questionText: '前端如何学习？', answersCount: 50, classify: '计算机', isSolved: true, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 9, questioner: '浙江科技学院某算机专业', questionText: '计算机网络还没开始复习怎么办？', answersCount: 50, classify: '计算机网络', isSolved: false, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 10, questioner: '浙江科技学院某算机专业', questionText: '计算机网络还没开始复习怎么办？', answersCount: 50, classify: '计算机网络', isSolved: false, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 11, questioner: '浙江科技学院某算机专业', questionText: '计算机网络还没开始复习怎么办？', answersCount: 50, classify: '计算机网络', isSolved: false, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 12, questioner: '浙江科技学院某算机专业', questionText: '计算机网络还没开始复习怎么办？', answersCount: 50, classify: '计算机网络', isSolved: false, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        },
        {
          questionId: 13, questioner: '浙江科技学院某算机专业', questionText: '计算机网络还没开始复习怎么办？', answersCount: 50, classify: '计算机网络', isSolved: false, questionTime: 'yyyy-mm-dd hh:mm',
          answersList: [
            {
              answerUser: 'zhang', answerUserHeadUrl: '/static/images/head/head4.jpg', answerText: 'this is an answer text', answerTime: 'yyyy-mm-dd hh:mm'
            }
          ]
        }
      ]
    }
  },
  computed: {
    currentQuestion () {
      console.log(this.questionsList[this.currentQuestionId])
      return this.currentQuestionId === '' ? {} : this.questionsList
        .find((question) => question.questionId === this.currentQuestionId)
    }
  },
  components: {
    QuestionsView,
    QuestionDetailView
  },
  mounted () {
    PubSub.subscribe('isShowQuesDetail', (msg, info) => {
      this.isShowQuesDetail = info.isShowQuesDetail
      this.currentQuestionId = info.questionId
    })
  }
}
</script>

<style>

</style>
