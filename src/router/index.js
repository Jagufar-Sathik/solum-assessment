import Vue from 'vue';
import VueRouter from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import store from '@/store/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: NavBar,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/components/HomePage.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/components/LoginPage.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  if (store.getters.isLogged || to.name === 'Login') {
    next();
  } else {
    next({ name: 'Login' });
  }
});

export default router;
