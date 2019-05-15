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
              <i class="far fa-heart pr-3"></i>
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
              class="mb-0 text-info"
            >{{oneEvent.date_label}}, {{oneEvent.event_eligibility_type}} {{oneEvent.price}}</p>
          </div>
          <div class="col-12 p-0 mb-3">
            <p class="mb-0 text-dark font-weight-bold">WHERE:</p>
            <p class="mb-0">{{oneEvent.location}}</p>
            <p class="mb-0 text-muted">
              <i class="far fa-map"></i> View map
            </p>
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
    </div>
    <Navbar/>
  </div>
</template>

<script>
import Fashheader from "@/components/Fashheader.vue";
import Navbar from "@/components/Navbar.vue";
import Modal from "@/components/Modal.vue";
import CurrentCity from "@/components/CurrentCity.vue";

export default {
  name: "ChosenEvent",
  components: {
    Fashheader,
    CurrentCity,
    Navbar,
    Modal
  },
  computed: {
    oneEvent() {
      return this.$store.state.chosenEvent;
    }
  },
  methods: {
    newTab(link) {
      window.open(link, "_blank");
    }
  }
};
</script>

<style scoped>
p {
  font-family: "Mukta Mahee", sans-serif;
}

.logo {
  min-width: 30px;
  max-width: 40px;
}

a,
a:hover {
  text-decoration: none;
  cursor: pointer;
}
</style>
