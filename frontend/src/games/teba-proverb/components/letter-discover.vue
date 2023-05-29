<template>
  <div class="letter-discover-container">
    <div class="information-text info text">
      <v-icon icon="mdi-information-slab-circle-outline" color="accent" />
      {{ infoText }}
    </div>

    <div class="keyboard-container">
      <div class="d-flex flex-wrap justify-center align-center">
        <v-btn
          v-for="letter in keyboardLetters"
          :text="letter"
          rounded="0"
          class="text"
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
        height="110px"
        class="primary--text"
        :disabled="!letterSelected"
        @click="sendSelectedLetter"
      >
        Enviar
      </v-btn>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ProverbGame from '../game-service.ts'
import { letters, infoText } from '../definitions.ts'

document.addEventListener('keydown', handleKeydown)

const keyboardLetters = ref(letters.split(''))
const letterSelected = ref('')
const submit = ref<HTMLElement>(null)

function blurRestartBtn() {
  const focused = document.activeElement
  if (focused instanceof HTMLElement && focused.id === 'restart') focused.blur()
}

function handleKeydown(event) {
  if (ProverbGame.lettersSelected.value.length === 5) {
    return
  }
  if (event.key === 'Enter' && letterSelected.value) {
    blurRestartBtn()
    sendSelectedLetter()
  }

  if (
    !letters.includes(event.key) ||
    ProverbGame.lettersSelected.value.includes(event.key)
  ) {
    return
  }

  selectLetter(event.key)
}

function selectLetter(letter: string): void {
  letterSelected.value = letter
}

function sendSelectedLetter() {
  ProverbGame.discoverLetter(letterSelected.value)
  letterSelected.value = ''
}
</script>

<style scoped lang="scss">
.letter-discover-container {
  width: 720px;
  .information-text {
    padding-bottom: 10px;
    display: flex;
    gap: 2px;
    align-items: center;
  }

  .keyboard-container {
    display: flex;
  }
}
</style>
