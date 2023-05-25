<template>
  <v-app-bar :elevation="2" color="blue" class="toolbar">
    <div class="d-flex align-center">
      <v-img src="logo.webp" width="60px" />

      {{ pageTitle }}
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { pageTitle } from '../games/teba-proverb/definitions.ts'
</script>
