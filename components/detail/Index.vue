<template>
  <div class="movie-detail" :class="{ visible: selectedMovie }">
    <div class="container">
      <h2>Movie title</h2>
      <p @click="deselectMovie()">close</p>
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
    deselectMovie () {
      this.$emit('handleDeselectMovie')
    }
  }
}
</script>
