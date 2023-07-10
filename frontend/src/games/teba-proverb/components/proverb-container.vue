<template>
  <div class="d-flex align-center flex-column">
    <div
      :class="{ 'proverb-wrapper': true, 'mt-10': !display.xs.value }"
      :style="{ width: display.xs.value ? '100%' : '70%' }"
    >
      <div
        v-for="(word, wordIndex) in game.getProverbMatrix"
        class="word"
        :key="wordIndex"
      >
        <proverb-word :word="word" />
      </div>
    </div>

    <div
      :class="{
        'text primary-text px-8 mt-10 text-center': true,
        'mobile-text': display.xs.value
      }"
    >
      {{ game.getProverbDescription }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import ProverbWord from './proverb-word.vue'
import game from '@/games/teba-proverb/store'

const display = useDisplay()
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
