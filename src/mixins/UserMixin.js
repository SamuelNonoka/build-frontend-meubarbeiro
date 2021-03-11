import NavigationMixin from '@/mixins/NavigationMixin'

const UserMixin = {
  mixins: [ NavigationMixin ],
  computed: {
    user () {
      if (this.getUser) return this.getUser()
      
      return {
        id: null,
        uuid: null,
        name: null,
        email: null,
        enabled: null,
        phone_number: null,
        image_url: null,
        create_at: null
      }
    }
  },
  methods: {
    isUserAutenticated () {
      return this.$store.getters['UserStore/tokenValido']
    },
    storeUser (token) {
      this.$store.dispatch('BarberStore/logout')
      this.$store.dispatch('UserStore/autenticar', token)
    },
    getUser () {
      return this.$store.getters['UserStore/user']
    },
    getUserToken () {
      return this.$store.getters['UserStore/payloadToken']
    },
    logoutUser () {
      this.$store.dispatch('UserStore/logout')
      localStorage.setItem('routePathSite', '')
      if (this.$route.name == 'home') window.location = window.location.origin + '/'
      else this.goTo('home')
    }
  }
}

export default UserMixin