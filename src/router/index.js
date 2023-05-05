import Vue from "vue";
import Router from "vue-router";

import home from "../components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/profile",
      component: () => import("../components/profile.vue")
    },
    {
      path: "/contact",
      component: () => import("../components/contact.vue")
    },
    {
      path: "/project",
      component: () => import("../components/project.vue")
    },
    {
      path: "/home",
      component: () => import("../components/home.vue")
    }
  ]
});
