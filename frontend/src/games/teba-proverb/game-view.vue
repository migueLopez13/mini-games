<template>
  <v-row>
    <v-col cols="12" class="d-flex pt-12 px-12 align-center justify-center">
      <v-img src="logo.webp" max-width="100px" max-height="100px" />

      <div class="title mx-4">
        {{ pageTitle }}
      </div>

      <v-btn id="restart" icon color="primary" @click="restartGame">
        <v-icon icon="mdi-restart" />
      </v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <proverb-container />
    </v-col>

    <v-col cols="12" class="d-flex justify-center">
      <tries-input v-if="ProverbGame.lettersSelected.value.length > 4" />
      <letter-discover v-else />
    </v-col>
    <game-dialog v-if="ProverbGame.gameIsFinished.value" />
  </v-row>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ProverbGame from './game-service.ts'
import proverbContainer from './components/proverb-container.vue'
import letterDiscover from './components/letter-discover.vue'
import triesInput from './components/tries-input.vue'
import gameDialog from './components/game-dialog.vue'
import { pageTitle } from './definitions.ts'

onMounted(async () => {
  await ProverbGame.startGame() // <div>
})

const restartGame = async () => {
  await ProverbGame.startGame()
}
</script>
