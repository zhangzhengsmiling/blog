<template>
<ul class="blog_list">
  <blog-item v-for="(item, index) in article_list" :key='index' :item='item'></blog-item>
</ul>
</template>

<script>
import BlogItem from './BlogItem.vue'
export default {
  data () {
    return {
      article_list: [
        {articleId: 1, title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, viewers: 100, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 2, title: 'nodjs搭建微链', author: {'accountName': 'author', headUrl: '/static/images/head/head2.jpg'}, viewers: 100, commentsCount: 18, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 3, title: 'BitCoin、以太坊比较', author: {'accountName': '哼，不告诉你', headUrl: '/static/images/head/head3.jpg'}, viewers: 100, commentsCount: 18, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 4, title: '你好，区块链', author: {'accountName': '匿名', headUrl: '/static/images/head/head2.jpg'}, viewers: 100, commentsCount: 20, stars: 120, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 5, title: 'teosorflow零基础入门', author: {'accountName': 'hahahha', headUrl: '/static/images/head/head1.jpg'}, viewers: 100, commentsCount: 30, stars: 400, articleUrl: 'articleUrl', classify: '人工智能', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 6, title: '卷积神经网络详解', author: {'accountName': '？？？', headUrl: '/static/images/head/head5.jpg'}, viewers: 100, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '人工智能', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 7, title: 'pyhton与人工智能', author: {'accountName': '不想起名字', headUrl: '/static/images/head/head4.jpg'}, viewers: 100, commentsCount: 38, stars: 150, articleUrl: 'articleUrl', classify: '人工智能', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 8, title: '智能合约算法', author: {'accountName': '无所谓了', headUrl: '/static/images/head/head3.jpg'}, viewers: 100, commentsCount: 5, stars: 108, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 9, title: '分布式计算', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, viewers: 100, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '后端', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 10, title: 'java面向多线程高并发编程', author: {'accountName': '，，，', headUrl: '/static/images/head/head2.jpg'}, viewers: 100, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 11, title: '非关系型数据库初见', author: {'accountName': '老实人', headUrl: '/static/images/head/head3.jpg'}, viewers: 100, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '数据库', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 12, title: 'MVVM框架', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, viewers: 100, commentsCount: 120, stars: 180, articleUrl: 'articleUrl', classify: '前端', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 13, title: '尤雨溪重构，Vue3.0介绍', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, viewers: 100, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '前端', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 14, title: 'React性能优化', author: {'accountName': '什么鬼', headUrl: '/static/images/head/head1.jpg'}, viewers: 100, commentsCount: 36, stars: 190, articleUrl: 'articleUrl', classify: '前端', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 15, title: 'MongoDB', author: {'accountName': '起不了名字', headUrl: '/static/images/head/head5.jpg'}, viewers: 100, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '数据库', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 16, title: '区块链与版权保护', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, viewers: 100, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {articleId: 17, title: 'Virtual DOM', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head3.jpg'}, viewers: 100, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '前端', publishTime: 'yyyy-mm-dd hh:mm:ss'}
      ]
    }
  },
  components: {
    BlogItem
  }
}
</script>

<style>
  .blog_list_item {
      height:120px;
      line-height: 40px;
      border: 1px solid green;
  }
</style>
