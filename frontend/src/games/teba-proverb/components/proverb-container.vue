<template>
  <div
    :class="{ 'proverb-wrapper': true, 'mt-10': !display.xs.value }"
    :style="{ width: display.xs.value ? '100%' : '70%' }"
  >
    <div
      v-for="(word, wordIndex) in ProverbGame.proverbMatrix.value"
      class="word"
      :key="wordIndex"
    >
      <proverb-word :word="word" />
    </div>

    <div
      :class="{
        'text primary-text px-8 mt-3 text-center': true,
        'mobile-text': display.xs.value
      }"
    >
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import ProverbGame from '../game-service.ts'
import ProverbWord from './proverb-word.vue'
import { capitalize } from '../utils.ts'
import { computed } from 'vue'

const display = useDisplay()

const description = computed<string>(
  () => `''${capitalize(ProverbGame.proverbDescription)}''`
)
</script>

<style lang="scss">
.proverb-wrapper {
  display: inline-flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.word {
  width: max-content;
  display: flex;
  flex-wrap: nowrap;
}
</style>
