<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <div class="tries-input-wrapper d-flex align-center">
        <div
          :class="{
            'subtitle info-text mr-2': true,
            'mobile-text': display.xs.value
          }"
        >
          Letras descubiertas:
        </div>

        <div
          v-for="(letter, index) in ProverbGame.lettersSelected.value"
          :key="index"
          class="mx-1"
        >
          <v-btn
            icon
            :size="display.xs.value ? 'x-small' : 'small'"
            color="accent"
          >
            <span class="text mobile-text">
              {{ letter.toUpperCase() }}
            </span>
          </v-btn>
        </div>
      </div>
    </v-col>

    <v-col cols="12" class="d-flex justify-center">
      <div class="tries-input-wrapper">
        <v-text-field
          v-model="textToTry"
          :label="guessTheSaying"
          :placeholder="placeholder"
          autofocus
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
import { guessTheSaying } from '../definitions.ts'
import ProverbGame from '../game-service.ts'
import { removeAccentMarks } from '../utils'
import { useDisplay } from 'vuetify'

const display = useDisplay()

const textToTry = ref<string>('')
const error = ref<boolean>(false)

const placeholder = computed(() => {
  return `Intentos restantes ${ProverbGame.tries.value}`
})

function handleUserTry() {
  const fixedText = removeAccentMarks(textToTry.value)
  ProverbGame.userTry(fixedText)

  if (ProverbGame.tries.value === 4) return

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
