<template>
 <div class="comments_list">
   <comments-item v-for="(commentItem, index) in commentsList" :key="index" :commentItem="commentItem"></comments-item>
 </div>
</template>

<script>
import CommentsItem from './CommentsItem.vue'
export default {
  data () {
    return {
      commentsList: [
        {username: 'user1', headUrl: '/static/images/head/head1.jpg', commentText: '这是一个评论区文本，总是喜欢说一些废话，好了，下面是废话的内容：你好，我很喜欢你的文章，虽然我一点也没看懂，当我就是很喜欢，支持原创作者加油，好了，写满一行，开溜', commentTime: 'yyyy-mm-dd hh:mm:ss'},
        {username: 'zhang', headUrl: '/static/images/head/head2.jpg', commentText: '这是一个评论区文本，总是喜欢说一些废话，好了，下面是废话的内容：你好，我很喜欢你的文章，虽然我一点也没看懂，当我就是很喜欢，支持原创作者加油，好了，写满一行，开溜', commentTime: 'yyyy-mm-dd hh:mm:ss'},
        {username: 'hello', headUrl: '/static/images/head/head3.jpg', commentText: '这是一个评论区文本，总是喜欢说一些废话，好了，下面是废话的内容：你好，我很喜欢你的文章，虽然我一点也没看懂，当我就是很喜欢，支持原创作者加油，好了，写满一行，开溜', commentTime: 'yyyy-mm-dd hh:mm:ss'},
        {username: '长名字测试测试测试测试测试测试测试测试', headUrl: '/static/images/head/head2.jpg', commentText: '这是一个评论区文本，总是喜欢说一些废话，好了，下面是废话的内容：你好，我很喜欢你的文章，虽然我一点也没看懂，当我就是很喜欢，支持原创作者加油，好了，写满一行，开溜', commentTime: 'yyyy-mm-dd hh:mm:ss'},
        {username: 'user1', headUrl: '/static/images/head/head1.jpg', commentText: '这是一个评论区文本，总是喜欢说一些废话，好了，下面是废话的内容：你好，我很喜欢你的文章，虽然我一点也没看懂，当我就是很喜欢，支持原创作者加油，好了，写满一行，开溜', commentTime: 'yyyy-mm-dd hh:mm:ss'},
        {username: 'user1', headUrl: '/static/images/head/head4.jpg', commentText: '这是一个评论区文本，总是喜欢说一些废话，好了，下面是废话的内容：你好，我很喜欢你的文章，虽然我一点也没看懂，当我就是很喜欢，支持原创作者加油，好了，写满一行，开溜', commentTime: 'yyyy-mm-dd hh:mm:ss'},
        {username: 'user1', headUrl: '/static/images/head/head3.jpg', commentText: '这是一个评论区文本，总是喜欢说一些废话，好了，下面是废话的内容：你好，我很喜欢你的文章，虽然我一点也没看懂，当我就是很喜欢，支持原创作者加油，好了，写满一行，开溜', commentTime: 'yyyy-mm-dd hh:mm:ss'}
      ]
    }
  },
  components: {
    CommentsItem
  }
}
</script>

<style>
  .comments_list {
    margin-top: 5px;
    width: 100%;
    height: auto;
    border:1px solid orange;
    box-sizing: border-box;
  }
</style>
