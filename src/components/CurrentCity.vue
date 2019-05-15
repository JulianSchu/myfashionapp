<template>
  <div>
    <div class="d-flex flex-wrap justify-content-around align-items-center">
      <a
        class="text-dark"
        data-toggle="collapse"
        href="#filters"
        role="button"
        aria-expanded="false"
        aria-controls="filters"
      >
        <i class="fas fa-filter"></i>
      </a>
      <h5 class="p-2 text-center">{{chosenCity.name.toUpperCase()}}</h5>
      <a @click="$router.go(-1)">
        <i class="fas fa-step-backward"></i>
      </a>
    </div>
    <div class="collapse container" id="filters">
      <Filters/>
    </div>
  </div>
</template>

<script>
import Filters from "@/components/Filters.vue"

export default {
  name: "CurrentCity",
  computed: {
    chosenCity() {
      return this.$store.state.chosenCity;
    }
  },
  components: {
    Filters
  }
};
</script>

<style scoped>
a,
a:hover {
  text-decoration: none;
  cursor: pointer;
}
</style>
