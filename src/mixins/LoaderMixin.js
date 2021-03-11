export default {
  computed: {
    isLoading () {
      return this.$store.getters['LoaderStore/isLoading']
    }
  },
  methods: {
    showLoader () {
      this.$store.dispatch('LoaderStore/setLoader', true)
    },
    hideLoader () {
      this.$store.dispatch('LoaderStore/setLoader', false)
    }
  }
}