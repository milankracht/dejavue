<template>
  <div class="movie-detail" :class="{ visible: selectedProgram }">
    <i class="icon back-icon" @click="$emit('handleDeselectMovie')" />
    <div class="container" v-if="selectedProgram">
      <div class="col">
        <h1>{{ selectedProgram.title ? selectedProgram.title : selectedProgram.name }}</h1>
        <div class="hide-desktop">
          <Poster :posterPath="selectedProgram.poster_path" size="w342" />
        </div>
        <p v-if="selectedProgram.overview">{{ selectedProgram.overview }}</p>
        <StarRating :rating="rating" :starSize="16" />
        <button type="button" @click="$emit('handleShowTrailerModal')" class="btn btn-primary">
          Watch trailer
        </button>
      </div>
      <div class="col hide-mobile">
        <Poster :posterPath="selectedProgram.poster_path" size="w342" />
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import Poster from '@/components/generic/Poster.vue'

export default {
  components: {
    Poster,
    StarRating
  },
  props: {
    selectedProgram: Object
  },
  computed: {
    rating () {
      return parseFloat(this.selectedProgram.vote_average) / 2
    }
  }
}
</script>
