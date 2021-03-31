<template>
  <div class="row">
    
    <div id="demo" class="carousel slide" data-ride="carousel">
      
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>

      <!-- The slideshow -->
      <div class="carousel-inner">
          <show-item
          v-for="(item, index) in items"
          :key="item.id"
          :num="item.num"
          :name="item.name"
          :image="item.image"
          :network="item.network"
          :rating="item.rating"
          :index="index"
        ></show-item>
      </div>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>
    </div>
  </div>
</template>

<script>
import ShowItem from "./ShowItem.vue";
export default {
  name: "ShowList",
  components: {
    ShowItem,
  },
  props: ["items", "isActive"],
};
</script>

<style scoped>
.row {
  display: flex;
  flex-flow: inherit;
  width: 100vw;
}

.carousel-inner{
  width: 90vw;
  height: 75vh;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236c757d' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%236c757d' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}
.carousel-control-next-icon, .carousel-control-prev-icon {
  width: 24px;
  height: 24px;
}

</style>
