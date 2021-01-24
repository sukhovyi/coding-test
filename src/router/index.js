import Vue from 'vue';
import Router from 'vue-router';
import ManagePosts from '../pages/ManagePosts';
import CreatePost from '../pages/CreatePost';
import EditPost from '../pages/EditPost';
import Pages from './Pages';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: Pages.MANAGE_POSTS,
      component: ManagePosts,
    },
    {
      path: '/create',
      name: Pages.CREATE_POST,
      component: CreatePost,
    },
    {
      path: '/:postId/edit',
      name: Pages.EDIT_POST,
      component: EditPost,
    },
  ],
});
