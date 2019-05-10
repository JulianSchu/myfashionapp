<template>
  <div class="col-12 p-0 d-flex flex-wrap">
    <div class="col-6 col-sm-4 col-md-5 p-0">
      <img class="w-100" :src="oneEvent.event_card_url" alt="type.jpg">
    </div>
    <div class="col-6 col-sm-8 col-md-7 d-flex flex-wrap align-items-start">
      <div>
        <p class="mb-0 text-dark font-weight-bold">{{oneEvent.event_name_en}}</p>
        <p class="mb-0 text-info">{{oneEvent.event_eligibility_type}}</p>
        <p class="mb-0 text-muted">{{oneEvent.date_label}}</p>
        <img class="logo" :src="oneEvent.event_logo_url" alt="logo.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EachEvent",
  props: {
    oneEvent: Object,
    chosenName: String,
    chosenCity: String
  }
};
</script>

<style scoped>
p {
  font-family: "Mukta Mahee", sans-serif;
}

img {
  min-width: 150px;
  max-width: 200px
}
.logo{
  min-width: 30px;
  max-width: 40px
}
</style>
