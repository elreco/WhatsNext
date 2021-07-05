import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RestaurantIndex from "../views/restaurant/Index.vue";
import RestaurantView from "../views/restaurant/View.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/restaurants",
    name: "restaurant.index",
    component: RestaurantIndex,
  },
  {
    path: "/restaurant/:id/:alias",
    name: "restaurant.view",
    component: RestaurantView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
