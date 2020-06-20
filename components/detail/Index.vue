<template>
  <div class="movie-detail" :class="{ visible: selectedMovie }">
    <i class="icon back-icon" @click="$emit('handleDeselectMovie')" />
    <div class="container">
      <div class="col">
        <h1>Movie title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique, nunc eu consequat iaculis, odio diam ultrices sapien, vel vestibulum ligula lorem vel eros. Sed quis ligula nunc. Cras quis ultrices turpis. Donec ac ligula molestie, luctus risus sed, lobortis velit. Sed lacinia diam vel mattis porttitor. Praesent pharetra metus sit amet turpis feugiat, nec scelerisque quam laoreet. Nunc ut blandit leo, sit amet faucibus dolor. </p>
        <button type="button" @click="$emit('handleShowTrailerModal')" class="btn btn-primary">
          Play trailer
        </button>
      </div>
      <div class="col">
        <Poster />
      </div>
    </div>
  </div>
</template>

<script>
import Poster from '@/components/generic/Poster.vue'

export default {
  components: {
    Poster
  },
  props: {
    selectedMovie: Number
  }
}
</script>
