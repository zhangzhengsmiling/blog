<template>
 <div class="mapview">
   <sowing-map class="mapview_sowingmap"></sowing-map>
   <rotate-map class="mapview_rotatemap1"></rotate-map>
   <rotate-map class="mapview_rotatemap2"></rotate-map>
 </div>
</template>

<script>
import RotateMap from './RotateMap.vue'
import SowingMap from './SowingMap.vue'
export default {
  data () {
    return {
      mapviewImages: [
        // {sowingmapImages:[]}
      ]
    }
  },
  components: {
    RotateMap,
    SowingMap
  }
}
</script>

<style>
  .mapview {
    position: relative;
    margin: 20px auto;
    width: 1050px;
    height: 350px;
    /* background:rebeccapurple; */
  }
  .mapview_sowingmap {
    margin-left: 20px;
  }
  .mapview_rotatemap1 {
    position: absolute;
    left: 600px;
    top: 0px;
  }
  .mapview_rotatemap2 {
    position: absolute;
    left: 600px;
    top: 180px;
  }
</style>
