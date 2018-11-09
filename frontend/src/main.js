// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

// import wxnwn and router
import Wxnwn from './Wxnwn'
import router from './router'
import axios from 'axios'

import _ from 'underscore'
Object.defineProperty(Vue.prototype, '$_', { value: _ })

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueVideoPlayer, {})

/* eslint-disable no-new */
new Vue({
  el: '#wxnwn',
  router,
  components: { Wxnwn },
  template: '<Wxnwn/>'
})
