<template>
  <v-app>
    <LeftMenu></LeftMenu>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import LeftMenu from './components/LeftMenu.vue';

</script>
