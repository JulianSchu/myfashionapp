<template>
  <div v-if="noResult" class="container-fluid bg-light">
    <div class="container">
      <h5 class="m-0 p-3 text-info">Sorry. There is no result of your search or filter selection</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "Noresult",
  props: {
    results: Array
  },
  methods: {
    noResult() {
      if (this.results.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
</style>
