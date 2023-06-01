import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MarkovView from '../views/MarkovView.vue'
import StatsView from '../views/StatsView.vue'
import TextToSpeechView from '../views/TextToSpeechView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/markov',
    name: 'markov',
    component: MarkovView,
  },
  {
    path: '/stats',
    name: 'stats',
    component: StatsView,
  },
  {
    path: '/tts',
    name: 'tts',
    component: TextToSpeechView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
