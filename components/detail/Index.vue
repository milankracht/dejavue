<template>
  <div class="movie-detail" :class="{ visible: selectedMovie }">
    <div class="container">
      <h2>Movie title</h2>
      <p @click="$emit('handleDeselectMovie')">close</p>
      <button type="button" @click="$emit('handleShowTrailerModal')">Play trailer</button>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    selectedMovie: Number
  },
  methods: {
    // deselectMovie () {
    //   this.$emit('handleDeselectMovie')
    // }
  }
}
</script>
