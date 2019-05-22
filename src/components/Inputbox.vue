<template>
  <div class="input-group bg-white rounded-lg mt-3 d-flex flex-wrap align-items-center">
    <input
      id="message"
      type="text"
      class="form-control border-0 rounded"
      @keyup.enter="writeNewPost()"
    >
    <div class="input-group-append bg-white rounded-right">
      <button
        class="input-group-text shadow rounded bg-secondary text-white mx-3"
        @click="writeNewPost()"
      >
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "Inputbox",
  computed: {
    userName() {
      return this.$store.state.userName;
    },
    uid() {
      return this.$store.state.uid;
    },
    chosenCity() {
      return this.$store.state.chosenCity;
    },
    postsUpd() {
      return this.$store.state.postsUpd;
    }
  },
  methods: {
    writeNewPost() {
      let input = document.getElementById("message");
      let message = input.value;
      console.log(message);

      if (message != "") {
        let today = new Date().toISOString();
        let date = today.slice(0, 10);
        let time = new Date().toString().slice(16, 24);
        let messageTime = date + " " + time;

        // A post entry.
        var postData = {
          author: this.userName,
          body: message,
          uid: this.uid,
          date: messageTime
        };

        // Get a key for a new Post.
        let city = this.chosenCity.name;
        console.log(city);
        var newPostKey = firebase
          .database()
          .ref()
          .child(city)
          .child("posts")
          .push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates["/" + city + "/" + "/posts/" + newPostKey] = postData;

        // clear the input field
        input.value = "";

        firebase
          .database()
          .ref()
          .update(updates);
        }
      }
    }
};
</script>

<style scoped>
.input-group {
  height: 15%;
}
</style>
