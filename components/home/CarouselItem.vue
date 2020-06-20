<template>
  <div class="carousel-item">
    <Poster />
    <h3>
      {{ title }}
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
    title: String
  }
}
</script>
