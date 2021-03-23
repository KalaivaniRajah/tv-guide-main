import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/shows/HomePage.vue";
import ShowDetails from "../views/shows/ShowDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/showdetails/:id", component: ShowDetails, props: true },
  ],
});

export default router;
