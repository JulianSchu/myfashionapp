<template>
  <div id="app">
    <div id="nav" class="text-white">
      <router-link to="/" class="text-white">Home</router-link> |
      <router-link to="/cities" class="text-white">Cities</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.container {
  max-width: 900px;
}

.router-link,
.router-link:hover {
  text-decoration: none;
}

.hovercard {
  padding: 15px
}
.hovercard:hover {
  padding: 5px;
}
</style>
