<template>
 <div class="blog_detail_view">
   <div class="blog_detail_view_msg">
     <blog-msg></blog-msg>
   </div>
   <blog-content></blog-content>
   <comments-list></comments-list>
 </div>
</template>
<script>
import BlogMsg from './BlogMsg.vue'
import BlogContent from './BlogContent.vue'
import CommentsList from '../comments/CommentsList.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    BlogMsg,
    BlogContent,
    CommentsList
  }
}
</script>

<style>
  .blog_detail_view_msg{
    /* border: 1px solid blue; */
    box-sizing: border-box;
  }
</style>
