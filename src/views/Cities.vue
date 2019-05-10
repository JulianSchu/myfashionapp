<template>
  <div>
    <div class="d-none d-md-block">

    </div>
    <div class="container-fluid px-0 p-md-2 d-flex flex-wrap align-items-center">
      <div class="col-12 col-lg-6 p-0 p-md-2" v-for="(city, index) in cities" :key="index">
        <div :id="city.value" class="city-pic bg-dark text-white w-100">
          <router-link
            :to="{name: 'Chosen', params:{ chosenCity: city.value, chosenName: city.name}}"
            class="router-link d-flex justify-content-center align-items-center"
          >
            <p class="display-3 text-white text-center">{{city.name}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Fashheader from "@/components/Fashheader.vue";

export default {
  name: "Cities",
  components: {
    Fashheader
  },
  data() {
    return {
      cities: [
        { name: "LONDON", value: "london", url: "../assets/London.jpg" },
        { name: "NEW YORK", value: "new-york", url: "../assets/New_York.jpg" },
        {
          name: "LOS ANGELES",
          value: "los-angeles",
          url: "../assets/Los_Angeles.jpg"
        },
        {
          name: "SAN FRANCISCO",
          value: "san-francisco",
          url: "../assets/San_Francisco.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container-fluid {
  height: 100vh;
}

#london {
  background-image: url(../assets/London.jpg);
}

#new-york {
  background-image: url(../assets/New_York.jpg);
}

#los-angeles {
  background-image: url(../assets/Los_Angeles.jpg);
}

#san-francisco {
  background-image: url(../assets/San_Francisco.jpg);
}

.city-pic {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 0;
}

.city-pic::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(253, 216, 146, 0.192);
}

.router-link {
  min-height: 250px;
  position: relative;
}

.router-link:hover {
  text-decoration: none;
}

p {
  font-family: 'Mukta Mahee', sans-serif;
  font-weight: 400
}
</style>

