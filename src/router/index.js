import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import offersRoutes from './offersRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },

  ...offersRoutes
]

const router = new VueRouter({
  routes
})

export default router
