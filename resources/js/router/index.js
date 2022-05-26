import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/Terms.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
