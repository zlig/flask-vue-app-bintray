import Vue from 'vue'
import Router from 'vue-router'

/*import HelloWorld from '@/components/HelloWorld'
import HiName from '@/components/HiName'
import GoodBye from '@/components/GoodBye'
import NotFound from '@/components/NotFound'*/

Vue.use(Router)

function load(view) {
  return () => import('@/components/${view}.vue')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: load('HelloWorld')
    },
    {
      path: '/hi',
      name: 'HiName',
      component: load('HiName')
    },
    {
      path: '/bye',
      name: 'GoobBye',
      component: load('GoodBye')
    },
    {
      path: '/404',
      name: '404',
      component: load('NotFound')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
