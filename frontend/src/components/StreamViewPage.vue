<template>
  <div id="streamview">
    <p>Here is StreamView page.</p>
    <channel-view></channel-view>
    <author-info></author-info>
    <video-contents
      v-bind:channelList="channelList"
      v-bind:channelPreStorylineList="channelPreStorylineList"
      v-bind:channelPostStorylineList="channelPostStorylineList"
      v-bind:activeVideoId="activeVideoId"></video-contents>
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

export default {
  name: 'streamview',

  data: function () {
    return {
      channelList: [],
      channelPreStorylineList: [],
      channelPostStorylineList: [],
      activeVideoId: String
    }
  },

  methods: {
    insertChannel: function (channelId) {
      this.channelList.push(channelId);
      console.log(channelList);
    },
    deleteChannel: function (channelId) {
      this.channelList = $_.without(this.channelList, channelId);
      console.log(channelList);
    },
    setActiveVideoId: function (videoId) {
      this.activeVideoId = videoId;
    },
    getNextVideoId: function () {
      var nextVideoId = this.channelPostStorylineList.shift();
      this.channelPreStorylineList.push(activeVideoId);
      return nextVideoId
    },
    getPreviousVideoId: function () {
      var previousVideoId = this.channelPreStorylineList.pop();
      this.channelPostStorylineList.unshift(activeVideoId);
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
