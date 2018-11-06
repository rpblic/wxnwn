<template>
  <div id="streamview">
    <p>Here is StreamView page.</p>
    <channel-view></channel-view>
    <author-info></author-info>
    <video-contents></video-contents>
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
  components: {
    ChannelView, AuthorInfo, VideoContents, ChannelStoryline, CommentForm
  }
}
</script>

<style scoped>
</style>
