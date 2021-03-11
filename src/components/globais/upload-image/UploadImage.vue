<template>
  <upload
    field="img"
    @crop-success="cropSuccess"
    @crop-upload-success="cropUploadSuccess"
    @crop-upload-fail="cropUploadFail"
    v-model="show"
    :width="width"
    :height="height"
    lang-type="pt-br"
    :url="uploadUrl"
    :params="params"
    :headers="headers"
    :noCircle="!circle"
    :noSquare="square"
    img-format="png"
  />
</template>
<script>
import './UploadImage.scss'
import Upload from 'vue-image-crop-upload'

export default {
  name: 'UploadImage',
  components: { Upload },
  props: {
    uploadUrl: {
      required: true
    },
    width: {
      default: 300
    },
    height: {
      default: 300
    },
    circle: {
      default: true
    },
    square: {
      default: true
    }
  },
  data: () => ({
    params: {
      image: ''
    },
    headers: {
      token: ''
    },
    imgDataUrl: '',
    imageKey: 0,
    show: false
  }),
  mounted () {
    this.headers.token = localStorage.token
  },
  methods: {
    cropSuccess(imgDataUrl){
      this.imgDataUrl = imgDataUrl
      this.params.image = imgDataUrl
    },
    cropUploadSuccess (response) {
      this.$emit('onCropUploadSuccess', response.corpo)
    },
    cropUploadFail(status, field) {
      window.console.log('-------- upload fail --------')
      window.console.log(status)
      window.console.log('field: ' + field)
    },
    showDialog () {
      this.show = true
    }
  }
}
</script>