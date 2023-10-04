import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ExplainAll from '@/components/common/ExplainAll.vue';
import sortCardOneView from '@/components/games/sortCardOneView.vue';
import liveLobby from '@/components/webrtc/liveLobby.vue';
import liveOneAndOne from '@/components/webrtc/liveOneAndOne.vue';
import liveService from '@/components/webrtc/liveService.vue';
import liveStreamer from '@/components/webrtc/liveStreamer.vue';
import liveViewer from '@/components/webrtc/liveViewer.vue';

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
  {
    path: "/oAolobby",
    name: "oneAndOneLobby",
    component: liveLobby,
  },
  {
    path: "/oAoRoom",
    name: "oneAndOneRoom",
    component: liveOneAndOne,
  },
  {
    path: "/oAoService",
    name: "Service",
    component: liveService,
  },
  {
    path: "/oAoStreamer",
    name: "Streamer",
    component: liveStreamer,
  },
  {
    path: "/oAoViewer",
    name: "Viewer",
    component: liveViewer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
