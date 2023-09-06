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

    <v-list density="compact">
      <v-list-item-group active-class="white--text">
        <template v-for="menu in items">
          <template v-if="menu.childrens">
            <!-- <v-list-group :key="menu.id">
              <template v-slot:activator>
                <v-icon>{{ menu.icon }}</v-icon>
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
              </template>
              <template v-for="children in menu.childrens" :key="children.id">
                <v-list-item :to="children.to" class="ml-2" :active-class="`accent-4 white--text`">
                  <v-list-item-icon :active-class="`accent-4`">
                    <v-icon>{{ children.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>
                    {{ children.title }}
                  </v-list-item-title>
                </v-list-item>
              </template>
            </v-list-group> -->
          </template>
          <template v-else>
            <v-list-item :key="menu.id" :to="menu.to">
              <v-icon>{{ menu.icon }}</v-icon>
              <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </template>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
const items = [
  { title: "Cube", icon: "mdi-cube", to: "/", id: 1 },
  { title: "Car", icon: "mdi-car", to: "/section2", id: 2 },
  { title: "AroundView", icon: "mdi-view-dashboard", to: "/section3", id: 3 },
  { title: "EarthMoon", icon: "mdi-earth", to: "/earth", id: 4 },
  {
    title: "Gallary", icon: "mdi-panorama-variant", id: 5,
    childrens: [
      { title: "2D", icon: "mdi-cone", to: "/gallary", id: 501 },
      { title: "3D", icon: "mdi-cone", to: "/3d_gallary", id: 502 },
    ]
  },
];

</script>

<style scoped></style>