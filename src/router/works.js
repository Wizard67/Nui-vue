/**
 *  works page
 */
import pageDefault from '@/pages/helper/page-default'

import works from '@/pages/works/works'
import release from '@/pages/works/release'
import photo from '@/pages/works/photo'

export default {

  path: '/works/',
  meta: {
    pin: true,
    marks: ['作品', 'Works']
  },
  component: pageDefault,
  children: [

    {
      path: '',
      name: 'works',
      component: works
    },

    {
      path: 'release',
      name: 'release',
      meta: {
        pin: true,
        marks: ['发布', 'Release']
      },
      component: release
    },

    {
      path: 'photo/:photo(\\d+)',
      name: 'photo',
      meta: {
        pin: false,
        marks: ['图片', 'Photo']
      },
      component: photo
    },
  ]
}