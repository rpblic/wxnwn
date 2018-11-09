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
      v-on:playNextVideo="playNextVideo"
      v-on:playPreviousVideo="playPreviousVideo"
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
      this.channelPostStorylineList = videoJsonList.filter(this.isVideoIncludedInChannel)
    } else {
      this.channelPostStorylineList = videoJsonList
    }
    console.log(this.channelPostStorylineList)
    this.setActiveVideo(this.channelPostStorylineList.shift())
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
      return nextVideoId
    },
    playNextVideo: function () {
      this.channelPreStorylineList.push(this.activeVideo)
      if (this.channelPostStorylineList.length) {
        this.setActiveVideo(this.getNextVideoId())
      } else {
        alert('No next video.')
      }
    },
    getPreviousVideoId: function () {
      var previousVideoId = this.channelPreStorylineList.pop()
      return previousVideoId
    },
    playPreviousVideo: function () {
      this.channelPostStorylineList.unshift(this.activeVideo)
      if (this.channelPreStorylineList.length) {
        this.setActiveVideo(this.getPreviousVideoId())
      } else {
        alert('No previous video.')
      }
    },
    isVideoIncludedInChannel: function (video) {
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
