<template>
  <div>
    <Fashheader/>
    <h6 class="col-12 p-2 text-center">{{this.chosenName}}</h6>
    <div class="container-fluid bg-light px-0 pt-3">
      <div class="container d-flex flex-wrap justify-content-around align-content-around p-3">
        <div class="col-6 d-flex flex-wrap justify-content-center" v-for="(event, index) in event_types" :key="index">
          <EventType :chosenEvent="{eventType: event.type_name, typeImg: event.type_image_url}"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Fashheader from "@/components/Fashheader.vue";
import EventType from "@/components/EventType.vue";

export default {
  name: "Chosen",
  props: {
    chosenCity: String,
    chosenName: String
  },
  data() {
    return {
      event_eligibility_types: Array,
      event_types: Array,
      sector_types: Array,
      events: Array,
      headliners: Array
      // event_type_img: [{url: }]
    };
  },
  components: {
    Fashheader,
    EventType
  },
  methods: {
    fetchData() {
      let url =
        "https://chicmi.p.rapidapi.com/calendar_in_city/?days=5&max_results=0" +
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
          this.headliners = data.values.headliners;
          this.event_types.forEach(element => {
            element.type_image_url = "../assets/" + element.type_image + ".jpg";
          });
          console.log(this.event_types);
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
