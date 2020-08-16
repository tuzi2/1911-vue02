import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Category from '@/components/Category'
import News from '@/components/News'
import Search from '@/components/Search'
import FullWidth from '@/components/FullWidth'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/full-width',
      name: 'FullWidth',
      component: FullWidth
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
