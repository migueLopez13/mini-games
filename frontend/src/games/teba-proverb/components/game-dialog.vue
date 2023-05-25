<template>
  <v-dialog v-model="showDialog" width="auto">
    <v-card>
      <v-card-text>
        {{ message }}
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

const showDialog = ref<boolean>(true)
</script>

<style lang="scss" scoped></style>
