import Vue from 'vue'
import Router from 'vue-router'

/**
 *  404 page
 */
import noFind from '@/pages/404/no-find'
/**
 *  default page
 */
import pageDefault from '@/pages/page-default'

/**
 *  user page
 */
import user from '@/pages/user/user'
import register from '@/pages/user/register'
import login from '@/pages/user/login'

/**
 *  home page
 */
import home from '@/pages/home/home'
import schedules from '@/pages/home/schedules'
import bookmarks from '@/pages/home/bookmarks'
import favorites from '@/pages/home/favorites'
import messages from '@/pages/home/messages'

/**
 *  sharings page
 */
import sharings from '@/pages/sharings/sharings'
import sharingsCreates from '@/pages/sharings/creates'
import sharing from '@/pages/sharings/sharing/sharing'
import steps from '@/pages/sharings/sharing/steps'
import comments from '@/pages/sharings/sharing/comments'


Vue.use( Router )

/**
 * 路由信息
 * 
 */
let routes = [
  /**
   *  user router
   */
  {
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
          pin: true,
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
      }
    ]
  },
  /**
   *  home router
   */
  {
    path: '/home/',
    meta: {
      pin: true,
      marks: ['主页', 'Home']
    },
    component: pageDefault,
    children: [
      {
        path: '',
        name: 'home',
        component: home
      },
      {
        path: 'schedules',
        name: 'schedules',
        meta: {
          pin: true,
          marks: ['日程表', 'Schedules']
        },
        component: schedules
      },
      {
        path: 'bookmarks',
        meta: {
          pin: true,
          marks: ['书签页', 'Bookmarks']
        },
        component: bookmarks,
        children: [
          {
            path: '',
            name: 'bookmarks',
            component: bookmarks
          },
          {
            path: 'test',
            name: 'test',
            meta: {
              pin: true,
              marks: ['测试页', 'test']
            },
            component: bookmarks
          }
        ]
      },
      {
        path: 'favorites',
        name: 'favorites',
        meta: {
          pin: true,
          marks: ['收藏夹', 'Favorites']
        },
        component: favorites
      },
      {
        path: 'messages',
        name: 'messages',
        meta: {
          pin: true,
          marks: ['消息盒子', 'Messages']
        },
        component: messages
      }
    ]
  },
  /**
   *  sharings router
   */
  {
    path: '/sharings/:id(\\d+)?',
    meta: {
      pin: true,
      marks: ['分享', 'Sharings']
    },
    component: pageDefault,
    children: [
      {
        path: '',
        name: 'sharings',
        component: sharings
      },
      {
        path: 'sharingsCreates',
        name: 'sharingsCreates',
        meta: {
          pin: true,
          marks: ['创建', 'Creates']
        },
        component: sharingsCreates
      },
      {
        path: 'sharing/:sid(\\d+)',
        meta: {
          pin: false,
          marks: ['内容', 'Sharing']
        },
        component: pageDefault,
        children: [
          {
            path: '',
            name: 'sharing',
            component: sharing
          },
          {
            path: 'steps',
            name: 'steps',
            meta: {
              pin: true,
              marks: ['步骤', 'Steps']
            },
            component: steps
          },
          {
            path: 'comments',
            name: 'comments',
            meta: {
              pin: false,
              marks: ['评论', 'Comments']
            },
            component: comments
          }
        ]
      }
    ]
  },
  /**
   *  404 router
   */
  {
    path: '*',
    name: 'noFind',
    component: noFind
  }
]

/**
 *  全局路由配置
 */
const Routers = new Router({
  mode: 'history',
  linkActiveClass: 'router-on',
  routes: routes  
})

/**
 * 绑定 beforeEach 钩子进行权限判定
 */
Routers.beforeEach((to, from, next) => {
    if ( to.meta.auth ) {
        if ( true ) {
            next();
        }
        else {
            next({
                name: 'home'
            })
        }
    }
    else {
        next();
    }
})


export default Routers