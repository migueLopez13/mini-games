<script setup lang="ts">
import { ref } from "vue";
import proverbApi from "../api/api-proverb.ts";
import { ProverbGame } from "../services/proverb-game.service.ts";
import proverbContainer from "../components/proverb-container.vue";
import letterDiscover from "../components/letter-discover/letter-discover.vue";

const proverb = proverbApi.getProverb();
const game = new ProverbGame();
const textToTry = ref("");
const placeholder = `intentos restantes ${game.tries}`;
</script>

<template>
  <v-row>
    <v-col cols="12">
      <proverb-container :proverb="proverb" />
    </v-col>
    <v-col cols="12">
      <div v-if="game.lettersSelected" class="ma-4">
        <v-text-field
          v-model="textToTry"
          label="Adivina el refrán"
          :placeholder="placeholder"
          variant="solo-filled"
          append-inner-icon="mdi-send"
        />
      </div>
      <letter-discover v-else />
    </v-col>
  </v-row>
</template>
