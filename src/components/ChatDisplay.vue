<template>
  <div id="chatDisplay" class="display container d-flex flex-wrap align-items-end rounded-lg border py-3">
    <div v-for="(post, index) in posts" :key="index" class="w-100 d-flex flex-wrap m-0" :class="{'justify-content-end': post.uid == uid}">
      <div class="entry d-flex flex-wrap">
        <p class="m-0 text-white w-100">{{ post.author }}</p>
        <div class="chatbody rounded-lg w-100 p-1 d-flex align-items-center">
          <p class="m-0 text-dark text-break">{{ post.body }}</p>
        </div>
        <small class="w-100 text-white text-right mb-3">{{ post.date }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatDisplay",
  computed: {
    posts() {
    return this.$store.state.posts;
    },
    userName() {
      return this.$store.state.userName;
    },
    uid() {
      return this.$store.state.uid;
    }
  },
  updated() {
    let display = document.getElementById("chatDisplay");
    display.scrollTo({ top: display.scrollHeight, behavior: "smooth" });
  }
};
</script>

<style scoped>
.display {
  height: 80%;
  background: rgba(255, 255, 255, 0.116);
  overflow-y: scroll;
}

.entry {
  min-width: 60%;
  max-width: 70%
}

.chatbody {
  background: rgba(255, 255, 255, 0.8);
  min-height: 3rem;
}
</style>
