import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/login.vue";
import GamePage from "../views/game.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginPage
  },
  {
    path: "/game",
    name: "Game",
    component:GamePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
