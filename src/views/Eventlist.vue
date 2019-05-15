<template>
  <div>
    <Fashheader/>
    <CurrentCity/>
    <div class="container-fluid bg-light px-0 py-3">
      <div class="container d-flex flex-wrap align-content-around p-0 py-3">
        <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
          <h5 class="py-0">{{chosenType.name}}</h5>
          <Searchbar/>
        </div>
        <div
          class="col-12 col-md-6 d-flex flex-wrap py-3"
          v-for="(event, index) in events"
          :key="index"
        >
          <EachEvent :oneEvent="event"/>
        </div>
      </div>
    </div>
    <Navbar/>
  </div>
</template>

<script>
import Fashheader from "@/components/Fashheader.vue";
import Navbar from "@/components/Navbar.vue";
import EachEvent from "@/components/EachEvent.vue";
import CurrentCity from "@/components/CurrentCity.vue";
import Searchbar from "@/components/Searchbar.vue";

export default {
  name: "Eventlist",
  components: {
    Fashheader,
    Navbar,
    EachEvent,
    CurrentCity,
    Searchbar
  },
  computed:{
    events() {
      return this.$store.state.events;
    },
    chosenType() {
      return this.$store.state.chosenType;
    }
  }
};
</script>
