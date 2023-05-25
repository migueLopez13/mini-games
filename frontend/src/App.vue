<script setup lang="ts">
import game from './games/teba-proverb/game-view.vue'
import appToolbar from './components/app-toolbar.vue'
</script>

<template>
  <v-layout class="flex-column">
    <app-toolbar />
    <v-main>
      <game />
    </v-main>
  </v-layout>
</template>
