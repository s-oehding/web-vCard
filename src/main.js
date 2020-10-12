import Vue, { createApp } from 'vue';
import App from './App.vue'
import Buefy from 'buefy'
import VueSimpleSVG from 'vue-simple-svg'
import VueMapbox from 'vue-mapbox'
import Mapbox from 'mapbox-gl'

Vue.use(VueMapbox, { mapboxgl: Mapbox })

Vue.use(VueSimpleSVG)
Vue.use(Buefy)

createApp(App).mount('#app')