/**
 *  user page
 */
export default {

  path: '/user/:user(\\d+)?',
  meta: {
    pin: false,
    auth: true,
    marks: ['中心', 'User']
  },
  component: resolve => require(['@/pages/helper/page-default'],resolve),
  children: [

    {
      path: '',
      name: 'user',
      meta: {
        auth: true
      },
      component: resolve => require(['@/pages/user/user'],resolve),
    },

    {
      path: 'messages',
      name: 'messages',
      meta: {
        pin: true,
        marks: ['信息', 'Messages']
      },
      component: resolve => require(['@/pages/user/messages'],resolve),
    },

    {
      path: 'favorites',
      name: 'favorites',
      meta: {
        pin: true,
        marks: ['收藏', 'Favorites']
      },
      component: resolve => require(['@/pages/user/favorites'],resolve),
    },

    {
      path: 'register',
      name: 'register',
      meta: {
        pin: false,
        marks: ['注册', 'Register']
      },
      component: resolve => require(['@/pages/user/register'],resolve),
    },

    {
      path: 'login',
      name: 'login',
      meta: {
        pin: false,
        marks: ['登录', 'Login']
      },
      component: resolve => require(['@/pages/user/login'],resolve),
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