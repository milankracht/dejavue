<template>
  <div class="trailer-modal" :class="{ visible: showTrailerModal }">
    <div class="container">
      <h3>Movie title</h3>
      <i class="icon close-icon" @click="$emit('handleHideTrailerModal')" />
      <video id="video" controls autoplay></video>
    </div>
  </div>
</template>

<script>
import shaka from 'shaka-player/dist/shaka-player.compiled.js'

export default {
  props: {
    showTrailerModal: Boolean
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
