<template>
  <div>
    <Fashheader/>
    <CurrentCity/>
    <Searchbar/>
    <List :typeName="selectedType.name" :events="searchedResults"/>
    <Bottom/>
    <Navbar/>
  </div>
</template>

<script>
import Fashheader from "@/components/Fashheader.vue";
import Navbar from "@/components/Navbar.vue";
import CurrentCity from "@/components/CurrentCity.vue";
import Bottom from "@/components/Bottom.vue";
import List from "@/components/List.vue";
import Searchbar from "@/components/Searchbar.vue";

export default {
  name: "Eventlist",
  components: {
    Fashheader,
    Navbar,
    CurrentCity,
    Bottom,
    List,
    Searchbar
  },
  computed: {
    filteredEvents() {
      return this.$store.state.filteredEvents;
    },
    selectedType() {
      return this.$store.state.selectedType;
    },
    searchStr() {
      return this.$store.state.searchStr;
    },
    searchedResults() {
      return this.filteredEvents.filter(event => {
        if (event.event_name_en.toLowerCase().match(this.searchStr))
          return true;
      });
    }
  }
};
</script>
