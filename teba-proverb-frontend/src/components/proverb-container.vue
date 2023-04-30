<script setup lang="ts">
const props = defineProps({
  proverb: {
    type: String,
    default: "",
  },
});

const proverbMatrix = matrixFromProverb(props.proverb);

function matrixFromProverb(proverb) {
  return proverb
    .split(" ")
    .map((word) =>
      word.split("").map((letter) => ({ value: letter, hide: true }))
    );
}
</script>

<template>
  <div class="proverb-wrapper">
    <div v-for="(word, index) in proverbMatrix" class="word">
      <v-btn
        v-for="letter in word"
        :text="letter.hide ? '?' : letter.value"
        class="pa-0"
        size="small"
        variant="tonal"
        rounded="0"
        :color="letter.hide ? 'red' : 'green'"
      />

      <v-btn v-if="index !== proverbMatrix.length - 1" flat />
    </div>
  </div>
</template>

<style>
.proverb-wrapper {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px;
}
.word {
  width: max-content;
}
</style>
