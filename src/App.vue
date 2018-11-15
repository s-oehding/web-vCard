<template>
  <div id="app">
    <BackgroundMap />
  </div>
</template>

<script>
import BackgroundMap from './components/BackgroundMap.vue'

export default {
  name: 'app',
  components: {
    BackgroundMap
  }
}
</script>

<style>

body {
  background: #1b1b1b;
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
