/**
 *  works page
 */

export default {

  path: '/works/',
  meta: {
    pin: true,
    marks: ['作品', 'Works']
  },
  component: resolve => require(['@/pages/helper/page-default'],resolve),
  children: [

    {
      path: '',
      name: 'works',
      component: resolve => require(['@/pages/works/works'],resolve),
    },

    {
      path: 'release',
      name: 'release',
      meta: {
        pin: false,
        marks: ['发布', 'Release']
      },
      component: resolve => require(['@/pages/works/release'],resolve),
    },

    {
      path: 'photo/:photo(\\d+)',
      name: 'photo',
      meta: {
        pin: false,
        marks: ['图片', 'Photo']
      },
      component: resolve => require(['@/pages/works/photo'],resolve),
    },
  ]
}