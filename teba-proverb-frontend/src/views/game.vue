<script setup lang="ts">
import { ref } from "vue";
import proverbContainer from "@/components/proverb-container";
import proverbApi from "../api/proverb.api";

const tries = ref(3);
const textToTry = ref("");
const label = "Adivina el refrán";
const placeholder = `intentos restantes ${tries.value}`;
const proverb = proverbApi.getProverb();

function userTry() {
  tries.value = tries.value--;
}
</script>

<template>
  <v-row>
    <v-col cols="12">
      <proverb-container :proverb="proverb" />
    </v-col>
    <v-col cols="12">
      <div class="ma-4">
        <v-text-field
          v-model="textToTry"
          :label="label"
          :placeholder="placeholder"
          variant="solo-filled"
          append-inner-icon="mdi-send"
        />
      </div>
    </v-col>
  </v-row>
</template>
