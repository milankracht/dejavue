<template>
  <div class="search-results" :class="{ visible: showSearchResults }">
    <div class="container main-content">
      <h2>Search results</h2>
      <p>Results found for <strong>{{ search }}</strong></p>
      <!-- <p @click="$emit('handleHideSearchResults')">Close</p> -->
      <CarouselItem title="Movie title 1"  />
      <CarouselItem title="Movie title 2"  />
      <CarouselItem title="Movie title 3"  />
      <CarouselItem title="Movie title 4"  />
      <CarouselItem title="Movie title 5"  />
      <CarouselItem title="Movie title 6"  />
      <CarouselItem title="Movie title 7"  />
      <CarouselItem title="Movie title 8"  />
      <CarouselItem title="Movie title 9"  />
      <CarouselItem title="Movie title 10" />
    </div>
  </div>
</template>

<script>
import CarouselItem from '@/components/home/CarouselItem.vue'

export default {
  components: {
    CarouselItem
  },
  props: {
    showSearchResults: Boolean,
    search: String
  }
}
</script>
