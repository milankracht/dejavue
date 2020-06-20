<template>
  <div class="trailer-modal" :class="{ visible: showTrailerModal }">
    <div class="container">
      <h3>Movie title</h3>
      <p @click="$emit('handleHideTrailerModal')">Close</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showTrailerModal: Boolean
  }
}
</script>
