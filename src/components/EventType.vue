<template>
  <div>
    <img class="w-100 h-auto" :src="chosenEvent.typeImg" alt="type.jpg">
    <p>{{chosenEvent.eventType}}</p>
  </div>
</template>

<script>
export default {
  name: "EventType",
  props: {
    chosenEvent: Object
  },
  data () {
      return {
          counter: this.chosenEvent
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
