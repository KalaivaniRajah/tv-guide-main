<template>
  <button-layout link mode="outline" :to="displayShowDetails">
    <div class="col" @click="test">
      <item-layout>
        <img :src="image" /><br />
        <span class="title" style="text-align: word-wrap">{{ name }}</span>
        <h6>{{ network }}</h6>
      </item-layout>
    </div>
  </button-layout>
</template>

<script>
import ButtonLayout from "../../components/layout/ButtonLayout.vue";
export default {
  components: { ButtonLayout },
  props: ["id", "name", "image", "network"],
  computed: {
    displayShowDetails() {
      return "/showdetails/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.col {
  margin: auto;
  max-width: 40rem;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: larger;
}

h4 {
  display: flex;
  justify-content: space-between;
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

h6 {
  margin: 0.5rem 0;
  font-size: medium;
}

img {
  max-width: 200px;
  height: 200px;
  width: 195px;
}
</style>
