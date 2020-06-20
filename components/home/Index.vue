<template>
  <div class="wrapper">
    <header>
      <div class="container">
        <div class="col">
          <h1>DejaVue</h1>
        </div>
        <div class="col">
          <input type="text" v-model="search" />
        </div>
      </div>
    </header>
    <div class="container main-content">
      <Carousel @handleMovieSelection="showMovie" />
    </div>
    <SearchResults
      :showSearchResults="showSearchResults"
      :search="search"
      @handleHideSearchResults="showSearchResults = false" />
    <Detail
      :selectedMovie="selectedMovie"
      @handleDeselectMovie="hideMovie"
      @handleShowTrailerModal="showTrailerModal = true" />
    <TrailerModal
      :showTrailerModal="showTrailerModal"
      @handleHideTrailerModal="showTrailerModal = false" />
  </div>
</template>

<script>
import Carousel from '@/components/home/Carousel.vue'
import Detail from '@/components/detail/Index.vue'
import TrailerModal from '@/components/home/TrailerModal.vue'
import SearchResults from '@/components/home/SearchResults.vue'

export default {
  components: {
    Carousel,
    Detail,
    TrailerModal,
    SearchResults
  },
  data () {
    return {
      selectedMovie: null,
      showTrailerModal: false,
      showSearchResults: false,
      search: null
    }
  },
  watch: {
    search (value) {
      if (value.length > 2) {
        this.showSearchResults = true
      } else {
        this.showSearchResults = false
      }
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
