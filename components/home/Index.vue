<template>
  <div class="wrapper">
    <Header :search="search" @handleSearchString="setSearchString" />
    <div class="container main-content">
      <Carousel @handleMovieSelection="showMovie" />
    </div>
    <SearchResults
      :showSearchResults="showSearchResults"
      :search="search"
      @handleHideSearchResults="showSearchResults = false, search = ''" />
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
import Header from '@/components/home/Header.vue'
import Carousel from '@/components/home/Carousel.vue'
import Detail from '@/components/detail/Index.vue'
import TrailerModal from '@/components/home/TrailerModal.vue'
import SearchResults from '@/components/home/SearchResults.vue'

export default {
  components: {
    Header,
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
      search: ''
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
    },
    setSearchString (searchString) {
      this.search = searchString
    }
  }
}
</script>
