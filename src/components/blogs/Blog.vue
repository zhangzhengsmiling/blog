<template>
 <div class="blog">
    <top-navigation v-show="isShowList"></top-navigation>
    <blog-detail-view class="blog_detail_view" v-show="!isShowList"></blog-detail-view>
    <blog-list-view class="blog_list_view" v-show="isShowList"></blog-list-view>
 </div>
</template>

<script>
import PubSub from 'pubsub-js'
import TopNavigation from '../page/TopNavigation.vue'
import BlogDetailView from './BlogDetailView.vue'
import BlogListView from './BlogListView.vue'
export default {
  data () {
    return {
      isShowList: true,
      currentArticleId: ''
    }
  },
  components: {
    TopNavigation,
    BlogDetailView,
    BlogListView
  },
  mounted () {
    PubSub.subscribe('isShowList', (msg, data) => {
      this.isShowList = data.isShowList
      this.currentArticleId = data.articleId
    })
  }
}
</script>

<style>
  .blog_list_view {
    width: 70%;
    height: 100%;
    margin-top: 10px;
    margin-left: 13%;
  }
  .blog_detail_view {
    width: 1100px;
    height: 100%;
    margin-top: 10px;
    margin-left: 13%;
    border: 1px solid red;
  }
</style>
