<template>
  <div class="container-fluid bg-light px-0 py-3">
    <div class="container">
      <div class="col-12 p-0">
        <div class="input-group flex-nowrap p-0">
          <input
            id="search"
            type="text"
            class="form-control py-0 border border-right-0"
            :placeholder="searchStr || 'Search for event name'"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            v-model="sStr"
            @keyup="getSearchStr(sStr.toLowerCase())"
          >
          <div class="input-group-prepend">
            <button class="bg-white border border-left-0 border-right-0 pr-3" @click="clearSearch()"><i class="fas fa-times-circle text-muted"></i>
            </button>
            <span
              class="input-group-text text-dark font rounded-right py-0"
              id="addon-wrapping"
              @click="getSearchStr(sStr.toLowerCase())"
            >
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Searchbar",
  data() {
    return {
      sStr: ''
    };
  },
  methods: {
    ...mapActions(["getSearchStr"]),
    clearSearch(){
        let input = document.getElementById('search')
        input.value = '';
        this.sStr = '';
        this.getSearchStr(this.sStr)
    }
  },
  computed: {
    searchStr() {
        return this.$store.state.searchStr;
    }
  }
};
</script>

<style>
</style>