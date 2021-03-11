<template>
  <confirm 
    :success="success"
    :error="error"
  />
</template>

<script>
import Axios from '@/plugins/axios'
import Confirm from '@/components/auth/ConfirmRegister'
export default {
  name: 'ConfirmRegister',
  components: { Confirm },
  data: () => ({
    success: null,
    error: null
  }),
  mounted () {
    let token = this.$route.params.token
    Axios.post('/auth/user/register/confirm', { token: token })
    .then(response => {
      if (response.data.codigo === 200) this.success = response.data.corpo
      else this.error = response.data.corpo
    })
    .catch ((err) => {
      window.console.log(err) 
      this.error = 'Não foi possível confirmar o cadastro do usuário :(' 
    })
  }
}
</script>