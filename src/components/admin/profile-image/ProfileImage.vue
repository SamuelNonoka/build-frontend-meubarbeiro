<template>
  <div class="profile-image">
    <div class="profile-image-background">
      <img
        v-if="backgroundImage"
        :src="backgroundImage" 
      />

      <div
        class="profile-image-hover"
        @click="changeBackgroundImage"
      >
        <btn-secondary
          text="Alterar Capa"
          icon="create"
          class="btnBackground" 
          :block="false"
          cssClass="pa-1 elevation-1 mr-4"
          @click="changeBackgroundImage"
        />
      </div>
    </div>

    <div class="profile-imagem-main">
      <img
        v-if="mainImage"
        :src="mainImage"
      />

      <div
        class="profile-image-hover"
        @click="changeMainImage"
      >
        <v-icon class="profile-image-hover-button d-none d-md-flex">
          {{ mainIcon }}
        </v-icon>
      </div>
    </div>
    <v-icon class="profile-image-hover-button d-flex d-md-none" @click="changeMainImage">
        {{ mainIcon }}
      </v-icon>
    <upload-image
      ref="mainImage"
      :uploadUrl="mainUploadUrl"
      @onCropUploadSuccess="onMainImageUploaded"
    />

    <upload-image
      ref="backgroundImage"
      :width="1200"
      :height="600"
      :circle="false"
      :square="false"
      :uploadUrl="backgroundUploadUrl"
      @onCropUploadSuccess="onBackgroundImageUploaded"
    />
  </div>
</template>

<script>
// Modules
import './ProfileImage.scss'
// Components
import BtnSecondary from '@/components/globais/buttons/secondary/BtnSecondary'
import UploadImage from '@/components/globais/upload-image/UploadImage'

export default {
  name: 'ProfileImage',
  components: { BtnSecondary, UploadImage },
  props: {
    backgroundImage: {
      default: null
    },
    mainImage: {
      default: null
    },
    mainUploadSrc: {
      required: true
    },
    backgroundUploadSrc: {
      required: true
    }
  },
  data: () => ({
    showMainImage: false
  }),
  computed: {
    mainIcon () {
      return this.mainImage ? 'photo_camera' : 'add_a_photo'
    },
    backgroundUploadUrl () {
      return `${this.$url_api}/${this.backgroundUploadSrc}`
    },
    mainUploadUrl () {
      return `${this.$url_api}/${this.mainUploadSrc}`
    }
  },
  methods: {
    changeMainImage () {
      this.$refs.mainImage.showDialog()
    },
    changeBackgroundImage () {
      this.$refs.backgroundImage.showDialog()
    },
    onBackgroundImageUploaded (response) {
      this.$emit('onCropUploadBackgroundImageSuccess', response)
    },
    onMainImageUploaded (response) {
      this.$emit('onCropUploadSuccess', response)
    }
  }
}
</script>