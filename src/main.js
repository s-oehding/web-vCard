import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import VueSimpleSVG from 'vue-simple-svg'
import VueMapbox from 'vue-mapbox'
import Mapbox from 'mapbox-gl'

Vue.use(VueMapbox, { mapboxgl: Mapbox })

Vue.use(VueSimpleSVG)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')