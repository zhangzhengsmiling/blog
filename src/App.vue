<template>
  <div id="app">
    <top-head></top-head>
    <top-navigation v-show="isShowList"></top-navigation>
    <right-login class="app_right_login"></right-login>
    <left-navigation class="app_left_nav"></left-navigation>
    <blog-detail-view class="app_blog_detail_view" v-show="!isShowList"></blog-detail-view>
    <blog-list-view class="app_blog_list_view" v-show="isShowList"></blog-list-view>
    <footer class="app_footer">this is footer</footer>
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
import TopHead from './components/page/TopHead.vue'
import TopNavigation from './components/page/TopNavigation.vue'
import MapView from './components/decorations/MapView.vue'
import LeftNavigation from './components/page/LeftNavigation.vue'
import BlogListView from './components/blogs/BlogListView.vue'
import RightLogin from './components/page/RightLogin.vue'

import BlogDetailView from './components/blogs/BlogDetailView.vue'
// import BlogList from './components/blogs/BlogList.vue'
// import SowingMap from './components/decorations/SowingMap.vue'
// import RotateMap from './components/decorations/RotateMap.vue'
export default {
  name: 'App',
  components: {
    TopHead,
    TopNavigation,
    MapView,
    LeftNavigation,
    BlogListView,
    RightLogin,
    BlogDetailView
    // LineStar
    // BlogList
    // SowingMap,
    // RotateMap
  },
  data () {
    return {
      isShowList: true,
      currentArticleId: ''
    }
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
  .app_blog_list_view {
    width: 70%;
    height: 100%;
    margin-top: 10px;
    margin-left: 13%;
  }
  .app_blog_detail_view {
    width: 1100px;
    height: 100%;
    margin-top: 10px;
    margin-left: 13%;
    border: 1px solid red;
  }
  .app_left_nav {
    position: absolute;
    left: 60px;
    top: 280px;
  }
  .app_right_login {
    position: absolute;
    top: 250px;
    left: 1350px;
  }
  .app_footer {
    width: 100%;
    height: 400px;
    background: yellow;
  }
  @media screen and (max-width: 1000px) {
    .app_left_nav {
      display: none;
    }
  }
</style>
