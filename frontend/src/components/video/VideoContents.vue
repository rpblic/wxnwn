<template>
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
  <!--
  @canplaythrough="onPlayerCanplaythrough($event)"
  @ended="onPlayerEnded($event)"
  @waiting="onPlayerWaiting($event)"
  @playing="onPlayerPlaying($event)"
  @loadeddata="onPlayerLoadeddata($event)"
  @timeupdate="onPlayerTimeupdate($event)"
  @canplay="onPlayerCanplay($event)"
   -->
</template>

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

  created () {
    this.playerOptions.sources.push({
      type: this.activeVideo.type,
      src: this.activeVideo.sources
    })
    console.log(this.activeVideo)
    console.log(this.playerOptions)
  },

  mounted () {
    console.log('this is current player instance object', this.player)
  },
  computed: {
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
    // ...player event

    // or listen state event
    playerStateChanged (playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied (player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  }
}
</script>

<style scoped>
</style>
