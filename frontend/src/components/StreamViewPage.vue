<template>
  <div id="streamview">
    <channel-view
      v-bind:channelList="channelList"
      v-bind:activeVideo="activeVideo"
      v-on:insertChannel="insertChannel"
      v-on:deleteChannel="deleteChannel"
      ></channel-view>
    <user-sparkline></user-sparkline>
    <video-contents
      v-bind:channelList="channelList"
      v-bind:channelPreStorylineList="channelPreStorylineList"
      v-bind:channelPostStorylineList="channelPostStorylineList"
      v-bind:activeVideo="activeVideo"
      v-on:playNextVideo="playNextVideo"
      v-on:playPreviousVideo="playPreviousVideo"
      v-on:bookmarkVideo="bookmarkVideo"
      v-on:likeVideo="likeVideo"
      v-on:downvoteVideo="downvoteVideo"
      ></video-contents>
    <channel-storyline></channel-storyline>
    <comment-form></comment-form>
  </div>
</template>

<script>
import ChannelView from './channel/ChannelView'
import UserSparkline from './userproperty/UserSparkline'
import VideoContents from './video/VideoContents'
import ChannelStoryline from './channel/ChannelStoryline'
import CommentForm from './upload/comment/CommentForm'

// var VideoControlMethod = require('./video/VideoControl.js')
// var VideoReactMethod = require('./video/VideoReact.js')

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
    },
    bookmarkVideo: function () {
      alert('Bookmarked Video ' + this.activeVideo.title)
    },
    likeVideo: function () {
      alert('Liked Video ' + this.activeVideo.title)
    },
    downvoteVideo: function () {
      alert('Downvoted Video ' + this.activeVideo.title)
    }
  },

  components: {
    ChannelView, UserSparkline, VideoContents, ChannelStoryline, CommentForm
  }
}
</script>

<style scoped>
</style>
