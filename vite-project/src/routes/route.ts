import * as vRouter from 'vue-router'
import Dashboard from "@pages/Dashboard.vue";
import Pnf from '@pages/NotFoundPage.vue'
const _routes:Array<vRouter.RouteRecordRaw> = [
  {
    path: '/',
    component: Dashboard,
    name: 'home'
  },  {
    path: '/demo',
    component: () => import("@pages/DemoPage.vue"),
    name: 'demo'
  },
  {
    path: '/auth',
    component: () => import("@pages/AuthPage.vue"),
    name: 'auth'
  },
  {
    path: '/pnf',
    component: Pnf,
    name: 'NotFoundPage'
  },

]
const router = vRouter.createRouter({
  history: vRouter.createWebHistory(),
  routes: _routes,
})

export default router
