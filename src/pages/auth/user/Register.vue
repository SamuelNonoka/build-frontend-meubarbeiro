<template>
  <register-app
    :alertInfo="alertInfo"
    :progressLoader="loading"
    @register="register"
    @registerWithGoogle="registerWithGoogle"
  />
</template>

<script>
import Axios from '@/plugins/axios'
import RegisterApp from '@/components/auth/Register'

import NavigationMixin from '@/mixins/NavigationMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import UserMixin from '@/mixins/UserMixin'

export default {
  name: 'Register',
  components: { RegisterApp },
  mixins: [ NavigationMixin, SnackbarMixin, UserMixin ],
  data: () => ({
    alertInfo: null,
    loading: false
  }),
  methods: {
    register (data) {
      this.loading = true
      Axios.post('/auth/user/register', data)
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
      Axios.post('/auth/user/register-google', data)
      .then(response => {
        if (response.data.codigo === 200) {
          this.showSnackbar('Cadastro realizado com sucesso!')
          this.storeUser(response.data.corpo)
          this.goTo('home')
        } else this.showSnackbarErro(response.data.corpo)
      })
      .catch (() => this.showSnackbarErro('Não foi possível realizar seu cadastro!'))
    }
  }
}
</script>