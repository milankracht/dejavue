<template>
  <div class="poster" :style="'background-image: url(' + posterPathBaseUrl + size + posterPath + ')'" />
</template>

<script>
export default {
  props: {
    posterPath: String,
    size: String
  },
  data () {
    return {
      posterPathBaseUrl: process.env.posterPathBaseUrl
    }
  }
}
</script>
