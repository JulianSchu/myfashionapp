<template>
  <div class="container">
    <p class="h3 text-primary mt-5">Basic chat example</p>

    <div>
      <button type="button" id="login" @click="logIn()">Log in!</button>
    </div>

    <div id="isLogin" class="mt-5">
      <div id="chat">
        <p>Simple chat example</p>
        <input id="message" type="text">
        <button @click="writeNewPost()">Send post</button>
      </div>

      <div id="posts" class="mt-5"></div>
    </div>
  </div>
</template>

<script>
import database from '@/services/database'

export default {
  name: "Home",
  data() {
    return {
      userName: "",
      email: ""
    };
  },
  methods: {
    logIn() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // The signed-in user info.
          var token = result.credential.accessToken;
          var user = result.user;
          this.userName = user.displayName;
          this.email = user.email;
          console.log("Logged in successfully");
          console.log(this.userName);
          console.log(this.email);
          console.log(user);
          this.getPost();
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
    writeNewPost() {
      let message = document.getElementById("message").value;
      console.log(message);

      // A post entry.
      var postData = {
        author: this.userName,
        body: message,
        date: new Date().toISOString()
      };

      // Get a key for a new Post.
      var newPostKey = firebase
        .database()
        .ref()
        .child("posts")
        .push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates["/posts/" + newPostKey] = postData;
      // updates['/user-posts/' + newPostKey] = postData;

      return firebasecd
        .database()
        .ref()
        .update(updates);
    },
    getPost() {
      let chatBox = document.getElementById("posts");
      firebase
        .database()
        .ref("posts/")
        .on("value", function(result) {
          console.log(result.val());
          let allPost = result.val();
          let template = "";
          for (key in allPost) {
            console.log(allPost[key].author);
            let author = allPost[key].author;
            let message = allPost[key].body;
            let date = allPost[key].date;
            template += `<div>
                            <p>${author}</p>
                            <p>${message}</p>
                            <p>${date}</p>
                        </div>`;
          }
          chatBox.innerHTML = template;
        });
    }
  }
};
</script>
