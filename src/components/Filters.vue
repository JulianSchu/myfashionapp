<template>
  <div class="p-3 border rounded mb-3 d-flex flex-wrap justify-content-between">
    <div class="col-12 col-md-4 d-flex justify-content-between p-0 py-1">
      <label for="event-type">Type:</label>
      <select class="rounded w-50 mx-md-3" name="event-type" id="event-type" @change="setSelType">
        <option selected>All</option>
        <option
          v-for="(type, index) in event_types"
          :key="index"
          :value="type.slug"
        >{{type.type_name_en}}</option>
      </select>
    </div>
    <div class="col-12 col-md-4 d-flex justify-content-between p-0 py-1">
      <label for="sector-type">Sector:</label>
      <select
        class="rounded w-50 mx-md-3"
        name="sector-type"
        id="sector-type"
        @change="setSelSector"
      >
        >
        <option selected>All</option>
        <option
          v-for="(sector, index) in sector_types"
          :key="index"
          :value="sector.slug"
        >{{sector.type_name_en}}</option>
      </select>
    </div>
    <div class="col-12 col-md-4 d-flex justify-content-between p-0 py-1">
      <label for="eli-type">Entrance:</label>
      <select class="rounded w-50" name="eli-type" id="eli-type" @change="setSelEli">
        <option selected>All</option>
        <option
          v-for="(eli, index) in event_eligibility_types"
          :key="index"
          :value="eli.slug"
        >{{eli.type_name_en}}</option>
      </select>
    </div>
    <div class="col-12 p-0 pt-3 d-flex justify-content-end">
      <button
        type="button"
        class="btn btn-secondary rounded py-1 px-3 mx-3"
        @click="clearFilter()"
      >Clear</button>
      <router-link to="/Filteredlist">
        <button
          type="button"
          class="btn btn-secondary rounded py-1 px-3"
          @click="onFilter({selectedType: selectedType, selectedSector: selectedSector, selectedEli: selectedEli})"
        >Filter</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Filters",
  data() {
    return {
      selectedType: { name: "All", value: "" },
      selectedSector: { name: "All", value: "" },
      selectedEli: { name: "All", value: "" }
    };
  },
  computed: {
    event_types() {
      return this.$store.state.event_types;
    },
    sector_types() {
      return this.$store.state.sector_types;
    },
    event_eligibility_types() {
      return this.$store.state.event_eligibility_types;
    }
  },
  methods: {
    ...mapActions(["onFilter"]),
    setSelType(e) {
      this.selectedType.name =
        e.target.options[e.target.selectedIndex].innerHTML;
      this.selectedType.value = e.target.value;
    },
    setSelSector(e) {
      this.selectedSector.name =
        e.target.options[e.target.selectedIndex].innerHTML;
      this.selectedSector.value = e.target.value;
    },
    setSelEli(e) {
      this.selectedEli.name =
        e.target.options[e.target.selectedIndex].innerHTML;
      this.selectedEli.value = e.target.value;
    },
    clearFilter() {
      let filterOptions = document.getElementsByTagName("select");
      for(var i=0; i<filterOptions.length; i++) {
        console.log(filterOptions[i])
      }
      filterOptions[0].selectedIndex = 0;
      filterOptions[1].selectedIndex = 0;
      filterOptions[2].selectedIndex = 0;
      this.selectedType.name = 'All';
      this.selectedType.value = '';
      this.selectedSector.name = 'All'
      this.selectedSector.value = '';
      this.selectedEli.name = 'All';
      this.selectedEli.value = '';
    }
  }
};
</script>

<style>
</style>
