<template>
  <div class="w-100 fixed-bottom bg-white">
    <div class="container d-flex flex-wrap justify-content-around">
      <router-link
        to="/cities"
        class="router-link text-dark d-flex flex-wrap justify-content-center mt-2"
      >
        <i class="fas fa-city col-12 text-center p-0"></i>
        <p class="mb-0">
          <small>Cities</small>
        </p>
      </router-link>
      <div @click="getNews()">
        <router-link
          to="/news"
          class="router-link text-dark d-flex flex-wrap justify-content-center mt-2"
        >
          <i class="far fa-newspaper col-12 text-center p-0"></i>
          <p class="mb-0">
            <small>News</small>
          </p>
        </router-link>
      </div>
      <router-link
        to="/chosen"
        class="router-link text-dark d-flex flex-wrap justify-content-center mt-2"
      >
        <i class="far fa-calendar-check col-12 text-center p-0"></i>
        <p class="mb-0">
          <small>Events</small>
        </p>
      </router-link>
      <div @click="scrollToBottom()">
        <router-link
          to="/chats"
          class="router-link text-dark d-flex flex-wrap justify-content-center mt-2"
        >
          <i class="fas fa-comments col-12 text-center p-0"></i>
          <p class="mb-0">
            <small>Chats</small>
          </p>
        </router-link>
      </div> 
      <router-link
        to="/profile"
        class="router-link text-dark d-flex flex-wrap justify-content-center mt-2"
      >
        <i class="fas fa-user-circle col-12 text-center p-0"></i>
        <p class="mb-0">
          <small>Profile</small>
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Navbar",
  methods: {
    ...mapActions(["getNews"]),
    scrollToBottom() {
      let display = document.getElementById("chatDisplay");
      display.scrollTo({ top: display.scrollHeight, behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
small {
  font-family: "Limelight", cursive;
}
</style>
