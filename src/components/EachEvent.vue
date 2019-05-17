<template>
  <router-link to="/chosenevent" class="router-link col-12 p-0 d-flex flex-wrap bg-white shadow">
    <div class="col-6 col-sm-4 col-md-5 p-0" @click="setEvent(oneEvent)">
      <img class="w-100 h-100" :src="oneEvent.event_card_url" alt="event.jpg">
    </div>
    <div class="col-6 col-sm-8 col-md-7 d-flex flex-wrap align-items-start p-2 pb-0" @click="setEvent(oneEvent)">
      <div>
        <p class="mb-0 text-dark font-weight-bold">{{oneEvent.event_name_en}}</p>
        <p class="mb-0 text-info">{{oneEvent.event_eligibility_type}}</p>
        <p class="mb-0 text-muted">{{oneEvent.date_label}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "EachEvent",
  props: {
    oneEvent: Object
  },
  methods: {
   ...mapActions(["setEvent"])
  }
};
</script>

<style scoped>
p {
  font-family: "Mukta Mahee", sans-serif;
}

img {
  min-width: 150px;
  max-width: 240px
}
</style>
