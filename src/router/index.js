import Vue from 'vue'
import Router from 'vue-router'
import pc from '../views/pc'
import phone from '../views/phone'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '',
      redirect: '/pc'
    },
    {
      path: '/pc',
      name: 'pc',
      component: pc
    },
    {
      path: '/phone',
      name: 'phone',
      component: phone
    }
  ]
})
