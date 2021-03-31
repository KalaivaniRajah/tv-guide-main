<template>
  <div>
    <section>
      <button-layout link :to="home()"> Back </button-layout>
    </section>
    <section>
      <h1>{{ title() }}</h1>
    </section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6"><img :src="image()" /><br /></div>
        <div class="col-sm-6">
          <item-layout class="layout">
            <h2>Show Information</h2>
            <div class="row">
              <strong>Genre : </strong
              ><span class="title" style="text-align: word-wrap">{{
                genre()
              }}</span>
            </div>
            <div class="row">
              <strong>Network : </strong
              ><span class="title" style="text-align: word-wrap">{{
                network()
              }}</span>
            </div>
            <div class="row">
              <strong>Rating : </strong
              ><span class="title" style="text-align: word-wrap">{{
                rating()
              }}</span>
            </div>
            <div class="row">
              <strong>Premiered : </strong
              ><span class="title" style="text-align: word-wrap">{{
                premiered()
              }}</span>
            </div>
            <div class="row">
              <strong>Status : </strong
              ><span class="title" style="text-align: word-wrap">{{
                status()
              }}</span>
            </div>
            <div class="row">
              <strong>Site : </strong
              ><span class="title" style="text-align: word-wrap">{{
                site()
              }}</span>
            </div>
          </item-layout>
        </div>
      </div>
    </div>
    <section>
      <h3>{{ summary() }}</h3>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["num"],
  data() {
    return {
      selectedShow: null,
    };
  },
  computed: {
    ...mapGetters({
      topShows: "shows/shows",
    }),
  },
  methods: {
    title() {
      this.selectedShow = this.topShows.find((show) => {
        return show.id + "" === this.num + "";
      });
    },
    genre() {
      return this.selectedShow.genre;
    },
    image() {
      return this.selectedShow.image;
    },
    rating() {
      return this.selectedShow.rating;
    },
    network() {
      return this.selectedShow.network;
    },
    status() {
      return this.selectedShow.status;
    },
    premiered() {
      return this.selectedShow.premiered;
    },
    site() {
      return this.selectedShow.site;
    },
    summary() {
      return this.selectedShow.summary.replace(/<[^>]*>/g, "");
    },
    home() {
      return "/home";
    },
  },
  created() {
    console.log(this.num);
    this.selectedShow = this.topShows.find((show) => {
      return show.id + "" === this.num + "";
    });
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: inherit;
}
.special {
  flex-flow: nowrap;
}
.col {
  margin: auto;
  max-width: 40rem;
}
.layout {
  display: inline-grid;
}
section {
  padding: 10px;
}
h1 {
  color: navy;
}
h2 {
  margin-block-start: 0em;
  background: linear-gradient(45deg, skyblue, transparent);
}
h3 {
  font-weight: normal;
}
</style>
