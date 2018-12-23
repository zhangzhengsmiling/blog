<template>
 <div class="rotate_map">
     <img class="rotatemap_image" :src="rotateImage.url" alt="">
     <div class="rotatemap_inner">{{rotateImage.info}}</div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      rotateImage: {
        url: '/static/images/rotatemap/pack1/1.jpg',
        info: 'this is a string information for rotate map'
      }
    }
  },
  components: {

  }
}
</script>

<style>
    .rotate_map {
        width: 400px;
        height: 170px;
        perspective: 1000px;
    }
    .rotatemap_image {
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        position: absolute;
    }
    .rotatemap_inner {
        width: 100%;
        height: 100%;
        transform: rotateY(270deg);
        transition: all 0.5s linear;
        font-size: 20px;
        line-height: 40px;
        padding: 0 10px;
        color: transparent;
        background: transparent;
        box-sizing: border-box;
    }
    .rotate_map:hover .rotatemap_image {
        transform: rotateY(90deg);
    }
    .rotate_map:hover .rotatemap_inner {
        color: bisque;
        transform: rotateY(360deg);
        background: rgba(100 , 100 , 84 , .5);
    }
</style>
