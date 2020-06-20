<template>
  <div class="carousel">
    <h2>Title</h2>
    <flickity ref="flickity" :options="flickityOptions">
      <CarouselItem title="Movie title 1" @staticClick="selectMovie(1)" />
      <CarouselItem title="Movie title 2" @click="selectMovie(2)" />
      <CarouselItem title="Movie title 3" @click="selectMovie(3)" />
      <CarouselItem title="Movie title 4" @click="selectMovie(4)" />
      <CarouselItem title="Movie title 5" @click="selectMovie(5)" />
      <CarouselItem title="Movie title 6" @click="selectMovie(6)" />
      <CarouselItem title="Movie title 7" @click="selectMovie(7)" />
      <CarouselItem title="Movie title 8" @click="selectMovie(8)" />
      <CarouselItem title="Movie title 9" @click="selectMovie(9)" />
      <CarouselItem title="Movie title 10" @click="selectMovie(10)" />
    </flickity>
    <i class="carousel-button back" @click="previous()" />
    <i class="carousel-button foreward" @click="next()" />
  </div>
</template>

<script>
import Flickity from 'vue-flickity'
import CarouselItem from '@/components/home/CarouselItem.vue'

export default {
  components: {
    CarouselItem,
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
