import Vue from 'vue'
import Router from 'vue-router'
import $ajax from '@/axios'
import $router from '@/router'

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
import stepsCreates from '@/pages/sharings/sharing/creates'
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
          pin: false,
          marks: ['日程表', 'Schedules']
        },
        component: schedules
      },
      {
        path: 'bookmarks',
        meta: {
          pin: false,
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
              pin: false,
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
          pin: false,
          marks: ['收藏夹', 'Favorites']
        },
        component: favorites
      },
      {
        path: 'messages',
        name: 'messages',
        meta: {
          pin: false,
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
        path: 'steps/:sid(\\d+)',
        meta: {
          pin: false,
          marks: ['步骤', 'Steps']
        },
        component: pageDefault,
        children: [
          {
            path: '',
            name: 'steps',
            component: steps            
          },
          {
            path: 'sharing/:sid(\\d+)?',
            name: 'sharing',
            meta: {
              pin: false,
              marks: ['内容', 'Sharing']
            },
            component: sharing
          },
          {
            path: 'stepsCreates',
            name: 'stepsCreates',
            meta: {
              pin: true,
              marks: ['新增', 'Creates']
            },
            component: stepsCreates
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
 * 绑定 beforeEach 钩子对路由进行操作
 */
Routers.beforeEach((to, from, next) => {

    // 执行特定路由操作
    if ( to.name === 'logout') {
      // 发送注销请求
      $ajax.post( 'delete/logout' )
        .then((res) => {

          if ( res.data.inf ) {
            $router.push({name:'home'})
          }else{
            // console.log(error)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }

    // 判定用户是否拥有浏览权限
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