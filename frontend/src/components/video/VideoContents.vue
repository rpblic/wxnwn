<template>
  <div id="videoContents">
    <video-player  class="video-player-box"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
                  customEventName="customstatechangedeventname"

                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"

                  @statechanged="playerStateChanged($event)"
                  @ready="playerReadied($event)">
    </video-player>
    <div id="emitChangeVideo"></div>
    <vs-button v-on:click="emitPlayPreviousVideo" style="display:inline">Previous</vs-button>
    <vs-button v-on:click="emitPlayNextVideo" style="display:inline">Next</vs-button>
    <vs-button v-on:click="emitBookmarkVideo" style="display:inline">Bookmark</vs-button>
    <vs-button v-on:click="emitLikeVideo" style="display:inline">Like</vs-button>
    <vs-button v-on:click="emitDownvoteVideo" style="display:inline">Downvote</vs-button>

  </div>
</template>
<!--
@canplaythrough="onPlayerCanplaythrough($event)"
@ended="onPlayerEnded($event)"
@waiting="onPlayerWaiting($event)"
@playing="onPlayerPlaying($event)"
@loadeddata="onPlayerLoadeddata($event)"
@timeupdate="onPlayerTimeupdate($event)"
@canplay="onPlayerCanplay($event)"
-->

<script>
// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
export default {
  name: 'videoContents',
  data () {
    return {
      playerOptions: {
        // videojs options
        autoplay: 'muted',
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [],
        fluid: true,
        aspectRatio: '1:1'
      }
    }
  },

  props: ['channelList', 'channelPreStorylineList', 'channelPostStorylineList', 'activeVideo'],

  created () {
    this.playerOptions.sources = this.activeVideoInfo
    console.log('active video', this.activeVideo)
    console.log('player option', this.playerOptions)
  },

  mounted () {
    console.log('this is current player instance object', this.player)
  },

  watch: {
    activeVideo: function (newVal, oldVal) {
      console.log('new active video', newVal)
      this.player.src(newVal.sources)
    }
  },

  computed: {
    activeVideoInfo () {
      return {
        type: this.activeVideo.type,
        src: this.activeVideo.sources
      }
    },
    player () {
      return this.$refs.videoPlayer.player
    }
  },

  methods: {
    // listen event
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerPause (player) {
      console.log('player pause!', player)
    },
    // or listen state event
    playerStateChanged (playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    },
    emitPlayPreviousVideo () {
      this.$emit('playPreviousVideo')
    },
    emitPlayNextVideo () {
      this.$emit('playNextVideo')
    },
    emitBookmarkVideo () {
      this.$emit('bookmarkVideo')
    },
    emitLikeVideo () {
      this.$emit('likeVideo')
    },
    emitDownvoteVideo () {
      this.$emit('downvoteVideo')
    }
  }
}
</script>

<style scoped>
</style>
