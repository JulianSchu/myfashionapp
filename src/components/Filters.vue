<template>
  <div class="p-3 border rounded mb-3 d-flex flex-wrap justify-content-between">
    <div class="col-12 col-md-4 d-flex justify-content-between p-0 py-1">
      <label for="event-type">Type:</label>
      <select class="rounded w-50 mx-md-3" name="event-type" id="event-type">
        <option value="" selected>-Please choose-</option>
        <option v-for="(type, index) in event_types" :key="index" :value="type.slug">{{type.type_name_en}}</option>
      </select>
    </div>
    <div class="col-12 col-md-4 d-flex justify-content-between p-0 py-1">
      <label for="sector-type">Sector:</label>
      <select class="rounded w-50 mx-md-3" name="sector-type" id="sector-type">
        <option value="" selected>-Please choose-</option>
        <option v-for="(sector, index) in sector_types" :key="index" :value="sector.slug">{{sector.type_name_en}}</option>
      </select>
    </div>
    <div class="col-12 col-md-4 d-flex justify-content-between p-0 py-1">
      <label for="eli-type">Entrance:</label>
      <select class="rounded w-50" name="eli-type" id="eli-type">
        <option value="" selected>-Please choose-</option>
        <option v-for="(eli, index) in event_eligibility_types" :key="index" :value="eli.slug">{{eli.type_name_en}}</option>
      </select>
    </div>
    <div class="col-12 p-0 pt-3 d-flex justify-content-end">
        <button type="button" class="btn btn-secondary rounded py-1 px-3">Filter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    event_types() {
      return this.$store.state.event_types;
    },
    sector_types() {
      return this.$store.state.sector_types;
    },
    event_eligibility_types() {
      return this.$store.state.event_eligibility_types;
    }
  }
};
</script>

<style scoped>
/* select {
    width: 200px;
} */

</style>
