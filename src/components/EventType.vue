<template>
  <router-link :to="{name: 'Eventlist', params:{ chosenEventName: oneEvent.type_name_en, chosenEventValue: oneEvent.slug, chosenCity: chosenCity, chosenName: chosenName}}" class="router-link m-1">
    <img class="w-100 h-auto" :src="eventImg" alt="type.jpg">
    <div class="py-2">
      <p class="mb-0 text-dark font-weight-bold">{{oneEvent.type_name}}</p>
      <p class="mb-0 text-muted">{{oneEvent.type_description_en}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventType",
  props: {
    oneEvent: Object,
    chosenName: String,
    chosenCity: String
  },
  data() {
    return {
      eventImg: require("../assets/" + this.oneEvent.type_name + ".jpg")
    };
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
