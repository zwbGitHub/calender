import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/day',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/day',
        name: 'day',
        component: () => import('../views/Day.vue')
      },
      {
        path: '/month',
        name: 'month',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Month.vue')
      },
      {
        path: '/year',
        name: 'year',
        component: () => import('../views/Year.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
