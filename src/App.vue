<template>
  <div id="app">
    <BackgroundMap />
    <div id="main">
      <LogoOrb />
    </div>
  </div>
</template>

<script>
import BackgroundMap from './components/BackgroundMap.vue'
import LogoOrb from './components/LogoOrb.vue'

export default {
  name: 'app',
  components: {
    BackgroundMap, LogoOrb
  }
}
</script>

<style lang="scss">

html,
body {
  margin: 0;
  padding: 0;
}

body {
  background: #1b1b1b;
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;

  #main {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

}
</style>
