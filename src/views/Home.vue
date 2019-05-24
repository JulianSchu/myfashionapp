<template>
  <div>
    <div class="home container-fluid d-flex flex-wrap justify-content-center align-items-center">
      <div class="home-overlay">
        <Login/>
      </div>
    </div>
    <Signup/>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

export default {
  name: "Home",
  components: {
    Login,
    Signup
  }
};
</script>

<style scoped>
.home {
  background-image: url(../assets/Fash.jpg);
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0;
  animation-name: schrink;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.home:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(253, 210, 146, 0.23);
}

.home-overlay {
  position: relative;
  animation-name: stay;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes schrink {
  from {
    transform: scale(1.5);
  }
  to {
    transform: scale(1);
  }
}

@keyframes stay {
  from {
    transform: scale(0.6666);
  }
  to {
    transform: scale(1);
  }
}
</style>