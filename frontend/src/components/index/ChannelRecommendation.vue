<template>
  <div>
    <router-link :to="{ name: 'streamview', params: { channel: 'all' } }">
      Sample Channel
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    var recommendedChannels = []
    return recommendedChannels
  }
}
</script>

<style scoped>
</style>
