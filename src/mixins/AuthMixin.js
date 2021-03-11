import NavigationMixin from '@/mixins/NavigationMixin'

const AuthMixin = {
  mixins: [
    NavigationMixin
  ],
  methods: {
    storeUser (response) {
      this.$store.dispatch('AuthStore/autenticar', response)
    },
    logout () {
      this.$store.dispatch('AuthStore/logout')
      this.goTo('login')
    },
    isAutenticated () {
      return this.$store.getters['BarberStore/autenticado']
    }
  }
}

export default AuthMixin