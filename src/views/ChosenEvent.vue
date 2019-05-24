<template>
  <div>
    <Fashheader/>
    <CurrentCity/>
    <div class="container-fluid bg-light px-0 py-3">
      <div class="container d-flex flex-wrap justify-content-around align-content-around p-0 py-3">
        <div class="col-12">
          <h5>{{oneEvent.event_name}}</h5>
        </div>
        <div class="col-12 col-sm-6 col-md-5 pt-3">
          <img
            class="w-100"
            data-toggle="modal"
            data-target="#largepic"
            :src="oneEvent.event_card_url"
            alt="type.jpg"
          >
          <Modal :oneEvent="oneEvent"/>
          <div class="d-flex flex-wrap">
            <div class="col-6 p-0 pt-3">
              <i
                :class="{'far fa-heart pr-3': ifFav == false, 'fas fa-heart pr-3 text-danger': checkFav}"
                @click="getFavorite()"
              ></i>
              <i class="fas fa-plus px-3"></i>
              <i class="fas fa-share pl-3"></i>
            </div>
            <div class="col-6 p-0 pt-3 text-right">
              <a
                class="detail-link text-info"
                @click="newTab(oneEvent.action_url || oneEvent.detail_url)"
              >Learn more >>></a>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-md-7 d-flex flex-wrap align-items-start py-3">
          <div class="col-12 p-0 mb-3">
            <p class="mb-0 text-dark font-weight-bold">WHEN:</p>
            <p
              class="mb-0 text-muted"
            >{{oneEvent.date_label}}, {{oneEvent.event_eligibility_type}} {{oneEvent.price}}</p>
          </div>
          <div class="col-12 p-0 mb-3">
            <p class="mb-0 text-dark font-weight-bold">WHERE:</p>
            <p class="mb-0">{{oneEvent.location}}</p>
            <a href="#map" class="mb-0 text-info">
              <i class="far fa-map"></i> View map
            </a>
          </div>
          <div class="col-12 p-0 mb-3">
            <p class="mb-0 text-dark font-weight-bold">WHAT:</p>
            <p class="mb-0">{{oneEvent.summary_en}}</p>
          </div>
          <div class="col-12 p-0 mb-3">
            <p class="mb-0 text-dark font-weight-bold">HOSTING BRAND:</p>
            <img class="logo" :src="oneEvent.event_logo_url" alt="logo.jpg">
          </div>
        </div>
      </div>
      <div id="map" class="container border rounded bg-white d-flex flex-wrap p-0 py-3">
        <div class="col-12 col-sm-5">
          <h5>{{oneEvent.address_business_name}}</h5>
          <div>
            <p class="mb-0 text-dark">{{oneEvent.address_street_1}}</p>
            <p class="mb-0 text-dark">{{oneEvent.address_street_2}}</p>
            <p class="mb-0 text-dark">{{oneEvent.address_zip}}</p>
            <p class="text-dark">{{oneEvent.address_city}}</p>
          </div>
        </div>
        <div class="map col-12 col-sm-7">
          <iframe
            class="w-100 h-100"
            frameborder="0"
            style="border:0"
            :src="addressExtention"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <Bottom/>
    <Navbar/>
  </div>
</template>

<script>
import Fashheader from "@/components/Fashheader.vue";
import Navbar from "@/components/Navbar.vue";
import Modal from "@/components/Modal.vue";
import CurrentCity from "@/components/CurrentCity.vue";
import Bottom from "@/components/Bottom.vue";

export default {
  name: "ChosenEvent",
  data() {
    return {
      ifFav: false
    };
  },
  components: {
    Fashheader,
    CurrentCity,
    Navbar,
    Modal,
    Bottom
  },
  computed: {
    userName() {
      return this.$store.state.userName;
    },
    uid() {
      return this.$store.state.uid;
    },
    oneEvent() {
      return this.$store.state.chosenEvent;
    },
    favorites() {
      return this.$store.state.favorites;
    },
    addressExtention() {
      return this.$store.state.addressExtention;
    },
    chosenCity() {
      return this.$store.state.chosenCity;
    },
    checkFav() {    
      for (var key in this.favorites) {
        if (this.favorites[key].event_id === this.oneEvent.event_id) {
          this.ifFav = true;
          return true; 
          break;
        } else { this.ifFav = false}
      }
    }
  },
  methods: {
    newTab(link) {
      window.open(link, "_blank");
    },
    getFavorite() {
      if (this.ifFav) {
        console.log("ok");
        let city = this.chosenCity.name;
        firebase
          .database()
          .ref("/" + city + "/favorite/" + this.uid + "/" + this.oneEvent.event_id)
          .remove();
          
      } else {
        let city = this.chosenCity.name;
        var favEvent = this.oneEvent;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates[
          "/" + city + "/favorite/" + this.uid + "/" + this.oneEvent.event_id 
        ] = favEvent;

        firebase
          .database()
          .ref()
          .update(updates);
      }
    }
  }
};
</script>

<style scoped>
.logo {
  min-width: 30px;
  max-width: 40px;
}

a,
a:hover {
  text-decoration: none;
  cursor: pointer;
}

.map {
  min-height: 300px;
}
</style>
