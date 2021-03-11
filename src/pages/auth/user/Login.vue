<template>
  <login-app
    :alertInfo="alertInfo"
    :progressLoader="loading"
    @login="login"
    @loginWithGoogle="loginWithGoogle"
  />
</template>

<script>
import Axios from '@/plugins/axios'
import UserMixin from '@/mixins/UserMixin'
import LoginApp from '@/components/auth/Login'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import NavigationMixin from '@/mixins/NavigationMixin'
export default {
  name: 'Login',
  components: { LoginApp },
  mixins: [ UserMixin, SnackbarMixin, NavigationMixin ],
  data: () => ({
    alertInfo: null,
    loading: false
  }),
  methods: {
    login (data) {
      this.loading = true
      Axios.post('/auth/user/login', data)
      .then(response => {
        this.loading = false
        if (response.data.codigo === 200) {
          let token = response.data.corpo
          this.setUser(token)
        } else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível realizar login na aplicação!')
      })
    },
    loginWithGoogle (data) {
      Axios.post('/auth/user/login-google', data)
      .then(response => {
        if (response.data.codigo === 200) {
          let token = response.data.corpo
          this.setUser(token)
        } else this.setError(response.data.corpo)
      })
      .catch (() => this.setError('Não foi possível realizar login na aplicação!'))
    },
    setError (msg) {
      this.alertInfo = null
      this.loading = false
      this.showSnackbarErro(msg)
    },
    setUser (token) {
      let routePath = localStorage.routePathSite
      this.storeUser(token)
      let user = this.getUser()
      if (user) {
        if (user.enabled) {
          if (routePath && routePath !== this.$route.path) this.goToPath(routePath)
          else this.goTo('home')
        }
        else this.alertInfo = "Seu cadastro ainda não foi confirmado!!<br>Verifique sua caixa de e-mail e confirme o seu cadastro."
      } else this.setError('Não foi possível recuperar o token de acesso à aplicação!')
    }
  }
}
</script>