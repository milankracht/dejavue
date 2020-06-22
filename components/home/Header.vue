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

<style lang="scss">
  @import '@/assets/css/main.scss';

  header {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 9rem;
    background-color: $gradient-light;

    @include bp-sm {
      height: 7rem;
    }

    .col {
      position: relative;
      float: left;
      width: 100%;

      @include bp-sm {
        width: 50%;
      }
    }

    .logo {
      width: 150px;
      height: 50px;
      margin: 1rem 0 0;
      background-image: url('/logo.png');
      background-size: contain;
      background-repeat: no-repeat;

      @include bp-sm {
        width: 203px;
        height: 71px;
        margin: 1.5rem 0 0 -0.5rem;
      }
    }

    input {
      float: left;
      width: calc(100% - 5rem);
      margin: 0.5rem 0 0;
      padding: 0.5rem 0.75rem;
      color: white;
      font-size: 0.875rem;
      @include regular();
      line-height: 2rem;
      border: 1px solid rgba(white, 0.15);
      border-radius: 4px;
      background-color: lighten($gradient-light, 2%);

      @include bp-sm {
        float: right;
        width: 18rem;
        margin: 2rem 0 0;
      }
    }

    .loader {
      position: absolute;
      top: 1.25rem;
      right: 4.5rem;

      @include bp-sm {
        top: 2.75rem;
        right: 4rem;
      }
    }

    .icon {
      float: right;
      margin: 1rem 0 0 0.5rem;

      @include bp-sm {
        margin: 2.25rem 0 0 0.5rem;
      }
    }
  }
</style>
