<template>
  <v-dialog v-model="showDialog" width="auto">
    <v-card>
      <v-card-text class="d-flex flex-column justify-center">
        <v-img :src="image" class="mx-auto" width="200px" height="200px" />
        <div class="text d-flex flex-wrap justify-center">
          <span>{{ icon }}</span>
          <span class="text-center">
            {{ message }}
          </span>
          <span>{{ icon }}</span>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import ProverbGame from '../game-service.ts'
import { gameWinner, gameOver } from '../definitions'

const message = computed(() => {
  return ProverbGame.tries.value ? gameWinner : gameOver
})

const image = computed(() => {
  return ProverbGame.tries.value ? 'logo.webp' : 'loser.webp'
})

const icon = computed(() => {
  return ProverbGame.tries.value ? '🥳' : '😭😢🤮😭😢🤮'
})

const showDialog = ref<boolean>(true)
</script>

<style lang="scss" scoped></style>
