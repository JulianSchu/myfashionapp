<template>
  <form>
    <div class="form-group">
      <label class="text-white">Email</label>
      <input
        type="email"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="example@abc.com"
        v-model="userEmail"
        @keyup="getEmail(userEmail)"
      >
    </div>
    <div class="form-group">
      <label class="text-white">Password</label>
      <input type="password" class="form-control" placeholder="Password" v-model="userPassword" @keyup="getPassword(userPassword)">
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'EPform',
    data() {
      return {
        userEmail: '',
        userPassword: '',
        userName: ''
      }
    },
    methods: {
      ...mapActions(['getEmail', 'getPassword'])
    }
};
</script>

<style>
</style>
