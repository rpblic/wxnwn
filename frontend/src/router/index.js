import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage'

import StreamViewPage from '@/components/StreamViewPage'

import UploadPage from '@/components/UploadPage'
import UserPropertyPage from '@/components/UserPropertyPage'

import Helloworld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/streamview/',
      name: 'streamView',
      component: StreamViewPage
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadPage
    },
    {
      path: '/user',
      name: 'userproperty',
      component: UserPropertyPage
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: Helloworld
    }
  ]
})
