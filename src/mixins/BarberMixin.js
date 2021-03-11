import Axios from '@/plugins/axios'
import NavigationMixin from '@/mixins/NavigationMixin'

const BarberMixin = {
  mixins: [NavigationMixin],
  computed: {
    barber () {
      return this.$store.getters['BarberStore/barber']
    }
  },
  methods: {
    getBarber () {
      return this.$store.getters['BarberStore/barber']
    },
    getBarberByBarbershopIdOnService (barbershopId) {
      Axios.get(`/barbershop/${barbershopId}/barber`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.onGetBarberByBarbershopIdOnServiceSuccess(response.data.corpo)
        } else this.onGetBarberByBarbershopIdOnServiceError(response.data.corpo)
      })
      .catch ((err) => {
        this.onGetBarberByBarbershopIdOnServiceError('Não foi possível recuperar os dados da barbearia!')
        window.console.log(err)
      })
    },
    onGetBarberByBarbershopIdOnServiceError (err) { window.console.log(err) },
    onGetBarberByBarbershopIdOnServiceSuccess (response) { window.console.log(JSON.stringify(response)) },
    getToken () {
      return this.$store.getters['BarberStore/payloadToken']
    },
    isAutenticated () {
      return this.$store.getters['BarberStore/tokenValido']
    },
    logout () {
      this.$store.dispatch('BarberStore/logout')
      this.$store.dispatch('BarbershopStore/logout')
      localStorage.routePathAdmin = ''
      this.goTo('login-barber')
    },
    storeBarber (token) {
      this.$store.dispatch('UserStore/logout')
      this.$store.dispatch('BarberStore/autenticar', token)
    }
  }
}

export default BarberMixin