<template>
  <header>
    <div class="container">
      <div class="col">
        <div class="logo" />
      </div>
      <div class="col">
        <i class="icon search-icon" v-if="!searchString.length"></i>
        <i class="icon close-icon" v-else @click="searchString = ''"></i>
        <input type="text" v-model="searchString" placeholder="Search..." />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    search: String
  },
  data () {
    return {
      searchString: this.search
    }
  },
  watch: {
    searchString (value) {
      this.$emit('handleSearchString', this.searchString)
    },
    search (value) {
      this.searchString = value
    }
  }
}
</script>
