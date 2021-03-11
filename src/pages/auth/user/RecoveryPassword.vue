<template>
	<app-recovery-password
    :progressLoader="progressLoader"
    @onRecoveryPassword="onRecoveryPassword"
  />
</template>

<script>
import Axios from "@/plugins/axios"
import AppRecoveryPassword from '@/components/auth/RecoveryPassword'
import NavigationMixin from '@/mixins/NavigationMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'

export default {
  name: 'RecoveryPassword',
  components: { AppRecoveryPassword },
  mixins: [ NavigationMixin, SnackbarMixin ],
  data: () => ({
    progressLoader: false
  }),
  methods: {
    onRecoveryPassword (data) {
      this.progressLoader = true
      Axios.post('/auth/user/recovery-password', data)
      .then(response => {
        if (response.data.codigo === 200) {
          this.showSnackbar('A instrução para recuperar sua senha foi enviada para o e-mail informado!')
          this.goTo('login')
        } else this.setErro(response.data.corpo)
      })
      .catch (() => { this.setErro('Não foi enviar o e-mail!') })
    },
    setErro (msg) {
      this.progressLoader = false
      this.showSnackbarErro(msg)
    }
  }
}
</script>