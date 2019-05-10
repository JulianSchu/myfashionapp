<template>
  <div>
    <img class="w-100 h-auto" :src="eventImg" alt="type.jpg">
    <p>{{oneEvent.type_name}}</p>
  </div>
</template>

<script>
export default {
  name: "EventType",
  props: {
    oneEvent: Object
  },
  data(){
    return {
      eventImg: require('../assets/' + this.oneEvent.type_image + '.jpg')
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
