import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function loadView (view: string) {
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  return () => import(/* webpackChunkName: "$view" */ `@/views/${view}.vue`)
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: loadView('AboutView')
  },
  {
    path: '/fizzbuzz',
    name: 'fizzbuzz',
    component: loadView('FizzBuzzView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
