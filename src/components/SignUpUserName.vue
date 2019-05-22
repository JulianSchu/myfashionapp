<template>
    <div class="form-group">
      <label class="text-white">User Name</label>
      <input type="text" class="form-control" placeholder="User Name" v-model="userName" @keyup="getUserName(userName)">
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'SignUpUserName',
    data() {
      return {
        userName: ''
      }
    },
    methods: {
      ...mapActions(['getUserName'])
    }
}
</script>

<style>

</style>
