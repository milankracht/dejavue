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

<style lang="scss">
  @import '@/assets/css/main.scss';

  .movie-detail {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 100vw;
    width: 100%;
    height: 100vh;
    background: $gradient-dark;
    background-image: linear-gradient($gradient-light, $gradient-dark);
    transition: left 0.15s ease-in-out;
    overflow-y: auto;

    &.visible {
      left: 0;
      transition: left 0.35s ease-in-out;
    }

    .back-icon {
      position: absolute;
      top: 1rem;
      left: 1rem;

      @include bp-sm {
        top: 2rem;
      }
    }

    .btn {
      margin: 1rem 0 2rem;
    }

    .col {
      float: left;
      width: 100%;
      margin-top: 4rem;

      @include bp-sm {
        margin-top: 7rem;

        &:first-child {
          width: calc(100% - 24rem);
        }
        &:last-child {
          float: right;
          width: 20rem;
          text-align: right;
          > * {
            float: right;
          }
        }
      }
    }
  }
</style>
