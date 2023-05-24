<template>
  <v-app-bar :elevation="2" color="blue" class="toolbar">
    <template v-slot:append>
      <v-btn icon="mdi-restart" @click="restartGame" />
    </template>
    <div class="d-flex align-center">
      <v-img src="logo.webp" width="60px" />

      {{ pageTitle }}
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import ProverbGame from '../services/proverb-game.service.ts'
import { pageTitle } from '../constants/text.ts'

async function restartGame() {
  await ProverbGame.startGame()
}
</script>
