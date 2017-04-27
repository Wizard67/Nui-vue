/**
 *  sharings page
 */
import pageDefault from '@/pages/helper/page-default'

import sharings from '@/pages/sharings/sharings'
import sharingsCreates from '@/pages/sharings/sharings-creates'

import steps from '@/pages/sharings/steps/steps'
import stepsCreates from '@/pages/sharings/steps/steps-creates'
import stepsComments from '@/pages/sharings/steps/steps-comments'

export default {

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
          path: 'stepsCreates',
          name: 'stepsCreates',
          meta: {
            pin: true,
            marks: ['新增', 'Creates']
          },
          component: stepsCreates
        },

        {
          path: 'stepsComments',
          name: 'stepsComments',
          meta: {
            pin: false,
            marks: ['评论', 'Comments']
          },
          component: stepsComments
        }

      ]
    }

  ]
}