<template>
  <div id="userproperty">
    <user-sparkline></user-sparkline>\
    <user-info></user-info>
  </div>
</template>

<script>
import UserSparkline from './userproperty/UserSparkline'
import UserInfo from './userproperty/UserInfo'

export default {
  name: 'userproperty',
  data () {},
  components: { UserSparkline, UserInfo }
}
</script>
