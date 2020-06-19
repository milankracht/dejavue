<template>
  <div class="wrapper">
    <div class="container">
      <h1>DejaVue</h1>
      <Carousel @handleMovieSelection="showMovie" />
    </div>
    <Detail :selectedMovie="selectedMovie" @handleDeselectMovie="hideMovie" />
  </div>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue'
import Detail from '@/components/detail/Index.vue'

export default {
  components: {
    Carousel,
    Detail
  },
  data () {
    return {
      selectedMovie: null
    }
  },
  methods: {
    showMovie (movieId) {
      this.selectedMovie = movieId
      console.log('Movie id: ' + movieId)
    },
    hideMovie () {
      this.selectedMovie = null
    }
  }
}
</script>
