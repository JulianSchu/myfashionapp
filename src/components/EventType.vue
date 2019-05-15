<template>
  <div @click="getTypeEvents({name: oneEvent.type_name_en, value: oneEvent.slug, city: chosenCity.value})">
    <router-link to="/eventlist" class="router-link m-1">
      <!-- :to="{name: 'Eventlist', params:{ chosenEventName: oneEvent.type_name_en, chosenEventValue: oneEvent.slug}}"
      class="router-link m-1"
    > -->
      <img class="w-100 h-auto" :src="eventImg" alt="type.jpg">
      <div class="py-2">
        <p class="mb-0 text-dark font-weight-bold">{{oneEvent.type_name}}</p>
        <p class="mb-0 text-muted">{{oneEvent.type_description_en}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EventType",
  props: {
    oneEvent: Object,
  },
  methods: {
    ...mapActions(["getTypeEvents"])
  },
  data() {
    return {
      eventImg: require("../assets/" + this.oneEvent.type_name + ".jpg")
    };
  },
  computed: {
    chosenCity() {
      return this.$store.state.chosenCity;
    }
  }
};
</script>

<style scoped>
p {
  font-family: "Mukta Mahee", sans-serif;
}

img {
  max-width: 400px;
}
</style>
