<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home">Comedy</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu1">Drama</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu2">Action</a>
      </li>
    </ul>
    <div class="tab-content" style="width: 90vw">
      <div class="tab-pane container active" id="home">
        <show-list :items="topComedyShows" :isActive="true"> </show-list>
      </div>
      <div class="tab-pane container fade" id="menu1">
        <show-list :items="topDramaShows" :isActive="false"> </show-list>
      </div>
      <div class="tab-pane container fade" id="menu2">
        <show-list :items="topActionShows" :isActive="false"> </show-list>
      </div>
    </div>
  </div>
</template>

<script>
import ShowList from "./ShowList.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ShowList,
  },
  computed: {
    ...mapGetters({
      topShows: "shows/shows",
      topComedyShows: "shows/topComedyShows",
      topDramaShows: "shows/topDramaShows",
      topActionShows: "shows/topActionShows",
    }),
  },
  created() {
    this.loadShows();
    this.loadTopComedyShows();
    this.loadTopDramaShows();
    this.loadTopActionShows();
  },
  methods: {
    ...mapActions({
      loadShows: "shows/loadShows",
      loadTopComedyShows: "shows/loadTopComedyShows",
      loadTopDramaShows: "shows/loadTopDramaShows",
      loadTopActionShows: "shows/loadTopActionShows",
    }),
  },
};
</script>
