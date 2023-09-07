<template>
  <v-container>
    <v-row>
      <v-col>
        <div ref="blackboard"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, Ref } from 'vue';

const speed = 50;
const explain_text_obj = reactive({
  step1: {
    itv: null,
    clicked: false,
    cursor: 0,
    text: `안녕하세요. 일단 할말은 없지만 아무거나 써봤어요:)|
    현재 보고 계신 곳을 간단하게 설명해 볼게요!|
    여기서 이런 저런 것들을 모듈화하여 개발하고 테스트하고 적용하기 위한 곳이에요.|
    왼쪽 사이드 메뉴들에서 확인해 주세요!`
  }
});

const blackboard: Ref<null> = ref(null)

const start = () => {
  if (explain_text_obj.step1.clicked) return;
  const temp = setInterval(() => {
    const text = explain_text_obj.step1.text[explain_text_obj.step1.cursor];
    if(text === '|') blackboard.value.innerHTML += "<br/>";
    else blackboard.value.innerHTML += text;
    explain_text_obj.step1.cursor++;
    if (explain_text_obj.step1.cursor >= explain_text_obj.step1.text.length) {
      clearInterval(temp);
      explain_text_obj.step1.clicked = true;
    }
  }, 1000 / speed);
}

onMounted(() => {
  start();
})


</script>

<style></style>