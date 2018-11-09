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
    <div id= "emitChangeVideo"></div>
    <button v-on:click="emitPlayPreviousVideo" style="display:inline">Previous</button>
    <button v-on:click="emitPlayNextVideo" style="display:inline">Next</button>
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
  data () {
    return {
      playerOptions: {
        // videojs options
        muted: false,
        language: 'en',
        height: '360',
        width: '360',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: []
      }
    }
  },

  props: ['channelList', 'channelPreStorylineList', 'channelPostStorylineList', 'activeVideo'],

  mounted () {
    this.playerOptions.sources = this.activeVideoInfo
    console.log('this is current player instance object', this.player)
    console.log(this.activeVideo)
    console.log(this.playerOptions)
  },

  updated () {
    this.playerOptions.sources = this.activeVideoInfo
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
    }
  }
}
</script>

<style scoped>
</style>
