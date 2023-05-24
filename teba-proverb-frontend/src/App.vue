<script setup lang="ts">
import game from './views/game.vue'
import toolbar from './components/toolbar.vue'
</script>

<template>
  <v-layout class="flex-column">
    <toolbar />
    <v-main>
      <game />
    </v-main>
  </v-layout>
</template>
