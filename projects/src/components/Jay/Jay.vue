<template>
  <div>
    <div class="yoobeeMap" :id="mapCanvas">
      <!--<div id="infoWindowContent">
        </div>-->
    </div>

    <!--<Tilly v-bind:tilly="tilly"></Tilly>-->
    <!--<div class="click" v-on:click="getCourses">CLICK ME {{ course }}-->
    <!--<div v-for="campus in campuses">{{ campus.Name }}</div>-->
    <!--</div>-->
  </div>
</template>

<script>
// import Tilly from '../Tilly/Tilly'
import { db } from '../../firebase'

export default {
  name: 'yoobeeMap',
  props: ['name'],
  // tilly: '',

  data: function() {
    return {
      mapCanvas: this.name + "-map",

      // campuses: [{
      //   name: "Auckland",
      //   latitude: -36.856864,
      //   longitude: 174.764417
      // },
      // {
      //   name: "Christchurch",
      //   latitude: -43.520430,
      //   longitude: 172.567893
      // },
      // {
      //   name: "Wellington",
      //   latitude: -41.279016,
      //   longitude: 174.780304
      // }],

      map: null,
      bounds: null,
      markers: [],
      infowindow: null,
      course: ''
    }
  },

  firebase: {
    locations: {
      source: db.ref('Campuses'),
      cancelCallback(err) {
        console.log(err);
      }
    }
  },

  // components: {
  //   Tilly
  // },
  mounted: function() {
    // const infoWindowContent = document.getElementById('infoWindowContent')
    this.bounds = new google.maps.LatLngBounds();
    // this.infowindow = new google.maps.InfoWindow({
    //   content: this.locations.Description
    // });
    const element = document.getElementById(this.mapCanvas)
    // const mapCentre = this.campuses[0]
    const config = {
      zoom: 12,
      // center: new google.maps.LatLng(mapCentre.Latitude, mapCentre.Longitude),
      center: new google.maps.LatLng(db.ref('Campuses').Latitude, db.ref('Campuses').Longitude),
      styles: [
        {
          "featureType": "all",
          "elementType": "all",
          "stylers": [
            {
              "hue": "#ff6800"
            },
            {
              "saturation": "20"
            },
            {
              "lightness": "-8"
            },
            {
              "gamma": "1.00"
            },
            {
              "weight": "1.12"
            }
          ]
        }
      ]
    }
    this.map = new google.maps.Map(element, config);

    // this.campuses.forEach((coord) => {
    db.ref('Campuses').forEach((coord) => {
      const position = new google.maps.LatLng(coord.Latitude, coord.Longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map,
      });

      this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))
    });

    google.maps.event.addListener(marker, 'click', () => {
      infowindow.open(this.map, marker);
    });

  },

  methods: {
    // getCourses: function(evt, markers) {
    //   for (var i = 0; i < this.locations.length; i++) {
    //     if (this.locations.Name === evt.target.value) {
    //       this.course = this.locations.Programmes[i];
    //     }
    //   }
    // }

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

.click {
  margin-top: 20%;
  color: red;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
