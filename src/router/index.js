// router는 기존의 서버에서의 router를 front에서 구현함

import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Example from '@/components/Example';
import TodoPage from '@/components/TodoPages';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },

    // http://localhost:8080/example
    {
      path: '/example',
      name: 'example',
      component: Example,
    },

    // http://localhost:8080/todopage
    {
      path: '/todos',
      name: 'todos',
      component: TodoPage,
    },
  ],
});

