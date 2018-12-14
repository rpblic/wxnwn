<template>
  <div id="videoUploadMethod">
    <vs-tabs vs-position="bottom" vs-alignment="center">
      <vs-tab v-model="videoUploadMethodSelected" vs-label="Camcorder"><div>Take Camcoder</div></vs-tab>
      <vs-tab v-model="videoUploadMethodSelected" vs-label="UploadedVideo"><div>Upload Video</div></vs-tab>
      <vs-tab v-model="videoUploadMethodSelected" vs-label="UploadedPicture"><div>Upload Picture</div></vs-tab>
      <vs-tab v-model="videoUploadMethodSelected" vs-label="DefaultPage"><div>Default Page</div></vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {
  name: 'videoUploadMethod',
  data: function () {
    return {
      videoUploadMethodSelected: 'Default'
    }
  },
  watch: {
    videoUploadMethodSelected: function (newVal, oldVal) {
      console.log('Change Video Upload Method: ', newVal)
    }
  }
}
</script>
