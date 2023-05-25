<template>
  <div class="d-flex flex-column align-center">
    <div class="information-text">
      <v-icon icon="mdi-information-slab-circle-outline" color="blue" />
      <div class="text-medium-emphasis">
        {{ infoText }}
      </div>
    </div>
    <div class="d-flex keyboard-container">
      <div class="letter-discover-keyboard">
        <v-btn
          v-for="letter in keyboardLetters"
          :text="letter"
          size="small"
          rounded="0"
          :color="letter === letterSelected ? 'green' : 'grey'"
          :disabled="ProverbGame.lettersSelected.value.includes(letter)"
          @click="selectLetter(letter)"
        />
      </div>
      <v-btn
        size="x-small"
        rounded="0"
        color="blue"
        height="90px"
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

function handleKeydown(event) {
  if (ProverbGame.lettersSelected.value.length === 5) {
    return
  }
  if (event.key === 'Enter' && letterSelected.value) {
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

function selectLetter(letter: string) {
  letterSelected.value = letter
}

function sendSelectedLetter() {
  ProverbGame.discoverLetter(letterSelected.value)
  letterSelected.value = ''
}
</script>

<style scoped>
.information-text {
  width: 590px;
  padding: 10px;
  display: flex;
  gap: 2px;
  align-items: center;
}
.keyboard-container {
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
}

.letter-discover-keyboard {
  width: 515px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1px;
}
</style>
