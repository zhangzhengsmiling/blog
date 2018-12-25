<template>
  <div id="app">
    <top-head></top-head>
    <!-- <top-navigation></top-navigation> -->
    <right-login></right-login>
    <left-navigation class="app_left_nav"></left-navigation>
    <blog-msg></blog-msg>
     <!-- <blog-list-view class="app_blog_list_view"></blog-list-view> -->
  </div>
</template>
<script>
import TopHead from './components/page/TopHead.vue'
import TopNavigation from './components/page/TopNavigation.vue'
import MapView from './components/decorations/MapView.vue'
import LeftNavigation from './components/page/LeftNavigation.vue'
import BlogListView from './components/blogs/BlogListView.vue'
import RightLogin from './components/page/RightLogin.vue'

import BlogMsg from './components/blogs/BlogMsg.vue'
// import BlogList from './components/blogs/BlogList.vue'
// import SowingMap from './components/decorations/SowingMap.vue'
// import RotateMap from './components/decorations/RotateMap.vue'
import Test from './components/Test.vue'
export default {
  name: 'App',
  components: {
    TopHead,
    TopNavigation,
    MapView,
    LeftNavigation,
    BlogListView,
    RightLogin,
    Test,
    BlogMsg
    // LineStar
    // BlogList
    // SowingMap,
    // RotateMap
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
  .app_left_nav {
    position: absolute;
    left: 60px;
    top: 280px;
  }
</style>
