<template>
  <div id="userSparkline">
    <la-cartesian
      bound= "[-100,100]"
      v-bind:data="userStackPopularityScore"
      animated autoresize height="70">
      <la-line
        v-for="(value, key) in userStackColor" v-bind:key="key"
        curve v-bind:prop="key" v-bind:color="value" v-bind:width="2"></la-line>
    </la-cartesian>
  </div>
</template>

<script>
var userData = require('../../assets/userlist.json')
var gaussianRand = require('../../assets/computationMethod.js').gaussianRand
export default {
  name: 'userSparkline',
  data () {
    return {
      sampleUserData: userData[0]
    }
  },

  computed: {
    userStackPopularityScore () {
      var resultArray = [
        {name: 'value0'}, {name: 'value1'}, {name: 'value2'}, {name: 'value3'},
        {name: 'value4'}, {name: 'value5'}, {name: 'value6'}, {name: 'value7'}, {name: 'value8'}
      ]
      for (let i = 0; i < this.sampleUserData.stacks.length; i++) {
        var channel = this.sampleUserData.stacks[i][0]
        var channelPopularity = this.sampleUserData.popularity[channel]
        var stackI = 'stack' + i
        resultArray[0][stackI] = gaussianRand(6) * channelPopularity / 2 - channelPopularity / 4
        resultArray[1][stackI] = gaussianRand(6) * channelPopularity
        resultArray[2][stackI] = gaussianRand(6) * channelPopularity
        resultArray[3][stackI] = gaussianRand(6) * channelPopularity - channelPopularity / 2
        resultArray[4][stackI] = gaussianRand(6) * channelPopularity - channelPopularity / 2
        resultArray[5][stackI] = gaussianRand(6) * channelPopularity - channelPopularity / 2
        resultArray[6][stackI] = gaussianRand(6) * channelPopularity - channelPopularity
        resultArray[7][stackI] = gaussianRand(6) * channelPopularity - channelPopularity
        resultArray[8][stackI] = gaussianRand(6) * channelPopularity / 2 - channelPopularity / 4
      }
      return resultArray
    },
    userStackColor () {
      var stackArray = {}
      for (let i = 0; i < this.sampleUserData.stacks.length; i++) {
        var stackI = 'stack' + i
        var color = this.sampleUserData.stacks[i][1]
        stackArray[stackI] = color
      }
      return stackArray
    }
  }
}
</script>

<style scoped>
</style>
