import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/:id",
      name: "service",
      props: true,
      component: () => import("../components/MyService.vue"),
    },
    {
      path: "/message",
      name: "message",
      component: () => import("../views/MessageView.vue"),
    },
    {
      path: "/notification",
      name: "notification",
      component: () => import("../views/NotificationsView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../components/MyCart.vue"),
    },

    {
      path: "/sales",
      name: "sales",
      component: () => import("../components/MySale.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/SettingsView.vue"),
    },
  ],
});

export default router;
