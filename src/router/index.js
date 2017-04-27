import Vue from 'vue'
import Router from 'vue-router'
import $ajax from '@/axios'
import $router from '@/router'

Vue.use( Router )

/**
 *  import router file
 */
import noFind from './nofind'
import user from './user'
import home from './home'
import sharings from './sharings'

let routes = [
  user,
  home,
  sharings,
  noFind
]

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