<template>
  <div>
    <Fashheader/>
    <CurrentCity/>
    <Searchbar/>
    <List :typeName="chosenType.name" :events="searchedResults"/>
    <!-- <Noresult :results="searchedResults"/> -->
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
import Noresult from "@/components/Noresult.vue";
import { mapGetters } from "vuex";

export default {
  name: "Eventlist",
  components: {
    Fashheader,
    Navbar,
    Bottom,
    CurrentCity,
    List,
    Searchbar,
    Noresult
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
    chosenType() {
      return this.$store.state.chosenType;
    },
    searchStr() {
      return this.$store.state.searchStr;
    },
    searchedResults() {
      return this.events.filter(event => {
        if (event.event_name_en.toLowerCase().match(this.searchStr))
          return true;
      });
    }
  }
};
</script>
