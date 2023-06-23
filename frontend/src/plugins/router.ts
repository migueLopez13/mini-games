import ProverbGameView from '../games/teba-proverb/game-view.vue'
import WordSearchGameView from '../games/word-search/game-view.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/proverbs', component: ProverbGameView },
  { path: '/word-search', component: WordSearchGameView },
  { path: '/', component: ProverbGameView }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
