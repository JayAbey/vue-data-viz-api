<template>
  <div class="yoobeeMap" :id="mapCanvas">
    This is the Campuses page.
    <!--<Tilly v-bind:tilly="tilly"></Tilly>-->
  </div>
</template>

<script>
// import Tilly from '../Tilly/Tilly'
// import { db } from 'firebase'

export default {
  name: 'yoobeeMap',
  props: ['name'],
  // tilly: '',

  data: function() {
    return {
      mapCanvas: this.name + "-map",
      campuses: [{
        name: "Auckland",
        latitude: -36.856864,
        longitude: 174.764417
      },
      {
        name: "Christchurch",
        latitude: -43.520430,
        longitude: 172.567893
      },
      {
        name: "Wellington",
        latitude: -41.279016,
        longitude: 174.780304
      }],
      map: null,
      bounds: null,
      markers: []
    }
  },

  // firebase: {
    // courses: {
    //   source: db.ref('courses'),
    //   cancelCallback(err) {
    //     console.log(err);
    //   }
    // }
  // },

  // components: {
  //   Tilly
  // },

  mounted: function() {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapCanvas)
    const mapCentre = this.campuses[0]
    const config = {
      zoom: 12,
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, config);

    this.campuses.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({ position, map: this.map });

      this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))
    });
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yoobeeMap {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
