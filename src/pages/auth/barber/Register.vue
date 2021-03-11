<template>
  <register-app
    :alertInfo="alertInfo"
    :isBarber="true"
    :token="token"
    :progressLoader="loading"
    @register="register"
    @registerWithGoogle="registerWithGoogle"
  />
</template>

<script>
import Axios from '@/plugins/axios'
import RegisterApp from '@/components/auth/Register'

import BarberMixin from '@/mixins/BarberMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'Register',
  components: { RegisterApp },
  mixins: [ BarberMixin, SnackbarMixin, NavigationMixin ],
  data: () => ({
    alertInfo: null,
    loading: false,
    token: null
  }),
  mounted () {
    this.token = (this.$route.query.token) ? this.$route.query.token.replace(/ /g, '+') : null
  },
  methods: {
    register (data) {
      data.token = this.token
      this.loading = true
      Axios.post('/auth/barber/register', data)
      .then(response => {
        this.loading = false
        if (response.data.codigo === 200) this.alertInfo = "Obrigado por ter se cadastrado!<br>Verifique sua caixa de e-mail e confirme o seu cadastro."
        else this.showSnackbarErro(response.data.corpo)
      })
      .catch (() => { 
        this.loading = false
        this.showSnackbarErro('Não foi possível realizar seu cadastro!') 
      })
    },
    registerWithGoogle (data) {
      Axios.post('/auth/barber/register-google', data)
      .then(response => {
        if (response.data.codigo === 200) {
          this.showSnackbar('Cadastro realizado com sucesso!')
          this.setBarber(response.data.corpo)
          //this.goTo('login-barber')
        } else this.showSnackbarErro(response.data.corpo)
      })
      .catch ((err) => {
        this.showSnackbarErro('Não foi possível realizar seu cadastro!')
        window.console.error(err)
      })
    },
    setBarber (token) {
      this.storeBarber(token)
      this.goTo('admin')
    }
  }
}
</script>