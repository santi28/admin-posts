import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../views/Post.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Home,
    meta: { title: 'Usuarios' },
  },
  {
    path: '/posts/:id',
    name: 'Posts',
    component: Posts,
    meta: { title: 'Posts' },
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'Pagina no encontrada' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
