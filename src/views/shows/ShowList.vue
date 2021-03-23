<template>
  <div class="row">
    <show-item
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :name="item.title"
      :image="item.image"
      :network="item.network"
    ></show-item>
  </div>
</template>

<script>
import ShowItem from "./ShowItem.vue";
export default {
  name: "ShowList",
  components: {
    ShowItem,
  },
  props: ["items"],
};
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: inherit;
  width: 100vw;
  overflow: scroll;
}
</style>
