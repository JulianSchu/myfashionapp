<template>
  <div>
    <Fashheader/>
    <div class="d-flex flex-wrap justify-content-around align-items-center">
      <i class="fas fa-filter"></i>
      <h5 class="p-2 text-center">{{chosenName}}</h5>
      <i class="fas fa-step-backward"></i>
    </div>
    <div class="container-fluid bg-light px-0 py-3">
      <div class="container d-flex flex-wrap align-content-around p-0 py-3">
        <div class="col-12">
          <h5>{{chosenEventName}}</h5>
        </div>
        <div
          class="col-12 col-md-6 d-flex flex-wrap py-3"
          v-for="(event, index) in events"
          :key="index"
        >
          <EachEvent :chosenCity="chosenCity" :chosenName="chosenName" :oneEvent="event"/>
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

export default {
  name: "Eventlist",
  props: {
    chosenEventName: String,
    chosenEventValue: String,
    chosenCity: String,
    chosenName: String
  },
  data() {
    return {
      events: []
    };
  },
  components: {
    Fashheader,
    Navbar,
    EachEvent
  },
  methods: {
    fetchData() {
      let url =
        "https://chicmi.p.rapidapi.com/calendar_in_city/?days=7" +
        "&types=" +
        this.chosenEventValue +
        "&max_results=0" +
        "&city=" +
        this.chosenCity;
      console.log(url);

      fetch(url, {
        headers: {
          "X-RapidAPI-Host": "chicmi.p.rapidapi.com",
          "X-RapidAPI-Key": "69f6e2d4e8mshb890a3d98c0a4efp119267jsna32dc2df9119"
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          // this.event_eligibility_types = data.lookups.event_eligibility_types;
          // this.event_types = data.lookups.event_types;
          // this.sector_types = data.lookups.sector_types;
          this.events = data.values.events;
          // this.headliners = data.values.headliners;
          // this.event_types.forEach(element => {});
          // console.log(this.event_types);
          // console.log(this.headliners);
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
