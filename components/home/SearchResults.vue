<template>
  <div class="search-results" :class="{ visible: showSearchResults }">
    <div class="container main-content">
      <h3>Search results</h3>
      <p>Results found for <strong>{{ search }}</strong></p>
      <p @click="$emit('handleHideSearchResults')">Close</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showSearchResults: Boolean,
    search: String
  }
}
</script>
