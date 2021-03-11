const FormMixin = {
  methods: {
    focusToNext (input) {
      this.$refs[input].focus()
      // document.querySelector(`#${input}`).click()
    }
  }
}

export default FormMixin