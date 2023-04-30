<script setup lang="ts">
const title = "Refranero de teba";
</script>

<template>
  <v-app-bar :elevation="2" color="blue">
    <template v-slot:append>
      <v-btn icon="mdi-share-variant" />
    </template>
    <div class="d-flex align-center">
      <v-img src="logo.webp" width="60px" />

      {{ title }}
    </div>
  </v-app-bar>
</template>
