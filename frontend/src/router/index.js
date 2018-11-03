import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/index/IndexPage'
import ChannelRecommendation from '@/components/index/ChannelRecommendation'

import StreamViewPage from '@/components/streamview/StreamViewPage'
import UploadPage from '@/components/upload/UploadPage'
import UserPropertyPage from '@/components/userproperty/UserPropertyPage'
import Helloworld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
      children: [
        { path: '', component: ChannelRecommendation }
      ]
    },
    {
      path: '/streamview',
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
