<template>
  <div id="favorites">
    <ul class="mb-0">
      <li v-for="(fav, index) in favorites" :key="index" @click="setEvent(fav)">
        <i @click="remove(fav)" class="far fa-trash-alt pr-3"></i>
        <router-link class="router-link text-info" to="/chosenevent">{{ fav.event_name }}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "Favorites",
  computed: {
    favorites() {
      return this.$store.state.favorites;
    },
    uid() {
      return this.$store.state.uid;
    },
    chosenCity() {
      return this.$store.state.chosenCity;
    },
  },
  methods: {
   ...mapActions(["setEvent"]),
   remove(fav) {
     firebase
          .database()
          .ref("/" + this.chosenCity.name + "/favorite/" + this.uid + "/" + fav.event_id)
          .remove();
   }
  }
};
</script>

<style scoped>
#favorites {
    padding-left: 25px;
    max-height: 300px;
    overflow-y: scroll;
}

ul {
  list-style: none
}

li {
    min-height: 30px;
}

li:last-child {
  margin-bottom: 1rem
}
.far{
  font-size: 10px;
  
}
</style>

