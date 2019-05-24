<template>
  <div class="login p-3 pt-0 rounded-lg shadow">
    <div class="d-flex flex-wrap justify-content-between mb-3">
      <h2 class="ml-3 shadow">F</h2>
      <h2 class="shadow">A</h2>
      <h2 class="mr-3 shadow">SH</h2>
    </div>
    <EPform/>
    <div class="d-flex justify-content-end align-items-center">
      <button
        type="button"
        class="btn text-info mx-3 py-1 bg-transparent border-info"
        data-toggle="modal"
        data-target="#signupform"
      >Sign Up</button>
      <button class="btn btn-info py-1 shadow" type="button" @click="logInEP">Log In</button>
    </div>
    <div class="py-3">
      <p class="text-white text-center mb-0">-- Or --</p>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <button class="btn btn-warning py-1 shadow" type="button" @click="logIn">
        <img class="rounded-circle" src="../assets/GoogleIcon.jpg" alt="google.jpg">
        Log in with Google Account
      </button>
    </div>
  </div>
</template>

<script>
import Fashheader from "@/components/Fashheader.vue";
import database from "@/services/database";
import EPform from "@/components/EPform.vue";
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {
    Fashheader,
    EPform
  },
  methods: {
    ...mapActions(['logIn', 'logInEP'])
  }
};
</script>

<style scoped>
.login {
  background-color: rgba(0, 22, 22, 0.45);
}

img {
  width: 30px;
}

h2 {
  font-family: 'Limelight', cursive;
  color: white;
}
</style>



