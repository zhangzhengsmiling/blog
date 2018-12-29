import Vue from 'vue'
import Router from 'vue-router'
import Questions from '../components/questions/Questions.vue'
import Blog from '../components/blogs/Blog.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/blog',
      component: Blog
    },
    {
      path: '/questions',
      component: Questions
    },
    {
      path: '/',
      redirect: '/blog'
    }
  ]
})
