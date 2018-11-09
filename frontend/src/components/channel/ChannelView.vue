<template>
  <div id="channelView">
    <p>Here is ChannelView component.</p>
    <!-- Channel View -->
    <vs-chip
      v-for="channel in channelList" v-bind:key="channel"
      closable @click="emitDeleteChannel(channel)">
      <vs-avatar icon="favorite_border"></vs-avatar>
      {{ channel }}
      <!-- Channel Activeness -->
      <div v-if="channel === activeVideo.channel" style="display:inline">
        (Active)
      </div>
      <div v-else style="display:inline"></div>
    </vs-chip>
    <!-- Channel Insert -->
    <div id="channelInsertion">
      <vs-input icon="add" label-placeholder="채널을 추가하세요." v-model="insertedChannelName"
        v-on:submit.prevent="emitInsertChannel">
      </vs-input>
    </div>
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
