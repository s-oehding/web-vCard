<template>
    <div id="map-wrapper">
        <mgl-map
            ref="map"
            :accessToken="accessToken"
            :mapStyle.sync="mapStyle"
            :center="options.center"
            :zoom="options.zoom"
            style="height:50vh"
            @:load="init($event)"
        >
        <button
          @click="flyToNextLocation()">
          Fly
        </button>
        </mgl-map>
        
    </div>
</template>

<script>
import { MglMap, MglNavigationControl, MglGeolocateControl } from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl
  },
  data() {
    return {
      accessToken: "pk.eyJ1Ijoicy1vZWhkaW5nIiwiYSI6ImNqb2libnh2NjA3aDMzcW9qZXFxN3M2cGEifQ.gd8zU5n7g7cCkMxhvkwePw",
      mapStyle: "mapbox://styles/s-oehding/cjok1jvhz0a8t2so3yik2gth4",
      map: null,
      options: {
        center: [0, 0],
        zoom: 0
      },
      waypoints: [
        {location: [13.40, 52.52]},
        {location: [9.99, 53.551085]}
      ]
    }
  },
  mounted() {
  },
  methods: {
    init: (payload) => {
      this.map = payload.map
      payload.map.addSource("dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.terrain-rgb"
      })
      payload.map.addLayer({
        id: "hillshading",
        source: "dem",
        type: "hillshade"
      })
      payload.map.flyTo({
        center: this.waypoints[0].location,
        zoom: 9,
        bearing: 0,
        pitch: 60,
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {
            return t;
        }
        });
    },
    flyToNextLocation: function () {
      this.$refs.map.flyTo({
        center: this.waypoints[0].location,
        zoom: 9,
        bearing: 0,
        pitch: 60,
        speed: 0.2, // make the flying slow
        curve: 1, // change the speed at which it zooms out
        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function (t) {
            return t;
        }
    });

    }
  }
};
</script>