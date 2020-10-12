<template>
  <div id="orb">
    <simple-svg
      v-for="(orb, key) in orbs"
      :class="`orb-${key}`"
      :key="key"
      :filepath="orb.path"
      @ready="onSvgReady()"
      />
  </div>
</template>

<script>
import { gsap } from "gsap";
  export default {
    name: 'LogoOrb',
    props: {},
    data () {
      return {
        orbs: [
          { path: 'orb/portal-blue.svg' },
          { path: 'orb/portal-blue-semi.svg' },
          { path: 'orb/portal-green.svg' },
          { path: 'orb/portal-green-semi.svg' },
          { path: 'orb/portal-orange.svg' },
          { path: 'orb/portal-orange-semi.svg' },
          { path: 'orb/portal-red.svg' },
          { path: 'orb/portal-red-semi.svg' },
          { path: 'orb/portal-yellow.svg' },
          { path: 'orb/portal-yellow-semi.svg' }
        ]
      }
    },
    mounted() {
      for (let i = 0; i < 10; i++) {
        let rand = Math.round(Math.random()) * 2 - 1
        gsap.to(`.orb-${i}`, 10 * i, {rotation: (360 * rand), ease: 'linear', repeat:-1})
      }
      
    },
    methods: {
      toggle () {
        this.isActive = !this.isActive
      },
      onSvgReady () {
      }
    }
  }
</script>

<style lang="scss">
  #orb {
    position: relative;
    width: 350px;
    height: 350px;

    display: flex;
    align-items: center;
    justify-content: center;
    [class*="orb-"] {

      filter: saturate(.15) sepia(.5) grayscale(.25);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      will-change: transform;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  @keyframes orb-r {
      100% {
          transform: rotate(1turn)
      }
  }
  @keyframes orb-l {
      100% {
          transform: rotate(-1turn)
      }
  }
</style>
