<script setup lang="ts">
import { onMounted } from 'vue'
import ProverbGame from './game-service.ts'
import proverbContainer from './components/proverb-container.vue'
import letterDiscover from './components/letter-discover.vue'
import triesInput from './components/tries-input.vue'
import gameDialog from './components/game-dialog.vue'

onMounted(async () => {
  await ProverbGame.startGame() // <div>
})
</script>

<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <proverb-container />
    </v-col>
    <v-col cols="12">
      <tries-input v-if="ProverbGame.lettersSelected.value.length > 4" />
      <letter-discover v-else />
    </v-col>
    <game-dialog v-if="ProverbGame.gameIsFinished.value" />
  </v-row>
</template>
