<template>
  <div id="channelRecommendation">
    <router-link :to="{ name: 'streamView', params: { channel: 'all' } }">
      Sample Channel
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'channelRecommendation',
  data () {
    var recommendedChannels = []
    return {
      recommendedChannels: recommendedChannels
    }
  }
}
</script>

<style scoped>
</style>
