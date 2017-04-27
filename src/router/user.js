/**
 *  user page
 */
import pageDefault from '@/pages/helper/page-default'

import user from '@/pages/user/user'
import register from '@/pages/user/register'
import login from '@/pages/user/login'

export default {

  path: '/user/:uid(\\d+|my)?',
  meta: {
    pin: false,
    auth: true,
    marks: ['中心', 'User']
  },
  component: pageDefault,
  children: [

    {
      path: '',
      name: 'user',
      meta: {
        auth: true
      },
      component: user
    },

    {
      path: 'register',
      name: 'register',
      meta: {
        pin: false,
        marks: ['注册', 'Register']
      },
      component: register
    },

    {
      path: 'login',
      name: 'login',
      meta: {
        pin: true,
        marks: ['登录', 'Login']
      },
      component: login
    },

    {
      path: 'logout',
      name: 'logout',
      meta: {
        pin: true,
        marks: ['注销', 'Logout']
      }
    }

  ]
}