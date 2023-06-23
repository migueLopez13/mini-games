<template>
  <div :class="{ 'd-flex': true, 'flex-column': display.xs.value }">
    <div class="d-flex flex-column justify-center">
      <div
        v-for="keyboardRow in lettersRows"
        class="d-flex justify-center align-center"
      >
        <v-btn
          v-for="letter in keyboardRow.split('')"
          :text="letter"
          rounded="0"
          class="text notranslate"
          :size="display.xs.value ? 'x-small' : undefined"
          :color="letter === letterSelected ? 'primary' : 'grey'"
          :disabled="selectedLetters.includes(letter)"
          @click="selectLetter(letter)"
        />
      </div>
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
import { lettersRows } from '../definitions.ts'
import { useDisplay } from 'vuetify'

const display = useDisplay()
document.addEventListener('keydown', handleKeydown)

const letterSelected = ref('')
const submit = ref<HTMLElement>(null)

defineProps<{ selectedLetters: string[] }>()
const emit = defineEmits(['letterSelected'])

function blurRestartBtn() {
  const focused = document.activeElement
  if (focused instanceof HTMLElement && focused.id === 'restart') focused.blur()
}

function handleKeydown(event: KeyboardEvent) {
  const capitalKey = event.key.toUpperCase()
  if (capitalKey === 'ENTER' && letterSelected.value) {
    blurRestartBtn()
    sendSelectedLetter()
  }

  selectLetter(capitalKey)
}

function selectLetter(letter: string): void {
  letterSelected.value = letter
}

function sendSelectedLetter() {
  emit('letterSelected', letterSelected.value)
  letterSelected.value = ''
}
</script>
