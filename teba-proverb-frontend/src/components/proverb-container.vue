<script setup lang="ts">
import ProverbGame from "../services/proverb-game.service.ts";
</script>

<template>
  <div class="proverb-wrapper">
    <div v-for="word in ProverbGame.proverbMatrix.value" class="word">
      <v-btn
        v-for="(letter, index) in word"
        :text="letter.hide ? '?' : letter.value"
        :ripple="false"
        class="pa-0"
        style="cursor: default"
        :class="{ 'mr-8': index === word.length - 1 }"
        size="large"
        rounded="0"
        elevation="0"
        :color="letter.hide ? 'red-lighten-1' : 'green-lighten-1'"
      />
    </div>
  </div>
</template>

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
