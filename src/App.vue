<template>
  <div id="app">
    <top-head></top-head>
    <right-login class="app_right_login"></right-login>
    <router-view></router-view>
    <div class="left_navigation">
      <router-link to="/blog" tag="div" :class="{'left_nav_blog': true, 'choosed': isBlog}" @click.native="showBlogView">
        博客
      </router-link>
      <router-link to="/questions" tag="div" :class="{'left_nav_ques': true, 'choosed': !isBlog}" @click.native="showQuestionsView">
        问答
      </router-link>
    </div>
    <!-- <left-navigation class="left-navigation"></left-navigation> -->
    <footer class="app_footer">this is footer</footer>
  </div>
</template>
<script>
import TopHead from './components/page/TopHead.vue'
// import TopNavigation from './components/page/TopNavigation.vue'
// import MapView from './components/decorations/MapView.vue'
import LeftNavigation from './components/page/LeftNavigation.vue'
// import BlogListView from './components/blogs/BlogListView.vue'
import RightLogin from './components/page/RightLogin.vue'
// import BlogDetailView from './components/blogs/BlogDetailView.vue'
// import BlogList from './components/blogs/BlogList.vue'
// import SowingMap from './components/decorations/SowingMap.vue'
// import RotateMap from './components/decorations/RotateMap.vue'
import Blog from './components/blogs/Blog.vue'
export default {
  name: 'App',
  components: {
    TopHead,
    // TopNavigation,
    // MapView,
    LeftNavigation,
    // BlogListView,
    RightLogin,
    Blog
    // BlogDetailView
    // LineStar
    // BlogList
    // SowingMap,
    // RotateMap
  },
  data () {
    return {

    }
  },
  computed: {
    isBlog () {
      return this.$route.fullPath === '/blog'
    }
  },
  methods: {
    showBlogView () {
      console.log(this.$route.fullPath)
      if (!this.isBlog) {
        this.isBlog = true
      }
    },
    showQuestionsView () {
      if (this.isBlog) {
        this.isBlog = false
      }
    }
  }
}
</script>

<style>
  a {
    text-decoration: none;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  .app_right_login {
    position: absolute;
    top: 250px;
    left: 1350px;
  }
  .app_footer {
    width: 100%;
    height: 400px;
    /* background: yellow; */
    border: 1px solid yellow;
    box-sizing: border-box;
  }
  .left_navigation {
    position: fixed;
    top: 200px;
    left: 60px;;
    width: 60px;
    height: 120px;
    z-index: 20;
    /* background:#f40; */
  }
  .left_nav_blog {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 4px solid green;
    border-bottom:2px solid green;
    box-sizing: border-box;
    color: bisque;
    font-weight: 800;
  }

  .left_nav_ques {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 4px solid green;
    border-top:2px solid green;
    box-sizing: border-box;
    color: bisque;
    font-weight: 800;
  }
  .left_navigation div:hover {
    background: yellowgreen;
    color: #080808;
    cursor: pointer;
  }
  .choosed{
    background: #fff;
    color: #080808;
  }
  @media screen and (max-width: 1000px) {
    .left_navigation {
      display: none;
    }
  }
</style>
