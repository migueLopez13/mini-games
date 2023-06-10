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
import { gameWinner, gameOver } from '../definitions'
import game from '../store.ts'

const message = computed(() => {
  return game.tries ? gameWinner : gameOver
})

const image = computed(() => {
  return game.tries ? 'logo.webp' : 'loser.webp'
})

const icon = computed(() => {
  return game.tries ? '🥳' : '😭😢🤮😭😢🤮'
})

const showDialog = ref<boolean>(true)
</script>

<style lang="scss" scoped></style>
