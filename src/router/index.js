import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../views/Layout/DashboardLayout';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: '/posts/:id/comments',
        name: 'postDetails',
        component: () => import('../views/PostDetail.vue')
      },
      {
        path: '/posts/create',
        name: 'postCreate',
        component: () => import('../views/PostCreate.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
