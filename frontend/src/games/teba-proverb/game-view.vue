<template>
  <v-row>
    <v-col cols="12" class="d-flex pt-12 px-12 align-center justify-center">
      <div :class="{ 'title mx-4': true, 'mobile-title': display.xs.value }">
        {{ pageTitle }}
      </div>

      <v-btn size="small" id="restart" icon color="primary" @click="startGame">
        <v-icon icon="mdi-restart" />
      </v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <proverb-container />
    </v-col>

    <v-col
      cols="12"
      :class="{
        'd-flex justify-center': triesInput
      }"
    >
      <tries-input v-if="game.selectedLetters.length > 4 || game.skipLetters" />
      <letter-discover v-else />
    </v-col>
    <game-dialog v-if="game.isFinished" />
    <guess-confirmation-dialog v-if="game.openConfirmSkip" />
  </v-row>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { startGame } from './game-service.ts'
import proverbContainer from './components/proverb-container.vue'
import letterDiscover from './components/letter-discover.vue'
import triesInput from './components/tries-input.vue'
import gameDialog from './components/game-dialog.vue'
import guessConfirmationDialog from './components/guess-confirmation-dialog.vue'
import { pageTitle } from './definitions.ts'
import { useDisplay } from 'vuetify'
import game from './store.ts'

const display = useDisplay()

onMounted(async () => {
  if (game.getProverb) {
    return
  }
  await startGame()
})
</script>
