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
          <input
            id="userInput"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <li>
            <button-layout @click="findShow">Search</button-layout>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import ButtonLayout from "./ButtonLayout.vue";
export default {
  components: { ButtonLayout },
  data() {
    return {
      searchedShow: null,
    };
  },
  methods: {
    findShow() {
      if (document.getElementById("userInput").value) {
        this.searchedShow = this.$store.getters["shows/shows"].find(
          (show) => show.name === document.getElementById("userInput").value
        );
        this.$router.push("/showdetails/" + this.searchedShow.id);
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
</style>
