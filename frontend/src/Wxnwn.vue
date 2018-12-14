<template>
  <div id="app">
    <div id="header">
      <vs-row>
        <vs-col vs-type="flex" vs-w="1" vs-justify="center" vs-align="center">
          <vs-button color="dark" type="flat" icon="menu"></vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-w="10" vs-justify="center" vs-align="center">
          <a href="/"><img src="./assets/wxnwn_logo.png" height="60"></a>
        </vs-col>
        <vs-col vs-type="flex" vs-w="1" vs-justify="center" vs-align="center">
          <vs-button color="dark" type="flat" icon="account_circle"></vs-button>
        </vs-col>
      </vs-row>
    </div>
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
