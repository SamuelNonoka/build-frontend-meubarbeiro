const OverlayMixin = {
  methods: {
    showOverlay(text = null) {
      let self = this
      setTimeout(function(){
        self.$refs.overlay.showOverlay(text)
      }, 1)
    },
    hideOverlaySuccess (text = '') {
      setTimeout(() => {
        this.$refs.overlay.hideOverlaySuccess(text)
      }, 1)
      
      if (text) {
        setTimeout(() => {
          this.onOverlaySuccess(text)
        }, 1000)
      } else this.onOverlaySuccess()
    },
    hideOverlayError (text = null) {
      this.$refs.overlay.hideOverlayError(text)
    },
    hideOverlay () {
      this.$refs.overlay.hideOverlay()
    },
    onOverlaySuccess (text = null) { 
      if (text) window.console.log('onOverlaySuccess: ' + text)
    }
   }
}

export default OverlayMixin