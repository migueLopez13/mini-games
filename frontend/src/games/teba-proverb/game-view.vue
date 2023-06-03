<template>
  <v-row>
    <v-col cols="12" class="d-flex pt-12 px-12 align-center justify-center">
      <div :class="{ 'title mx-4': true, 'mobile-title': display.xs.value }">
        {{ pageTitle }}
      </div>

      <v-btn
        size="small"
        id="restart"
        icon
        color="primary"
        @click="restartGame"
      >
        <v-icon icon="mdi-restart" />
      </v-btn>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <proverb-container />
    </v-col>

    <v-col
      cols="12"
      :class="{
        'd-flex justify-center text primary-text px-8 text-center': true,
        'mobile-text': display.xs.value
      }"
    >
      {{ description }}
    </v-col>

    <v-col
      cols="12"
      :class="{
        'd-flex justify-center': triesInput,
        'mt-4': !display.xs.value
      }"
    >
      <tries-input v-if="ProverbGame.lettersSelected.value.length > 4" />
      <letter-discover v-else />
    </v-col>
    <game-dialog v-if="ProverbGame.gameIsFinished.value" />
  </v-row>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import ProverbGame from './game-service.ts'
import proverbContainer from './components/proverb-container.vue'
import letterDiscover from './components/letter-discover.vue'
import triesInput from './components/tries-input.vue'
import gameDialog from './components/game-dialog.vue'
import { pageTitle } from './definitions.ts'
import { useDisplay } from 'vuetify'
import { capitalize } from './utils.ts'

const display = useDisplay()

onMounted(async () => {
  await ProverbGame.startGame()
})

const restartGame = async () => {
  await ProverbGame.startGame()
}

const description = computed<string>(
  () => `''${capitalize(ProverbGame.proverbDescription)}''`
)
</script>
