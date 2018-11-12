<template>
  <div id="upload">
    <upload-video-player></upload-video-player>
    <video-upload-method></video-upload-method>
    <audio-upload-method></audio-upload-method>
    <vs-row>
      <vs-col vs-type="flex" vs-w="8" vs-justify="left" vs-align="center">
        <bidding></bidding>
      </vs-col>
      <vs-col vs-type="flex" vs-w="4" vs-justify="right" vs-align="center">
        <submit-video></submit-video>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import UploadVideoPlayer from './uploadvideo/UploadVideoPlayer'
import VideoUploadMethod from './uploadvideo/VideoUploadMethod'
import AudioUploadMethod from './uploadvideo/AudioUploadMethod'
import Bidding from './uploadvideo/Bidding'
import SubmitVideo from './uploadvideo/SubmitVideo'

export default {
  name: 'upload',
  data () {
    return {
      seenVideo: ''
    }
  },

  created () {
    if (this.$route.params.video) {
      this.seenVideo = this.$route.params.video
    }
  },

  components: {
    UploadVideoPlayer, VideoUploadMethod, AudioUploadMethod, Bidding, SubmitVideo
  }
}
</script>
