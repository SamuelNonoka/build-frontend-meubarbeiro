<template>
  <div
    v-if="overlay"
    class="overlay"
    :class="overlayVisible"
  >
    <div class="overlay-content text-center">
      <div>
        <v-icon
          v-show="!loading && !error && icon"
          size="80"
          color="success"
        >
          check_circle_outline
        </v-icon>

        <v-icon
          v-show="!loading && error"
          size="80"
          color="danger"
        >
          error_outline
        </v-icon>
        <v-progress-circular
          v-show="loading"
          indeterminate
          size="50"
          color="primaryLight"
        ></v-progress-circular>
      </div>
      <span
        v-show="loading"
        class="overlay-text"
      >
        {{ textLoader }}
      </span>
      
      <span
        v-show="!loading && !error"
        class="overlay-text overlay-text-success"
        v-html="textLoaderSuccess"
      ></span>

      <span
        v-show="!loading && error"
        class="overlay-text overlay-text-success"
        v-html="textLoaderError"
      ></span>
    </div>
  </div>
</template>

<script>
import './Overlay.scss'

export default {
  name: 'Overlay',
  data: () => ({
    overlay: false,
    loading: false,
    overlayVisible: '',
    textLoader: '',
    textLoaderSuccess: '',
    textLoaderError: '',
    error: false,
    icon: false
  }),
  methods: {
    showOverlay (text = null) {
      this.textLoader = text || 'Aguarde...'
      this.overlay = true
      this.loading = true

      setTimeout (() => {
        this.overlayVisible = 'visible'
      }, 300)
    },
    hideOverlayError (text) {
      this.error = true
      this.textLoaderError = text
      this.hideOverlay(true, false)
    },
    hideOverlaySuccess (text) {
      this.error = false
      this.textLoaderSuccess = text
      this.hideOverlay(true, true)
    },
    hideOverlay (timeout, icon) {
      this.icon = icon
      this.loading = false

      if (timeout) {
        setTimeout(() => {
          this.overlayVisible = ''
        }, 3000)

        setTimeout(() => {
          this.error = false
          this.overlay = false,
          this.loading = false
        }, 4000)
      } else {
        this.overlayVisible = ''
        this.error = false
        this.overlay = false,
        this.loading = false
      } 
    }
  }
}
</script>