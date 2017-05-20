/**
 *  helper page
 */
export default {
  path: '*',
  name: 'noFind',
  component: resolve => require(['@/pages/helper/no-find'],resolve)
}