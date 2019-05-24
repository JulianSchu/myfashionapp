<template>
  <div>
    <Fashheader/>
    <div class="container d-flex flex-wrap align-items-center">
      <img :src="currentUser.photoURL || defaultpic" alt="profile.jpg" class="rounded-circle my-3 mr-3">
      <h5>{{currentUser.displayName}}</h5>
    </div>
    <div class="container-fluid bg-light pt-3">
      <div class="container">
        <div class="container py-1 d-flex align-items-center">
          <div class="icon px-3 d-flex justify-content-center align-items-center">
            <i class="fas fa-heart"></i>
          </div>
          <p class="m-0 px-3">Favorites</p>
        </div>
        <Favorites/>
        <div class="container py-1 d-flex align-items-center">
          <div class="icon px-3 d-flex justify-content-center align-items-center">
            <i class="fas fa-birthday-cake"></i>
          </div>
          <a class="actions text-dark m-0 px-3" href="https://www.chicmi.com/">CHICHI - Sponsor</a>
        </div>
        <div class="container py-1 d-flex align-items-center">
          <div class="icon px-3 d-flex justify-content-center align-items-center">
            <i class="fas fa-question"></i>
          </div>
          <p class="actions m-0 px-3">Support</p>
        </div>
        <div class="container py-1 d-flex flex-wrap align-items-center">
          <div class="icon px-3 d-flex justify-content-center align-items-center">
            <i class="fas fa-user-secret"></i>
          </div>
          <p class="actions m-0 px-3">Privacy Statement</p>
        </div>
        <div class="container py-1 d-flex flex-wrap align-items-center">
          <div class="icon px-3 d-flex justify-content-center align-items-center">
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <p class="actions m-0 px-3" @click="signOut">Log out</p>
        </div>
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
import Favorites from "@/components/Favorites.vue";
import { mapActions } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      defaultpic: require("../assets/default.jpg")
    }
  },
  components: {
    Fashheader,
    Navbar,
    Bottom,
    Favorites
  },
  methods: {
    ...mapActions(["signOut"])
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    }
  }
};
</script>

<style scoped>
img {
  width: 60px;
  height: 60px;
}

.icon {
  width: 30px;
  height: 30px;
}

p,
a {
  font-size: 19px
}

.actions:hover {
  cursor: pointer;
  color: rgb(66, 123, 138)  
}
</style>

