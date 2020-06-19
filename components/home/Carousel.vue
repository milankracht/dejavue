<template>
  <div>
    <flickity ref="flickity" :options="flickityOptions">
      <Poster title="Movie title 1" @staticClick="selectMovie(1)" />
      <Poster title="Movie title 2" @click="selectMovie(2)" />
      <Poster title="Movie title 3" @click="selectMovie(3)" />
      <Poster title="Movie title 4" @click="selectMovie(4)" />
      <Poster title="Movie title 5" @click="selectMovie(5)" />
      <Poster title="Movie title 6" @click="selectMovie(6)" />
      <Poster title="Movie title 7" @click="selectMovie(7)" />
      <Poster title="Movie title 8" @click="selectMovie(8)" />
      <Poster title="Movie title 9" @click="selectMovie(9)" />
      <Poster title="Movie title 10" @click="selectMovie(10)" />
    </flickity>
    <button @click="previous()">
      Custom Previous Button
    </button>
    <button @click="next()">
      Custom Next Button
    </button>
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import Poster from '@/components/home/Poster.vue'

export default {
  components: {
    Poster,
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        groupCells: true
      }
    }
  },
  mounted () {
    this.$refs.flickity.on('staticClick', (event, pointer, cellElement, cellIndex) => {
      if (!cellElement) {
        return
      }
      this.handleSelection(cellIndex)
    })
  },
  methods: {
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    },
    handleSelection (id) {
      this.$emit('handleMovieSelection', id)
    }
  }
}
</script>
