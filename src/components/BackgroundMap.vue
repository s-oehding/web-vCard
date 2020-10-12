<template>
  <div id="bg-map">
    <l-map
    ref="map"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%; width: 100%;"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
      <l-tile-layer
        :url="`https://api.mapbox.com/styles/v1/${mapId}/tiles/{z}/{x}/{y}?access_token=${token}`"
        :token="token"
        :attribution="attribution"/>
      <l-marker :lat-lng="marker">
        <l-popup>
          <div @click="popupClick">
            I am a tooltip
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi. Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { L, LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'background-map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      mapId: 's-oehding/cjohmxxu70kwm2rljjzmmq5dn',
      token: 'pk.eyJ1Ijoicy1vZWhkaW5nIiwiYSI6ImNrN25lbGV5OTAwZDYzbHJzeWFnMXlkd3AifQ.mg3e3fIWvD2aKHj1t6tzaQ',
      zoom: 13,
      center: L.latLng(47.413220, -1.219482),
      url: 'mapbox://styles/s-oehding/cjohmxxu70kwm2rljjzmmq5dn',
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      marker: L.latLng(47.413220, -1.219482),
      currentZoom: 11.5,
      currentCenter: L.latLng(47.413220, -1.219482),
      showParagraph: false,
      map: null,
      mapOptions: {
        zoomSnap: 0.5
      }
    };
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate (center) {
      this.currentCenter = center;
    },
    showLongText () {
      this.showParagraph = !this.showParagraph;
    },
    popupClick () {
      alert('Popup Click!');
    }
  },
  created () {
    this.$nextTick(() => {
      this.map = this.$refs.map.mapObject
    })
  }
};
</script>

<style lang=scss>
    #bg-map {
        width: 100vw;
        height: 100vh;
    }
</style>
