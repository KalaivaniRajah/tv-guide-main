<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <h1><router-link to="/">TV Guide</router-link></h1>
      <button
        type="button"
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="form-inline ml-auto">
          <div class="container">
            <div class="row input-row">
              <input
                id="userInput"
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                v-model="inputField"
              />
            </div>
            <div class="row" style="padding: 0px; margin: 0px; height: 0px">
              <div
                class="invalid-feedback"
                style="visibility: hidden; margin-top: 0px; height: 5px"
              >
                Enter a valid Show name!
              </div>
            </div>
          </div>
          <li>
            <button-layout id="searchButton" @click="findShow"
              >Search
            </button-layout>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ButtonLayout from "./ButtonLayout.vue";
export default {
  components: { ButtonLayout },
  data() {
    return {
      searchedShow: null,
      inputField: "",
      allShows: [],
    };
  },
  computed: {
    ...mapGetters({
      topShows: "shows/shows",
    }),
  },
  methods: {
    findShow() {
      this.allShows = this.topShows;
      if (this.inputField) {
        this.searchedShow = this.allShows.find((show) => {
          return show.name.toLowerCase() === this.inputField.toLowerCase();
        });
        if (this.searchedShow) {
          document.getElementsByClassName(
            "invalid-feedback"
          )[0].style.visibility = "hidden";
          this.$router.push("/showdetails/" + this.searchedShow.id);
        } else {
          document.getElementsByClassName(
            "invalid-feedback"
          )[0].style.visibility = "visible";
        }
      } else {
        document.getElementsByClassName(
          "invalid-feedback"
        )[0].style.visibility = "visible";
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: 0px;
}
div {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

div a {
  text-decoration: none;
  color: #3a0061;
  display: inline-block;
  border: 1px solid transparent;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

div nav {
  width: 90%;
  margin: auto;
  display: contents;
  justify-content: space-between;
  align-items: center;
}

div ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: contents;
  justify-content: center;
  align-items: center;
}

li,
input {
  margin: 0 0.5rem;
}

.input-row {
  margin: 10px;
  height: 20px;
}
</style>
