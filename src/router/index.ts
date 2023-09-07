import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ExplainAll from '@/components/common/ExplainAll.vue';
import sortCardOneView from '@/components/games/sortCardOneView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/explain",
  },
  {
    path: "/explain",
    name: "exmplain",
    component: ExplainAll,
  },
  {
    path: "/sortCardOne",
    name: "sortCardOne",
    component: sortCardOneView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
