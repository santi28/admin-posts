import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Posts from '../views/Post.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/posts/:id',
    name: 'Posts',
    component: Posts,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
