<template>
  <header>
    <div class="container">
      <div class="col">
        <div class="logo" />
      </div>
      <div class="col">
        <i class="icon search-icon" v-if="!searchString.length"></i>
        <i class="icon close-icon" v-else @click="searchString = ''"></i>
        <div class="loader" v-if="awaitingSearch"></div>
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
      searchString: this.search,
      awaitingSearch: false
    }
  },
  watch: {
    searchString (value) {
      if (value.length > 2) {
        if (!this.awaitingSearch) {
          // wait till user stopped typing
          setTimeout(() => {
            this.$emit('handleSearchString', this.searchString)
            this.awaitingSearch = false
          }, 1000)
        }
        this.awaitingSearch = true
      } else {
        this.$emit('handleSearchString', '')
      }
    },
    search (value) {
      this.searchString = value
    }
  }
}
</script>
