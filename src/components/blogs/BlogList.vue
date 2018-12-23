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
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: 'nodjs搭建微链', author: {'accountName': 'author', headUrl: '/static/images/head/head2.jpg'}, commentsCount: 18, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: 'BitCoin、以太坊比较', author: {'accountName': '哼，不告诉你', headUrl: '/static/images/head/head3.jpg'}, commentsCount: 18, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '你好，区块链', author: {'accountName': '匿名', headUrl: '/static/images/head/head2.jpg'}, commentsCount: 20, stars: 120, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: 'teosorflow零基础入门', author: {'accountName': 'hahahha', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 30, stars: 400, articleUrl: 'articleUrl', classify: '人工智能', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '卷积神经网络详解', author: {'accountName': '？？？', headUrl: '/static/images/head/head5.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '人工智能', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: 'pyhton与人工智能', author: {'accountName': '不想起名字', headUrl: '/static/images/head/head4.jpg'}, commentsCount: 38, stars: 150, articleUrl: 'articleUrl', classify: '人工智能', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '智能合约算法', author: {'accountName': '无所谓了', headUrl: '/static/images/head/head3.jpg'}, commentsCount: 5, stars: 108, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '分布式计算', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '后端', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: 'java面向多线程高并发编程', author: {'accountName': '，，，', headUrl: '/static/images/head/head2.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '非关系型数据库初见', author: {'accountName': '老实人', headUrl: '/static/images/head/head3.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '数据库', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: 'MVVM框架', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 120, stars: 180, articleUrl: 'articleUrl', classify: '前端', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '尤雨溪重构，Vue3.0介绍', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '前端', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: 'React性能优化', author: {'accountName': '什么鬼', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 36, stars: 190, articleUrl: 'articleUrl', classify: '前端', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: 'MongoDB', author: {'accountName': '起不了名字', headUrl: '/static/images/head/head5.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '数据库', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链与版权保护', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: 'Virtual DOM', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head3.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '前端', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'},
        {title: '区块链技术详解', author: {'accountName': '我是作者一号，有一个超长的名字呢！！！', headUrl: '/static/images/head/head1.jpg'}, commentsCount: 20, stars: 100, articleUrl: 'articleUrl', classify: '区块链', publishTime: 'yyyy-mm-dd hh:mm:ss'}
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
