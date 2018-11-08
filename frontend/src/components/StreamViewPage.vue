<template>
  <div id="streamview">
    <p>Here is StreamView page with channel {{ $route.params.channels }}.</p>
    <channel-view
      v-bind:channelList="channelList"
      v-bind:activeVideo="activeVideo"
      v-on:insertChannel="insertChannel"
      v-on:deleteChannel="deleteChannel"
      ></channel-view>
    <author-info></author-info>
    <video-contents
      v-bind:channelList="channelList"
      v-bind:channelPreStorylineList="channelPreStorylineList"
      v-bind:channelPostStorylineList="channelPostStorylineList"
      v-bind:activeVideo="activeVideo"
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

import videoJsonList from '../assets/videolist.json'

export default {
  name: 'streamview',

  data: function () {
    return {
      channelList: [],
      channelPreStorylineList: [],
      channelPostStorylineList: [],
      activeVideo: {},
      videoJsonList: videoJsonList
    }
  },

  created () {
    if (this.$route.params.channels) {
      this.channelList = this.$route.params.channels
      this.channelPreStorylineList = videoJsonList.filter(this.isVideoIsIncludedInChannel)
    } else {
      this.channelPreStorylineList = videoJsonList
    }
    console.log(this.channelPreStorylineList)
    this.setActiveVideo(this.channelPreStorylineList.shift())
  },

  methods: {
    insertChannel: function (channelName) {
      this.channelList.push(channelName)
    },
    deleteChannel: function (channelName) {
      this.channelList = this.$_.without(this.channelList, channelName)
    },
    setActiveVideo: function (video) {
      this.activeVideo = video
    },
    getNextVideoId: function () {
      var nextVideoId = this.channelPostStorylineList.shift()
      this.channelPreStorylineList.push(this.activeVideo)
      return nextVideoId
    },
    getPreviousVideoId: function () {
      var previousVideoId = this.channelPreStorylineList.pop()
      this.channelPostStorylineList.unshift(this.activeVideo)
      return previousVideoId
    },
    isVideoIsIncludedInChannel: function (video) {
      return this.channelList.includes(video.channel)
    }
  },

  components: {
    ChannelView, AuthorInfo, VideoContents, ChannelStoryline, CommentForm
  }
}
</script>

<style scoped>
</style>
