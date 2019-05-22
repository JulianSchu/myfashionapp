<template>
  <div
    class="modal fade"
    id="signupform"
    tabindex="-1"
    role="dialog"
    aria-labelledby="signupformTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content bg-dark">
        <div class="modal-header bg-light">
          <h5 class="modal-title" id="signupformTitle">Create Your Profile</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <SignUpUserName/>
          <EPform/>
        </div>
        <div class="modal-footer bg-light">
          <button type="button" class="btn btn-dark" @click="signUpEP" data-dismiss="modal">Sign Up</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EPform from "@/components/EPform.vue";
import SignUpUserName from "@/components/SignUpUserName.vue";
import { mapActions } from 'vuex';

export default {
  name: "Signup",
  components: {
    EPform,
    SignUpUserName
  },
  computed: {
    userEP() {
      return this.$store.state.userEP;
    }
  },
  methods: {
    ...mapActions(['signUpEP'])
  //   signUpEP() {
  //     let email = this.userEP.userEmail.toString();
  //     let password = this.userEP.userPassword.toString();
  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(result => {
  //         console.log(result)
  //       })
  //       .catch(function(error) {
  //         // Handle Errors here.
  //         var errorCode = error.code;
  //         var errorMessage = error.message;
  //         alert(errorCode + ':' + errorMessage)
  //       });
  //       // this.redirect()
  //   },
  //   redirect() {
  //     firebase.auth().onAuthStateChanged(user => {
  //       if (user) {
  //         alert('Thank you for signing up! You are now automatically signed in.')
  //         this.$router.push('/cities');
  //         console.log(user)
  //       }
  //     });
  //   }
  }
};
</script>

<style>
</style>
