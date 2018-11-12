<template>
  <div id="commentForm">
    <vs-row>
      <!-- isAnonymous -->
      <vs-col vs-type="flex" vs-w="1" vs-justify="center" vs-align="left">
        <vs-button
          v-if="isAnonymous" v-on:click="switchIsAnonymous"
          color="dark" type="flat" icon="people_outline"></vs-button>
        <vs-button
          v-else v-on:click="switchIsAnonymous"
          color="dark" type="flat" icon="person"></vs-button>
      </vs-col>
      <!-- commentContents -->
      <vs-col vs-type="flex" vs-w="9" vs-justify="center" vs-align="center">
        <vs-textarea v-model="commentContents"></vs-textarea>
      </vs-col>
      <!-- submitComment -->
      <vs-col vs-type="flex" vs-w="1" vs-justify="center" vs-align="right">
        <vs-button
          v-on:click="emitSubmitComment"
          color="dark" type="flat" icon="keyboard_return"></vs-button>
      </vs-col>
      <!-- route to upload page -->
      <vs-col vs-type="flex" vs-w="1" vs-justify="center" vs-align="right">
        <vs-button
          v-bind:to="{ name: 'upload', params: { video: activeVideo } }"
          color="dark" type="flat" icon="video_call"></vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>

export default {
  name: 'commentForm',
  props: ['activeVideo'],
  data () {
    return {
      isAnonymous: true,
      commentContents: ''
    }
  },
  methods: {
    switchIsAnonymous: function () {
      this.isAnonymous = !(this.isAnonymous)
    },
    emitSubmitComment: function () {
      alert(this.commentContents)
      this.commentContents = ''
    }
  }
}
</script>

<style scoped>
</style>
