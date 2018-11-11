<template>
  <div id="channelRecommendation">
    <vs-list>
      <vs-list-item
        v-for="channelList in recommendedChannelsList"
        v-bind:key="channelList[0]"
        v-bind:title="channelList">
        <vs-button
          :to="{ name: 'streamView', params: { channels: channelList } }"
          :color="sampleColor" :gradient-color-secondary="sampleColor2"
          type="border" icon="navigate_next"
        ></vs-button>
      </vs-list-item>
    </vs-list>
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
      recommendedChannelsList: recommendedChannelsList,
      sampleColor: '#c72a75',
      sampleColor2: '#5252e8'
    }
  }
}
</script>

<style scoped>
</style>
