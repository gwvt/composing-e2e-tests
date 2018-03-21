import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from './components/MainLayout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'select-musician',
      component: MainLayout,
    },
    {
      path: '/:musician/select-album',
      name: 'select-album',
      component: MainLayout,
    },
    {
      path: '/:musician/:pageType/:instrumentAlbum/:pageId',
      name: 'pages',
      component: MainLayout,
    },
  ],
});
