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
