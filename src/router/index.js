import Vue from 'vue'
import Router from 'vue-router'

Vue.use( Router )

/**
 *  import router file
 */
import noFind from './nofind'
import user from './user'
// import home from './home'
import sharings from './sharings'
import works from './works'
import tools from './tools'

let routes = [
  { path: '/', redirect: { name: 'sharings' } },
  user,
  sharings,
  works,
  tools,
  // home,
  noFind
]

const Routers = new Router({
  mode: 'hash',
  linkActiveClass: 'router-on',
  routes: routes,
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})

/**
 * 绑定 beforeEach 钩子对路由进行操作
 */
Routers.beforeEach((to, from, next) => {

    // 执行特定路由操作
    if ( to.name === 'logout') {
      // 清除 localStorage 数据
      localStorage.uid = ''
      localStorage.rank = ''
      localStorage.username = ''
      localStorage.avatar = '/static/default.jpg'
      localStorage.token = ''

      location.href = '/'
      // 跳转首页
      // next({
      //   name: 'home'
      // })
    }

    // 判定用户是否拥有浏览权限
    if ( to.meta.auth ) {
      if ( localStorage.token ) {
        next()
      }
      else {
        next({
          name: 'login'
        })
      }
    }
    else {
      next();
    }
})



export default Routers