<template>
  <div class="proverb-wrapper">
    <div
      v-for="(word, wordIndex) in ProverbGame.proverbMatrix.value"
      class="word"
      :key="wordIndex"
    >
      <v-btn
        v-for="(letter, index) in word"
        :key="index"
        :text="letter.hide ? '?' : letter.value"
        :ripple="false"
        style="cursor: default"
        :class="{ 'mr-8': index === word.length - 1, 'pa-0': true }"
        size="large"
        rounded="0"
        elevation="0"
        :color="letter.hide ? 'red-lighten-1' : 'green-lighten-1'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProverbGame from '../game-service.ts'
</script>

<style>
.proverb-wrapper {
  width: 70%;
  display: inline-flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px;
}
.word {
  width: max-content;
}
</style>
