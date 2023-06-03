<template>
  <div :class="{ 'd-flex': true, 'flex-column': display.xs.value }">
    <div class="d-flex flex-wrap justify-center align-center">
      <v-btn
        v-for="letter in keyboardLetters"
        :text="letter"
        rounded="0"
        class="text"
        :size="display.xs.value ? 'x-small' : undefined"
        :color="letter === letterSelected ? 'primary' : 'grey'"
        :disabled="ProverbGame.lettersSelected.value.includes(letter)"
        @click="selectLetter(letter)"
      />
    </div>

    <v-btn
      ref="submit"
      size="small"
      rounded="10"
      color="accent"
      :height="display.xs.value ? 'var(--v-btn-height)' : '110px'"
      :class="{ 'primary--text': true, 'ma-2': display.xs.value }"
      :disabled="!letterSelected"
      @click="sendSelectedLetter"
    >
      Enviar
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProverbGame from '../game-service.ts'
import { letters } from '../definitions.ts'
import { useDisplay } from 'vuetify'

const display = useDisplay()
document.addEventListener('keydown', handleKeydown)

const keyboardLetters = ref(letters.split(''))
const letterSelected = ref('')
const submit = ref<HTMLElement>(null)

function blurRestartBtn() {
  const focused = document.activeElement
  if (focused instanceof HTMLElement && focused.id === 'restart') focused.blur()
}

function handleKeydown(event) {
  const capitalKey = event.key.toUpperCase() as string
  if (ProverbGame.lettersSelected.value.length === 5) {
    return
  }
  if (capitalKey === 'ENTER' && letterSelected.value) {
    blurRestartBtn()
    sendSelectedLetter()
  }

  if (
    !letters.includes(capitalKey) ||
    ProverbGame.lettersSelected.value.includes(capitalKey)
  ) {
    return
  }

  selectLetter(capitalKey)
}

function selectLetter(letter: string): void {
  letterSelected.value = letter
}

function sendSelectedLetter() {
  ProverbGame.discoverLetter(letterSelected.value)
  letterSelected.value = ''
}
</script>

<style scoped lang="scss"></style>
