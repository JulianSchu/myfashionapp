<template>
  <div id="headliners" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(each, index) in headliners"
        :class="each.carousel_class"
        :key="index"
        data-interval="3000"
        @click="setEvent(each)"
      >
        <router-link to="/chosenevent" class="headline card bg-dark border-0 rounded-0">
          <div class="overflow-hidden">
            <img class="card-img rounded-0" :src="each.event_card_url" alt="headliner.jpg">
          </div>
          <div class="card-img-overlay p-0 py-3 d-flex flex-column justify-content-end">
            <div class="w-100 bg py-2">
              <h5 class="m-2 font-weight-bold text-dark">{{each.event_name}}</h5>
              <p class="m-2 text-dark">{{each.headliner_copy_en}}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <a class="carousel-control-prev ml-2" href="#headliners" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next mr-2" href="#headliners" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Carousel",
  computed: {
    headliners() {
      return this.$store.state.headliners;
    }
  },
  methods: {
    ...mapActions(["setEvent"])
  }
};
</script>

<style scoped>
.headline {
  max-height: 450px;
  width: 100%;
  overflow: hidden;
}

.bg {
  background: rgba(255, 255, 255, 0.8);
}

.carousel-control-prev,
.carousel-control-next {
  height: auto;
  width: auto;
}
</style>
