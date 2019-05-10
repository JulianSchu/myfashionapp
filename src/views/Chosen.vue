<template>
  <div>
    <Fashheader/>
    <div class="d-flex flex-wrap justify-content-around align-items-center">
      <i class="fas fa-filter"></i>
      <h5 class="p-2 text-center">{{this.chosenName}}</h5>
      <i class="fas fa-step-backward"></i>
    </div>
    <div class="container-fluid bg-light px-0 py-3">
      <Carousel :headliner="headliners"/>
      <div class="container d-flex flex-wrap justify-content-around align-content-around p-0 py-3">
        <div class="col-12">
          <h5>All Events in {{this.chosenName}}</h5>
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

export default {
  name: "Chosen",
  props: {
    chosenCity: String,
    chosenName: String
  },
  data() {
    return {
      event_eligibility_types: [],
      event_types: [],
      sector_types: [],
      events: [],
      headliners: []
    };
  },
  components: {
    Fashheader,
    EventType,
    Navbar,
    Carousel
  },
  methods: {
    fetchData() {
      let url =
        "https://chicmi.p.rapidapi.com/calendar_in_city/?days=7&max_results=0" +
        "&city=" +
        this.chosenCity;

      fetch(
        //"https://newsapi.org/v2/everything?q=fashion&language=en&from=2019-05-01&apiKey=2c667d483092480ea9bc07666473f47a"
        url,
        {
          headers: {
            "X-RapidAPI-Host": "chicmi.p.rapidapi.com",
            "X-RapidAPI-Key":
              "69f6e2d4e8mshb890a3d98c0a4efp119267jsna32dc2df9119"
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.event_eligibility_types = data.lookups.event_eligibility_types;
          this.event_types = data.lookups.event_types;
          this.sector_types = data.lookups.sector_types;
          this.events = data.values.events;
          data.values.headliners.forEach(each => {
            if (data.values.headliners.indexOf(each) === 0) {
              each.carousel_class = "carousel-item active";
            } else {
              each.carousel_class = "carousel-item";
            }
          });
          this.headliners = data.values.headliners;
          this.event_types.forEach(element => {});
          console.log(this.event_types);
          console.log(this.headliners);
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
