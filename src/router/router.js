import Home from '../views/Home.vue'
import Login from '../views/login'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ Login),
  },
  {
    path: 'login1',
    name: 'login2',
    component: () => import(/* webpackChunkName: "about" */ Login),
  },
]
