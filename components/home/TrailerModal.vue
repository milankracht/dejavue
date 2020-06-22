<template>
  <div class="trailer-modal" :class="{ visible: showTrailerModal }">
    <div class="container" v-if="selectedProgram">
      <h3>{{ selectedProgram.title }}</h3>
      <i class="icon close-icon" @click="$emit('handleHideTrailerModal')" />
      <video id="video" controls autoplay></video>
    </div>
  </div>
</template>

<script>
import shaka from 'shaka-player/dist/shaka-player.compiled.js'

export default {
  props: {
    showTrailerModal: Boolean,
    selectedProgram: Object
  },
  watch: {
    showTrailerModal (value) {
      if (value) {
        this.initShaka()
      } else {
        this.destroyPlayer()
      }
    }
  },
  data () {
    return {
      manifestUri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    }
  },
  methods: {
    initShaka () {
      shaka.polyfill.installAll()

      if (shaka.Player.isBrowserSupported()) {
        this.initPlayer()
      } else {
        console.error('Browser not supported!')
      }
    },
    initPlayer () {
      const video = document.getElementById('video')
      const player = new shaka.Player(video)

      window.player = player

      player.load(this.manifestUri)
        .then(function () {
          console.log('The video has now been loaded!')
        })
        .catch()
    },
    destroyPlayer () {
      window.player.destroy()
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';

  .trailer-modal {
    position: fixed;
    z-index: 4;
    top: 100vh;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: $gradient-dark;
    transition: top 0.15s ease-in-out;

    &.visible {
      top: 0;
      transition: top 0.35s ease-in-out;
    }

    h3 {
      float: left;
      margin: 20vh 0 1rem;

      @include bp-sm {
        margin-top: 10vh;
      }
    }

    .close-icon {
      float: right;
      margin: calc(20vh - 0.5rem) 0 1rem;

      @include bp-sm {
        margin-top: 10vh;
      }
    }

    video {
      width: 100%;
      background-color: $gradient-light;
    }
  }
</style>
