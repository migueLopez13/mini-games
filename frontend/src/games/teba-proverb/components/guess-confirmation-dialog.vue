<template>
  <v-dialog v-bind="$attrs" width="auto">
    <v-card>
      <v-card-text class="d-flex flex-column justify-center">
        <div>
          <p class="text">¿Estás seguro de que quieres adivinar?</p>
          <p>Perderás la opción de descubrir letras y no habrá vuelta atrás.</p>
        </div>
        <div class="d-flex pt-4 justify-center">
          <v-btn @click="confirm">Si</v-btn>
          <v-btn
            color="grey-darken-4"
            class="mx-2"
            @click="game.openConfirmSkip = false"
          >
            No
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import game from '../store.ts'

function confirm() {
  game.setOpenConfirmSkip(false)
  game.setSkipLetters(true)
}
</script>
