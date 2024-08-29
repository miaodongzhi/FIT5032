import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';  // login componement here

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }  // add requirement
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView  // add login rounter
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// after create rounter
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;