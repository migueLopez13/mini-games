<script setup lang="ts">
import { ref } from "vue";
const selectedLetters = ref(0);
const letters = "qwertyuiopasdfghjklñzxcvbnm";
const keyboardLetters = ref(
  letters.split("").map((letter) => ({ value: letter, selected: false }))
);

function selectLetter(index: number) {
  if (keyboardLetters.value[index].selected) {
    keyboardLetters.value[index].selected = false;
    selectedLetters.value--;
    return;
  }

  if (selectedLetters.value > 3) {
    return;
  }

  keyboardLetters.value[index].selected = true;
  selectedLetters.value++;
}
</script>

<template>
  <div class="d-flex keyboard-container">
    <div class="letter-discover-keyboard">
      <v-btn
        v-for="(letter, index) in keyboardLetters"
        :text="letter.value"
        size="small"
        rounded="0"
        :color="letter.selected ? 'green' : 'grey'"
        @click="selectLetter(index)"
      />
    </div>
    <v-btn
      icon="mdi-send-variant"
      size="small"
      rounded="0"
      color="blue"
      height="90px"
      :disabled="selectedLetters <= 3"
    />
  </div>
</template>

<style scoped>
.keyboard-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
}

.letter-discover-keyboard {
  width: 520px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1px;
}
</style>
