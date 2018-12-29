<template>
  <div class="sowingmap">
    <div class="sowingmap_item_area" @mouseover="sowingmap_stop" @mouseleave="sowingmap_continue">
      <transition name="sowingmap_anim1">
        <img class="sowingmap_item" :src="sowingmap_img_list[index1].url" v-if="sowingmap_show">
      </transition>
      <transition name="sowingmap_anim2">
        <img class="sowingmap_item2" :src="sowingmap_img_list[index2].url" if="!sowingmap_show">
      </transition>
      <div class="sowingmap_item_info">{{sowingmap_img_list[currentIndex].info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sowingmap_show: true,
      sowingmap_interval: '',
      index1: 0,
      index2: 1,
      sowingmap_img_list: [
        {
          url: '/static/images/sowingmap/pack1/1.jpg',
          info: 'this is an information for img1'
        },
        {
          url: '/static/images/sowingmap/pack1/2.jpg',
          info: 'this is an information for img2'
        },
        {
          url: '/static/images/sowingmap/pack1/3.jpg',
          info: 'this is an information for img3'
        },
        {
          url: '/static/images/sowingmap/pack1/4.jpg',
          info: 'this is an information for img4'
        },
        {
          url: '/static/images/sowingmap/pack1/5.jpg',
          info: 'this is an information for img5'
        }
      ]
    }
  },
  computed: {
    currentIndex () {
      return this.sowingmap_show ? this.index1 : this.index2
    }
  },
  components: {},
  methods: {
    sowingmap_stop () {
      clearInterval(this.sowingmap_interval)
    },
    sowingmap_continue (e) {
      // e.target.style.transform += ' ' + scale(1.2)
      this.sowingmap_interval = setInterval(() => {
        if (this.sowingmap_show) {
          this.index1 = (this.index1 + 2) % this.sowingmap_img_list.length
          this.sowingmap_show = !this.sowingmap_show
        } else {
          this.index2 = (this.index2 + 2) % this.sowingmap_img_list.length
          this.sowingmap_show = !this.sowingmap_show
        }
      }, 5000)
    }
  },
  mounted () {
    this.sowingmap_interval = setInterval(() => {
      if (this.sowingmap_show) {
        this.index1 = (this.index1 + 2) % this.sowingmap_img_list.length
        this.sowingmap_show = !this.sowingmap_show
      } else {
        this.sowingmap_show = !this.sowingmap_show
        this.index2 = (this.index2 + 2) % this.sowingmap_img_list.length
      }
    }, 5000)
  }
}
</script>

<style>
.sowingmap {
  position: relative;
}
.sowingmap_item {
  width: 500px;
  height: 350px;
  position: absolute;
}
.sowingmap_item2 {
  width: 500px;
  height: 350px;
}
.sowingmap_item_area {
  width: 500px;
  height: 350px;
  z-index: 10;
  overflow: hidden;
}
.sowingmap_item_area:hover .sowingmap_item_info {
  transform: translateY(-100px);
}
.sowingmap_item_info {
  height: 100px;
  width: 500px;
  text-indent: 2em;
  line-height: 50px;
  background: rgba(221, 221, 180, 0.4);
  color: #080808;
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
}
.sowingmap_anim2-enter-active,
.sowingmap_anim2-leave-active,
.sowingmap_anim1-enter-active,
.sowingmap_anim1-leave-active {
  transition: opacity 1.0s;
}
.sowingmap_anim2-enter,
.sowingmap_anim2-leave-to,
.sowingmap_anim1-enter,
.sowingmap_anim1-leave-to {
  opacity: 0;
}
</style>
