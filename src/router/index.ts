import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ModuleAlpha from '@/components/ModuleAlpha.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "main",
    component: ModuleAlpha,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
