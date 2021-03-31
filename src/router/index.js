import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/shows/HomePage.vue";
import ShowDetails from "../views/shows/ShowDetails.vue";
import NotFound from "../components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/showdetails/:num", component: ShowDetails, props: true },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
