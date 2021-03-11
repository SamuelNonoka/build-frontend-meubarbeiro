const SnackbarMixin = {
  data () {
    return {
      snackbarConfig: {
        text: '',
        type: 'success'
      }
    }
  },
  methods: {
    closeSnackbar () {
      this.snackbar = null
    },
    showSnackbar (text) {
      this.snackbarConfig.type = 'accent'
      this.snackbarConfig.text = text
      this.$store.dispatch('SnackbarStore/showSnackbar', {config: this.snackbarConfig})
      .then(() => {})
    },
    showSnackbarErro (text) {
      this.snackbarConfig.type = 'error'
      this.snackbarConfig.text = text
      this.$store.dispatch('SnackbarStore/showSnackbar', {config: this.snackbarConfig})
      .then(() => {})
    }
  }
}

export default SnackbarMixin
