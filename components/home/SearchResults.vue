<template>
  <div class="search-results" :class="{ visible: search.length > 2 }">
    <div class="container main-content">
      <h2>Search results</h2>
      <p>
        Results found for <strong>{{ search }}</strong>.
        <a href="#" @click="$emit('handleHideSearchResults')">Reset</a>
      </p>
      <div class="search-results-list">
        <CarouselItem
          @click.native="handleSelection(program)"
          :program="program"
          v-for="(program, index) in list"
          :key="program.id + '-' + index" />
      </div>
      <button class="btn btn-primary" v-if="loadMore" @click="searchForPrograms()">Load more...</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CarouselItem from '@/components/home/CarouselItem.vue'

export default {
  components: {
    CarouselItem
  },
  props: {
    showSearchResults: Boolean,
    search: String
  },
  data () {
    return {
      list: [],
      page: 1,
      loadMore: false
    }
  },
  watch: {
    search (value) {
      if (value) {
        this.page = 1
        this.list = []
        this.searchForPrograms()
      }
    }
  },
  methods: {
    searchForPrograms () {
      let url = process.env.apiBaseUrl
      url += 'search/multi?query=' + this.search + '&api_key=' + process.env.apiKey + '&page=' + this.page

      axios.get(url)
        .then((response) => {
          Array.prototype.push.apply(this.list, response.data.results)
          this.$forceUpdate()

          if (response.data.results.length >= 20) {
            this.loadMore = true
            this.page++
          } else {
            this.loadMore = false
          }
        })
        .catch(() => {
          console.log('something went wrong')
        })
    },
    handleSelection (program) {
      this.$emit('handleProgramSelection', program)
    }
  }
}
</script>
