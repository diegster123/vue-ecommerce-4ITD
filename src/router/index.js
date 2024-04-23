// router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue' // Import your LoginForm component
import Home from '../components/HomePage.vue' // Example component for home page

const routes = [
  {
  	path: '/',
  	name: 'Home',
  	component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  }
  // Add more routes as needed
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
