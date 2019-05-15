<template>
  <div>
    <Fashheader/>
    <CurrentCity/>
    <div class="container-fluid bg-light px-0 py-3">
      <div class="container container py-3">
        <div class="col-12 d-flex flex-wrap justify-content-between align-items-center p-0 mb-3">
          <h5>Top Events</h5>
          <Searchbar/>
        </div>
        <Carousel/>
      </div>
      <div class="container d-flex flex-wrap justify-content-around align-content-around p-0 py-3">
        <div class="col-12">
          <h5>All Events in {{chosenCity.name}}</h5>
        </div>
        <div
          class="col-6 col-lg-3 d-flex flex-wrap justify-content-center py-3"
          v-for="(event, index) in event_types"
          :key="index"
        >
          <EventType :oneEvent="event"/>
        </div>
      </div>
    </div>
    <Navbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Fashheader from "@/components/Fashheader.vue";
import EventType from "@/components/EventType.vue";
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/Carousel.vue";
import CurrentCity from "@/components/CurrentCity.vue";
import Searchbar from "@/components/Searchbar.vue";

export default {
  name: "Chosen",
  components: {
    Fashheader,
    EventType,
    Navbar,
    Carousel,
    CurrentCity,
    Searchbar
  },
  computed: {
    event_types() {
      return this.$store.state.event_types;
    },
    chosenCity() {
      return this.$store.state.chosenCity;
    }
  }
};
</script>
