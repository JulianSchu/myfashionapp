<template>
  <div class="col-12 col-sm-6 p-0 mb-3">
    <div class="input-group flex-nowrap p-0">
      <input
        type="text"
        class="form-control py-0"
        placeholder="Search for event"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      >
      <div class="input-group-prepend">
        <span
          class="input-group-text text-dark font rounded-right py-0"
          id="addon-wrapping"
        >
          <i class="fas fa-search"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Searchbar"
};
</script>

<style>
</style>
