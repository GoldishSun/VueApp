<template>
  <v-container id="SubmitArea">
    <v-row>
      <v-col cols="2" ref="sbm1" class="dropIt"></v-col>
      <v-col cols="2" ref="sbm2" class="dropIt"></v-col>
      <v-col cols="2" ref="sbm3" class="dropIt"></v-col>
      <v-col cols="2" ref="sbm4" class="dropIt"></v-col>
      <v-col cols="2" ref="sbm5" class="dropIt"></v-col>
      <v-col cols="2" ref="sbm6" class="dropIt"></v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="2" ref="sbm1" class="dragIt">
        <div class="casinoCard" id="one"></div>
      </v-col>
      <v-col cols="2" ref="sbm1" class="dragIt">
        <div class="casinoCard" id="two"></div>
      </v-col>
      <v-col cols="2" ref="sbm1" class="dragIt">
        <div class="casinoCard" id="three"></div>
      </v-col>
      <v-col cols="2" ref="sbm1" class="dragIt">
        <div class="casinoCard" id="four"></div>
      </v-col>
      <v-col cols="2" ref="sbm1" class="dragIt">
        <div class="casinoCard" id="five"></div>
      </v-col>
      <v-col cols="2" ref="sbm1" class="dragIt">
        <div class="casinoCard" id="six"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';

const selected = reactive([]);
onMounted(() => {
  const cards = document.querySelectorAll(".casinoCard");
  cards.forEach((ele) => {
    ele.addEventListener("mouseover", () => {
      ele.classList.add('hoverCard')
    });
    ele.addEventListener("mouseout", () => {
      ele.classList.remove('hoverCard');
    });
    ele.addEventListener("click", () => {
      if(ele.classList.contains('activeCard')){
        ele.classList.remove('activeCard');
      } else {
        ele.classList.add('activeCard');
      }
    });
  })
})
</script>

<style scoped>
.dropIt{
  width: 11vw;
  height: 15vw;
  border: 1px #333333 solid;
  align-items: center;
  vertical-align: middle;
}
.dragIt{
  vertical-align: middle;
}
.casinoCard {
  width: 10vw;
  height: 14vw;
  border: 1px white solid;
  background: #888888;
}
.hoverCard {
  background: #555555;
}
.activeCard {
  background: #333333;
}
</style>