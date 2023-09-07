<template>
  <v-app-bar app dark>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app dark>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Laboratory </v-list-item-title>
        <v-list-item-subtitle> Bundles </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-spacer></v-spacer>

    <v-list density="comfortable">
      <v-list-item v-for="menu in oneDepthItems" :key="menu.id" :to="menu.to" :prepend-icon="menu.icon">
        <v-list-item-title>{{ menu.title }}</v-list-item-title>
      </v-list-item>

      <v-list-group v-for="menu in twoDepthsItems" :key="menu.id" :value="menu.title" :prepend-icon="menu.icon">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :title="menu.title"></v-list-item>
        </template>
        <v-list-item v-for="child in menu.childrens" :key="child.id" :value="child.title" :prepend-icon="child.icon" :title="child.title" :to="child.to">
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
const oneDepthItems = [
  { title: "Explain", icon: "mdi-cube", to: "/explain", id: 1 },
]
const twoDepthsItems = [
  {
    title: "Games", icon: "mdi-gamepad-square", id: 1,
    childrens: [
      { title: "sortCard Ⅰ", icon: "mdi-cards-spade", to: "/sortCardOne", id: 101 },
      // { title: "3D", icon: "mdi-panorama", to: "/3d_gallary", id: 502 },
    ]
  },
];
</script>

<style scoped></style>