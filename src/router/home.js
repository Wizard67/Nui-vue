/**
 *  home page
 */
import pageDefault from '@/pages/helper/page-default'

import home from '@/pages/home/home'
import schedules from '@/pages/home/schedules'
import bookmarks from '@/pages/home/bookmarks'
import favorites from '@/pages/home/favorites'

export default {

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
    }

  ]
}