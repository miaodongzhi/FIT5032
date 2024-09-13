import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'; // Signin 页面
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'; // Register 页面
import AddBookView from '@/views/AddBookView.vue'; // Add book 页面
import BookList from '../views/BookList.vue'; // 新增的 BookList 页面

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
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView, // Signin 页面
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView, // Register 页面
  },
  {
    path: '/AddBook',
    name: 'AddBook',
    component: AddBookView, // Add book 页面
  },
  {
    path: '/book-list',
    name: 'BookList',
    component: BookList, // 新增的 BookList 路由
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
