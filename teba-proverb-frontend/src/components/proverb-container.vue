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
    <div v-for="word in proverbMatrix" class="word">
      <v-btn
        v-for="(letter, index) in word"
        :text="letter.hide ? '?' : letter.value"
        class="pa-0"
        :class="{ 'mr-8': index === word.length - 1 }"
        size="small"
        variant="tonal"
        rounded="0"
        :color="letter.hide ? 'red' : 'green'"
      />
    </div>
  </div>
</template>

<style>
.proverb-wrapper {
  display: inline-flex;
  gap: 6px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 50px;
}
.word {
  width: max-content;
}
</style>
