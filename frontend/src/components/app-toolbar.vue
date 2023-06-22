<template>
  <v-app-bar :elevation="2" color="secondary" absolute>
    <template v-slot:append>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn variant="elevated" color="accent" v-bind="props">
            <div class="d-flex align-center subtitle mobile-text">
              Mis juegos
            </div>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(game, index) in games"
            :key="index"
            :value="index"
            :to="game.path"
          >
            {{ game.name }}
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
    <div class="d-flex align-center px-8 subtitle">Mini-games</div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
type gameLink = {
  name: string
  path: string
}
const games = ref<gameLink[]>([
  { name: 'Refranero de teba', path: '/proverbs' },
  { name: 'Sopa de letras', path: '/word-search' }
])
</script>
