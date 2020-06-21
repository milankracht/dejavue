<template>
  <div class="carousel">
    <h2>{{ title }}</h2>
    <p class="alert" v-if="loadingStatus === 4">{{ alertMessage }}</p>
    <flickity ref="flickity" :options="flickityOptions" v-if="list.length">
      <CarouselItem :program="program" v-for="program in list" :key="program.id" />
    </flickity>
    <i class="carousel-button back" @click="previous()" v-if="list.length" />
    <i class="carousel-button foreward" @click="next()" v-if="list.length" />
  </div>
</template>

<script>
import axios from 'axios'
import Flickity from 'vue-flickity'
import CarouselItem from '@/components/home/CarouselItem.vue'

export default {
  components: {
    CarouselItem,
    Flickity
  },
  props: {
    title: String,
    listType: String,
    mediaType: String,
    genre: String
  },
  data () {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        groupCells: true
      },
      list: [],
      loadingStatus: 0,
      alertMessage: null
    }
  },
  beforeMount () {
    this.loadMovies()
  },
  methods: {
    loadMovies () {
      this.loadingStatus = 1

      let url = process.env.apiBaseUrl
      url += this.listType === 'trending' ? 'trending/' + this.mediaType + '/week?' : 'discover/movie?with_genres=' + this.genre + '&'
      url += 'api_key=' + process.env.apiKey

      axios.get(url)
        .then((response) => {
          this.list = response.data.results
          this.apiLoadReady()
        })
        .catch(() => {
          this.loadingStatus = 4
          this.alertMessage = 'Something went wrong when loading data...'
        })
    },
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    },
    handleSelection (program) {
      this.$emit('handleProgramSelection', program)
    },
    apiLoadReady () {
      this.$nextTick(function () {
        this.$refs.flickity.rerender()
        this.$refs.flickity.on('staticClick', (event, pointer, cellElement, cellIndex) => {
          this.handleSelection(this.list[cellIndex])
        })

        this.loadingStatus = 3
      })
    }
  }
}
</script>
