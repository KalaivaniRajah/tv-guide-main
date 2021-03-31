<template>
  <div :class="getMainDivClass">
    <button-layout link mode="outline" :to="displayShowDetails">
    <div class="card img-fluid">
      <img class="card-img-top" :src="image" alt="Card image">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="row">
            <div class="col-9">{{ network }}</div>
            <div class="col-3">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-star-fill"
              viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
            </svg> {{ rating }}</div>
        </div>
      </div>
    </div>
    </button-layout>
  </div>
</template>

<script>
import ButtonLayout from "./../../components/layout/ButtonLayout.vue";
export default {
  props: ["num", "name", "image", "network", "rating", "index"],
  components: {
    ButtonLayout
  },
  computed: {
    getMainDivClass() {
      return (this.index === 0)? "carousel-item active" : "carousel-item";
    },
    displayShowDetails() {
      return "/showdetails/" + this.num;
    },
  },
};
</script>

<style scoped>
.outline {
  height: 70vh;
}

.card-img-top {
  width: 40%;
  align-self: center;
  height: 50%;
  margin-top: 5%;
}

.card {
  height:65vh;
  width: 50vw;
}

.btn-primary {
  margin: 10px;
  margin-left: 0px;
}

.carousel-item {
  padding-left: 20%;
}
</style>
