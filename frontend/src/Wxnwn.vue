<template>
  <div id="app">
    <p>Here is App <a href="/">wxnwn</a> div. Hello Vue!</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'wxnwn'
}
</script>

<style>
#wxnwn {
  display: flex;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
