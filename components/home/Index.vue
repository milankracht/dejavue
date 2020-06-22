<template>
  <div class="wrapper">
    <Header :search="search" @handleSearchString="setSearchString" />
    <div class="container main-content">
      <Carousel
        listType="trending"
        mediaType="movie"
        title="Popular movies"
        @handleProgramSelection="showProgram" />
      <Carousel
        listType="trending"
        mediaType="tv"
        title="Popular series"
        @handleProgramSelection="showProgram" />
      <Carousel
        listType="discover"
        genre="10751"
        title="Family"
        @handleProgramSelection="showProgram" />
      <Carousel
        listType="discover"
        genre="99"
        title="Documentary"
        @handleProgramSelection="showProgram" />
    </div>
    <SearchResults
      :search="search"
      @handleHideSearchResults="search = ''"
      @handleProgramSelection="showProgram" />
    <Detail
      :selectedProgram="selectedProgram"
      @handleDeselectMovie="hideProgram"
      @handleShowTrailerModal="showTrailerModal = true" />
    <TrailerModal
      :selectedProgram="selectedProgram"
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
      selectedProgram: null,
      showTrailerModal: false,
      search: ''
    }
  },
  methods: {
    showProgram (program) {
      this.selectedProgram = program
    },
    hideProgram () {
      this.selectedProgram = null
    },
    setSearchString (searchString) {
      this.search = searchString
    }
  }
}
</script>
