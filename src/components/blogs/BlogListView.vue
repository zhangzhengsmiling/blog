<template>
 <div>
   <line-star></line-star>
  <map-view></map-view>
  <blog-list></blog-list>
 </div>
</template>

<script>
import BlogList from './BlogList.vue'
import MapView from '../decorations/MapView.vue'
import LineStar from '../decorations/LineStar.vue'
export default {
  data () {
    return {
    }
  },
  components: {
    BlogList,
    MapView,
    LineStar
  }
}
</script>

<style>
</style>
