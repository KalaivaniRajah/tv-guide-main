<template>
  <div>
    <div class="container">
      <h3 class="nav nav-tabs">Comedy</h3>
      <show-list :items="topComedyShows"> </show-list>
      <h3 class="nav nav-tabs">Drama</h3>
      <show-list :items="topDramaShows"> </show-list>
      <h3 class="nav nav-tabs">Action</h3>
      <show-list :items="topActionShows"> </show-list>
    </div>
  </div>
</template>

<script>
import ShowList from "./ShowList.vue";
export default {
  components: {
    ShowList,
  },
  computed: {
    topShows() {
      return this.$store.getters["shows/shows"];
    },
    topComedyShows() {
      return this.$store.getters["shows/topComedyShows"];
    },
    topDramaShows() {
      return this.$store.getters["shows/topDramaShows"];
    },
    topActionShows() {
      return this.$store.getters["shows/topActionShows"];
    },
  },
  created() {
    this.loadShows();
  },
  methods: {
    loadShows() {
      this.$store.dispatch("shows/loadShows");
      this.$store.dispatch("shows/loadTopComedyShows");
      this.$store.dispatch("shows/loadTopDramaShows");
      this.$store.dispatch("shows/loadTopActionShows");
    },
  },
};
</script>
