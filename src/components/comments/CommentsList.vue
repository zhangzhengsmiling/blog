<template>
 <div class="comments_list">
   <comments-item></comments-item>
 </div>
</template>

<script>
import CommentsItem from './CommentsItem.vue'
export default {
  data () {
    return {

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
    height: 400px;
    border:1px solid orange;
    box-sizing: border-box;
  }
</style>
