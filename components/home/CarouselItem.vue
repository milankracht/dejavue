<template>
  <div class="carousel-item" v-if="program">
    <Poster :posterPath="program.poster_path" size="w185" />
    <h3>
      {{ program.title ? program.title : program.name | reduceLength(30) }}
    </h3>
  </div>
</template>

<script>
import Poster from '@/components/generic/Poster.vue'

export default {
  components: {
    Poster
  },
  props: {
    program: Object
  }
}
</script>

<style lang="scss">
  @import '@/assets/css/main.scss';

  .carousel-item {
    width: 8rem;
    margin: 0 0.25rem 1rem 0.25rem;
    cursor: pointer;

    h3 {
      width: 8rem;
      height: 2.5rem;
      overflow: hidden;
    }

    .poster {
      width: 8rem;
      height: 10rem;
      margin: 0;
    }
  }
</style>
