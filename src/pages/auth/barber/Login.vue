<template>
  <login-app
    :alertInfo="alertInfo"
    :progressLoader="loading"
    :isBarber="true"
    @login="login"
    @loginWithGoogle="loginWithGoogle"
  />
</template>

<script>
import Axios from '@/plugins/axios'
import BarberMixin from '@/mixins/BarberMixin'
import LoginApp from '@/components/auth/Login'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'Login',
  components: { LoginApp },
  mixins: [ BarberMixin, SnackbarMixin, NavigationMixin ],
  data: () => ({
    alertInfo: null,
    loading: false
  }),
  methods: {
    login (data) {
      this.loading = true
      Axios.post('/auth/barber/login', data)
      .then(response => {
        this.loading = false
        if (response.data.codigo === 200) {
          let token = response.data.corpo
          this.setBarber(token)
        } else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível realizar login na aplicação!')
      })
    },
    loginWithGoogle (data) {
      Axios.post('/auth/barber/login-google', data)
      .then(response => {
        if (response.data.codigo === 200) {
          let token = response.data.corpo
          this.setBarber(token)
        } else this.setError(response.data.corpo)
      })
      .catch (() => this.setError('Não foi possível realizar login na aplicação!'))
    },
    setBarber (token) {
      let routePath = localStorage.routePathAdmin
      this.storeBarber(token)
      let barber = this.getBarber()
      if (barber) {
        if (barber.enabled) {
          if (routePath && routePath !== this.$route.path) this.goToPath(routePath)
          else this.goTo('admin')
        }
        else this.alertInfo = "Seu cadastro ainda não foi confirmado!!<br>Verifique sua caixa de e-mail e confirme o seu cadastro."
      } else this.setError('Não foi possível recuperar o token de acesso à aplicação!')
    },
    setError (msg) {
      this.alertInfo = null
      this.loading = false
      this.showSnackbarErro(msg)
    }
  }
}
</script>