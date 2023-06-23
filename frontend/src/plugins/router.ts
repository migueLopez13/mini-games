import ProverbGameView from '../games/teba-proverb/game-view.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/proverbs', component: ProverbGameView },
  { path: '/', component: ProverbGameView }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
