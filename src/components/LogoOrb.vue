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

      &:nth-child(odd) {
        animation: orb-r 1s linear infinite;
      }
      &:nth-child(even) {
        animation: orb-l 1s linear infinite;
      }
      &:nth-child(1) {
          animation-duration: 130s
      }

      &:nth-child(2) {
          animation-duration: 140s
      }

      &:nth-child(3) {
          animation-duration: 150s
      }

      &:nth-child(4) {
          animation-duration: 160s
      }

      &:nth-child(5) {
          animation-duration: 170s
      }

      &:nth-child(6) {
          animation-duration: 80s
      }

      &:nth-child(7) {
          animation-duration: 90s
      }

      &:nth-child(8) {
          animation-duration: 100s
      }

      &:nth-child(9) {
          animation-duration: 110s
      }

      &:nth-child(10) {
          animation-duration: 120s
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
