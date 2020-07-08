import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "Login" */"@/views/Login.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "About" */"@/views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
