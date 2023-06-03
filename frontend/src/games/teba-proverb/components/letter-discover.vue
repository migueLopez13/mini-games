<template>
  <div class="letter-discover-container">
    <div class="information-text info text">
      <v-icon icon="mdi-information-slab-circle-outline" color="accent" />
      {{ infoText }}
    </div>

    <keyboard></keyboard>
  </div>
</template>
<script setup lang="ts">
import { infoText } from '../definitions.ts'
import keyboard from './keyboard.vue'
</script>

<style scoped lang="scss">
.letter-discover-container {
  width: 720px;
  .information-text {
    padding-bottom: 10px;
    display: flex;
    gap: 2px;
    align-items: center;
  }
}
</style>
