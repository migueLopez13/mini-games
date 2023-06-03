<template>
  <div class="letter-discover-container">
    <div class="information-text info text">
      <v-icon icon="mdi-information-slab-circle-outline" color="accent" />
      {{ infoText }}
    </div>

    <keyboard
      :selectedLetters="ProverbGame.lettersSelected.value"
      @letter-selected="onLetterSelected"
    />
  </div>
</template>
<script setup lang="ts">
import { infoText, letters } from '../definitions.ts'
import keyboard from './keyboard.vue'
import ProverbGame from '../game-service'

function onLetterSelected(letter: string) {
  if (
    !letters.includes(letter) ||
    ProverbGame.lettersSelected.value.includes(letter)
  ) {
    return
  }

  ProverbGame.discoverLetter(letter)
}
</script>

<style scoped lang="scss">
.letter-discover-container {
  width: 720px;
  .information-text {
    padding-bottom: 10px;
    display: flex;
    gap: 2px;
    align-items: center;
  }
}
</style>
