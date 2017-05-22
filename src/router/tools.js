/**
 *  tool page
 */

export default {

  path: '/tools/',
  meta: {
    pin: true,
    marks: ['工具', 'Tools']
  },
  component: resolve => require(['@/pages/helper/page-default'],resolve),
  children: [

    {
      path: '',
      name: 'tools',
      component: resolve => require(['@/pages/tools/tools'],resolve),
    }
  ]
}