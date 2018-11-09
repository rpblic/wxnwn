<template>
  <div id="channelView">
    <p>Here is ChannelView component.</p>
    <!-- Channel View -->
    <li v-for="channel in channelList" v-bind:key="channel">
      <router-link
        :to="{
          name: 'streamView',
          params: {
            channels: channelList,
            priority: channel
          }
        }">
        {{ channel }}
        <!-- Channel Activeness -->
        <div v-if="channel === activeVideo.channel" style="display:inline">
          (Active)
        </div>
        <div v-else style="display:inline"></div>
      </router-link>
      <!-- Channel Delete -->
      <div style="display:inline">
        <button
          v-on:click="emitDeleteChannel(channel)"
          style="display:inline">
          Delete
        </button>
      </div>
    </li>
    <!-- Channel Insert -->
    <form
      id="channelInsertion"
      v-on:submit.prevent="emitInsertChannel">
      <input v-model="insertedChannelName" type="text" placeholder="채널을 추가하세요.">
      <button type="submit">Insert</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'channelView',
  data () {
    return {
      insertedChannelName: String
    }
  },
  props: ['channelList', 'activeVideo'],

  methods: {
    emitInsertChannel: function () {
      this.$emit('insertChannel', this.insertedChannelName)
    },
    emitDeleteChannel: function (deletedChannelName) {
      this.$emit('deleteChannel', deletedChannelName)
    }
  }
}
</script>

<style scoped>
</style>
