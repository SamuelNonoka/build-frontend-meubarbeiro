<template>
	<app-change-password
    :progressLoader="progressLoader"
    @onChangePassword="onChangePassword"
  />
</template>

<script>
import Axios from "@/plugins/axios"
import AppChangePassword from '@/components/auth/ChangePassword'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'ChangePassword',
  components: { AppChangePassword },
  mixins: [ SnackbarMixin, NavigationMixin ],
  data: () => ({
    progressLoader: false  
  }),
  methods: {
    onChangePassword (data) {
      this.progressLoader = true
      Axios.post('/auth/user/change-password', data)
      .then(response => {
        if (response.data.codigo === 200) {
          this.progressLoader = false
          this.showSnackbar('Senha alterada com sucesso!')
          this.goTo('login')
        }
        else this.setErro(response.data.corpo)
      })
      .catch (() => { this.setErro('Não foi possível alterar a senha!') })
    },
    setErro (msg) {
      this.progressLoader = false
      this.showSnackbarErro(msg)
    }
  }
}
</script>