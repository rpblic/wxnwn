<template>
  <div id="channelRecommendation">
    <router-link
      v-for="channelList in recommendedChannelsList"
      v-bind:key="channelList[0]"
      :to="{ name: 'streamView', params: { channels: channelList } }">
      {{ channelList }} Channel
      <br/>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'channelRecommendation',
  data () {
    var recommendedChannelsList = [
      ['test'], ['test2'], ['test2', 'test3']
    ]
    return {
      recommendedChannelsList: recommendedChannelsList
    }
  }
}
</script>

<style scoped>
</style>
