<script setup lang="ts">
import appToolbar from './components/app-toolbar.vue'
</script>

<template>
  <v-layout class="flex-column" full-height>
    <app-toolbar />
    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>
