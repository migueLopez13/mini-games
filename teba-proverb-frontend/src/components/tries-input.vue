<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <div class="tries-input-wrapper d-flex">
        Letras descubiertas:

        <div v-for="letter in ProverbGame.lettersSelected.value" class="mx-1">
          <v-chip size="small" variant="elevated" color="orange-darken-3">
            <div class="discovered-letter">
              {{ letter.toUpperCase() }}
            </div>
          </v-chip>
        </div>
      </div>
    </v-col>

    <v-col cols="12" class="d-flex justify-center">
      <div class="tries-input-wrapper">
        <v-text-field
          v-model="textToTry"
          :label="guessTheSaying"
          :placeholder="placeholder"
          variant="solo-filled"
          :error="error"
          :disabled="ProverbGame.gameIsFinished.value"
          @keyup.enter="handleUserTry"
        >
          <template v-slot:append-inner>
            <v-icon icon="mdi-send" @click="handleUserTry" />
          </template>
        </v-text-field>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { guessTheSaying } from '../constants/text'
import ProverbGame from '../services/proverb-game.service.ts'

const textToTry = ref<string>('')
const error = ref<boolean>(false)

const placeholder = computed(() => {
  return `Intentos restantes ${ProverbGame.tries.value}`
})

function handleUserTry() {
  ProverbGame.userTry(textToTry.value)

  if (!ProverbGame.gameIsFinished.value) {
    textToTry.value = ''
    error.value = true
  }
}
</script>
<style lang="scss" scoped>
.tries-input-wrapper {
  width: 70%;
}
.discovered-letter {
  width: 7px;
  text-align: center;
}
</style>
