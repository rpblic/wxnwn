<template>
    <div id="index">
        <p>Here is Index Page.</p>
        <h1>{{ projectName }}</h1>
        <p>Welcome to {{ projectName }}! </p>
        <p><span v-html="projectDescription"></span></p>
        <p>Made by {{ projectAuthor }}.</p>

        <router-view id="channelRecommendation"></router-view>
    </div>
</template>

<script>
var projectName = require('../../assets/projectinfo').projectName()
var projectDescription = require('../../assets/projectinfo').projectDescription()
var projectAuthor = require('../../assets/projectinfo').projectAuthor()

export default {
  name: 'index',
  data () {
    return {
      projectName: projectName,
      projectDescription: projectDescription,
      projectAuthor: projectAuthor
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
