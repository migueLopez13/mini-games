<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <div
        v-if="game.selectedLetters.length"
        class="tries-input-wrapper d-flex align-center"
      >
        <div
          :class="{
            'subtitle info-text mr-2': true,
            'mobile-text': display.xs.value
          }"
        >
          Letras descubiertas:
        </div>

        <div
          v-for="(letter, index) in game.selectedLetters"
          :key="index"
          class="mx-1"
        >
          <v-btn
            icon
            :size="display.xs.value ? 'x-small' : 'small'"
            :color="
              isCorrectLetter(letter.toUpperCase()) ? 'accent' : 'red-accent-4'
            "
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
          v-model="game.userGuess"
          :label="guessTheSaying"
          :placeholder="placeholder"
          autofocus
          variant="solo-filled"
          :error="game.getInputError"
          :disabled="game.isFinished"
          @keyup.enter="userTry(game.userGuess)"
        >
          <template v-slot:append-inner>
            <v-icon icon="mdi-send" @click="userTry(game.userGuess)" />
          </template>
        </v-text-field>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { guessTheSaying } from '../definitions.ts'
import { useDisplay } from 'vuetify'
import { userTry, isCorrectLetter } from '../game-service'
import game from '../store.ts'

const display = useDisplay()

const placeholder = computed(() => {
  return `Intentos restantes ${game.tries}`
})
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
