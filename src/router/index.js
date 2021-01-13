import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

import offersRoutes from './offersRoutes'
import userRoutes from './userRoutes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/users/UserForm.vue')
  },

  ...userRoutes,
  ...offersRoutes
]

const router = new VueRouter({
  routes
})

export default router
