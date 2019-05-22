<template>
  <div>
    <Fashheader/>
    <div class="d-flex flex-wrap justify-content-around align-items-center">
      <h5 class="p-2 text-center">{{chosenCity.name.toUpperCase()}}</h5>
    </div>
    <div class="container-fluid chatbox-bg p-3">
      <div class="container h-100 chatbox rounded-lg shadow py-3 d-flex flex-wrap align-items-around">
        <ChatDisplay/>
        <Inputbox/>
      </div>
    </div>
    <Bottom/> 
    <Navbar/>
  </div>
</template>

<script>
import Fashheader from "@/components/Fashheader.vue";
import Navbar from "@/components/Navbar.vue";
import Bottom from "@/components/Bottom.vue";
import CurrentCity from "@/components/CurrentCity.vue";
import Inputbox from "@/components/Inputbox.vue";
import ChatDisplay from "@/components/ChatDisplay.vue";

export default {
  name: 'Chats',
  computed: {
    chosenCity() {
      return this.$store.state.chosenCity;
    }
  },
  components: {
    Fashheader,
    Navbar,
    Bottom,
    CurrentCity,
    Inputbox,
    ChatDisplay
  }
}
</script>

<style scoped>
.chatbox-bg {
  background-image: url(../assets/bg2.jpg);
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0;
}

.chatbox-bg:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(212, 211, 204, 0.555);
}

.chatbox {
  position: relative;
  background: rgba(1, 37, 37, 0.6)}

</style>

