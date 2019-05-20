<template>
  <div>
    <Fashheader/>
    <h5 class="p-2 text-center">HOT TODAY</h5>
    <div class="container-fluid bg-light align-content-around d-flex flex-wrap p-0 py-3">
      <div
        v-for="(one, index) in news"
        :key="index"
        class="py-3 col-12 col-sm-6 col-md-4"
      >
        <div @click="newTab(one.url)" class="col-12 p-0 d-flex flex-wrap bg-white shadow rounded-lg">
          <div v-if="one.urlToImage" class="col-12 p-0">
            <img :src="one.urlToImage" class="w-100 h-100 rounded-top" alt="news.jpg">
          </div>
          <div class="col-12 d-flex align-items-start p-2 pb-0">
            <div>
              <p class="mb-0 text-dark font-weight-bold">{{one.title}}</p>
              <p class="mb-0 text-info">{{one.author}} from {{one.source.name}}</p>
              <p class="mb-0 text-muted">{{one.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom/>
    <Navbar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Fashheader from "@/components/Fashheader.vue";
import Navbar from "@/components/Navbar.vue";
import Bottom from "@/components/Bottom.vue";

export default {
  name: "Chosen",
  components: {
    Fashheader,
    Navbar,
    Bottom
  },
  computed: {
    news() {
      return this.$store.state.news;
    }
  },
  methods: {
    newTab(link) {
      window.open(link, "_blank");
    }
  }
};
</script>

<style>
</style>