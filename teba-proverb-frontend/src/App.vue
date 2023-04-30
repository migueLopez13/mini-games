<script setup lang="ts">
import game from "@/views/game";
import toolbar from "@/components/toolbar";
</script>

<template>
  <v-layout>
    <toolbar />
    <v-main>
      <game />
    </v-main>
  </v-layout>
</template>
