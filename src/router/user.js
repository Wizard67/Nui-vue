/**
 *  user page
 */
import pageDefault from '@/pages/helper/page-default'

import user from '@/pages/user/user'
import messages from '@/pages/user/messages'
import register from '@/pages/user/register'
import login from '@/pages/user/login'

export default {

  path: '/user/:user(\\d+)?',
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
      path: 'messages',
      name: 'messages',
      meta: {
        pin: true,
        marks: ['信息', 'Messages']
      },
      component: messages
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