import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/index/IndexPage'
import ChannelRecommendation from '@/components/index/ChannelRecommendation'

import StreamViewPage from '@/components/streamview/StreamViewPage'
import Channel from '@/components/streamview/Channel'
import VideoContents from '@/components/streamview/VideoContents'
import Storyline from '@/components/streamview/Storyline'
import CommentForm from '@/components/streamview/CommentForm'

import UploadPage from '@/components/upload/UploadPage'
import UserPropertyPage from '@/components/userproperty/UserPropertyPage'
import AuthorInfo from '@/components/userproperty/AuthorInfo'

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
      component: StreamViewPage,
      children: [
        {
          path: '',
          components: {
            channel: Channel,
            author: AuthorInfo,
            videoContents: VideoContents,
            storyline: Storyline,
            comment: CommentForm
          }
        }
      ]
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
