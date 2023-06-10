<template>
  <div class="letter-discover-container">
    <div class="information-text info text">
      <div>
        <v-icon icon="mdi-information-slab-circle-outline" color="accent" />
        {{ infoText }}
      </div>
      <v-btn
        color="blue-grey-darken-4"
        size="small"
        @click="game.openConfirmSkip = true"
      >
        Adivinar
      </v-btn>
    </div>

    <keyboard
      :selectedLetters="game.selectedLetters"
      @letter-selected="discoverLetter"
    />
  </div>
</template>
<script setup lang="ts">
import { infoText } from '../definitions.ts'
import keyboard from './keyboard.vue'
import { discoverLetter } from '../game-service'
import game from '../store.ts'
</script>

<style scoped lang="scss">
.letter-discover-container {
  width: 720px;
  .information-text {
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    gap: 2px;
    align-items: center;
  }
}
</style>
