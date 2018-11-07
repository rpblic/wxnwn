<template>
  <div id="streamview">
    <p>Here is StreamView page with channel {{ $route.params.channels }}.</p>
    <channel-view
      v-bind:channelList="channelList"
      v-bind:activeVideoId="activeVideoId"
      v-on:insertChannel="insertChannel"
      v-on:deleteChannel="deleteChannel"
      ></channel-view>
    <author-info></author-info>
    <video-contents
      v-bind:channelList="channelList"
      v-bind:channelPreStorylineList="channelPreStorylineList"
      v-bind:channelPostStorylineList="channelPostStorylineList"
      v-bind:activeVideoId="activeVideoId"
      ></video-contents>
    <channel-storyline></channel-storyline>
    <comment-form></comment-form>
  </div>
</template>

<script>
import ChannelView from './channel/ChannelView'
import AuthorInfo from './userproperty/AuthorInfo'
import VideoContents from './video/VideoContents'
import ChannelStoryline from './channel/ChannelStoryline'
import CommentForm from './upload/comment/CommentForm'

import videoList from '../assets/videolist.json'

export default {
  name: 'streamview',

  data: function () {
    return {
      channelList: [],
      channelPreStorylineList: [],
      channelPostStorylineList: [],
      activeVideoId: {
        type: 'video/webm',
        src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        description: {
          channel: {
            channelId: 1,
            channelName: 'test'
          }
        }
      }
    }
  },

  created () {
    if (this.$route.params.channels) {
      this.channelList = this.$route.params.channels
    }
  },

  methods: {
    insertChannel: function (channelName) {
      this.channelList.push(channelName)
    },
    deleteChannel: function (channelName) {
      this.channelList = this.$_.without(this.channelList, channelName)
    },
    setActiveVideoId: function (videoId) {
      this.activeVideoId = videoId
    },
    getNextVideoId: function () {
      var nextVideoId = this.channelPostStorylineList.shift()
      this.channelPreStorylineList.push(this.activeVideoId)
      return nextVideoId
    },
    getPreviousVideoId: function () {
      var previousVideoId = this.channelPreStorylineList.pop()
      this.channelPostStorylineList.unshift(this.activeVideoId)
      return previousVideoId
    }
  },

  components: {
    ChannelView, AuthorInfo, VideoContents, ChannelStoryline, CommentForm
  }
}
</script>

<style scoped>
</style>
