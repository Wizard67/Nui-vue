/**
 *  sharings page
 */
export default {

  path: '/sharings/:sharings(\\d+)?',
  meta: {
    pin: true,
    marks: ['分享', 'Sharings']
  },
  component: resolve => require(['@/pages/helper/page-default'],resolve),
  children: [

    {
      path: '',
      name: 'sharings',
      component: resolve => require(['@/pages/sharings/sharings'],resolve)
    },

    {
      path: 'sharingsCreates',
      name: 'sharingsCreates',
      meta: {
        pin: true,
        marks: ['创建', 'Creates']
      },
      component: resolve => require(['@/pages/sharings/sharings-creates'],resolve)
    },

    { 
      path: 'steps/:steps(\\d+)',
      meta: {
        pin: false,
        marks: ['步骤', 'Steps']
      },
      component: resolve => require(['@/pages/helper/page-default'],resolve),
      children: [

        {
          path: '',
          name: 'steps',
          component: resolve => require(['@/pages/sharings/steps/steps'],resolve),
        },

        {
          path: 'stepsCreates',
          name: 'stepsCreates',
          meta: {
            pin: true,
            marks: ['新增', 'Creates']
          },
          component: resolve => require(['@/pages/sharings/steps/steps-creates'],resolve),
        },

        {
          path: 'stepsComments',
          name: 'stepsComments',
          meta: {
            pin: false,
            marks: ['评论', 'Comments']
          },
          component: resolve => require(['@/pages/sharings/steps/steps-comments'],resolve),
        }
      ]
    }

  ]
}