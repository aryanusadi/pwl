import Vue from 'vue'
import VueRouter from 'vue-router'
import makanan from '../views/makanan.vue'
import minuman from '../views/minuman.vue'
import snack from '../views/snack.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/makanan',
    name: 'makanan',
    component: makanan
  },

  {
    path: '/minuman',
    name: 'minuman',
    component: minuman
  },

  {
    path: '/snack',
    name: 'snack',
    component: snack
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
