<template>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=yes"
  />
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <app-header></app-header>
  </nav>
  <router-view></router-view>
</template>

<script>
import AppHeader from "./components/layout/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
