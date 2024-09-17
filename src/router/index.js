import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/home/home.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/view/about.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/view/contact.vue'),
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('@/view/service.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
