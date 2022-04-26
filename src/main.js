import App from "./App.vue"; // App.jsx
import vitedge from "vitedge";
import { createRouter, createWebHistory } from "vue-router";

const routes = [{ path: "/", component: App }];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default vitedge(
  App,
  { routes },
  ({ app, router, isClient, initialState }) => {
    // Custom setup hook.
    // E.g. set initialState in a store, install plugins, etc.
  }
);
