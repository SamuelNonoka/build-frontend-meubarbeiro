<template>
  <div>
    <default-dialog
      ref="dialog"
      title="Cadastrar Barbeiro"
      :btnDisabled="btnDisabled"
      @confirm="register" 
    >
      <input-field
        id="email"
        label="Digite o e-mail do barbeiro"
        v-model="email"
        append-inner-icon="check"
        :rules="emailRules"
        icon="check"
        required
        @onKeyUp="setDataValue"
      />
    </default-dialog>
    <overlay ref="overlay" />
  </div>
</template>

<script>
import Axios from '@/plugins/axios'
import DefaultDialog from '@/components/globais/dialogs/default/Default'
import InputField from '@/components/globais/form/input-field/InputField'
import Overlay from '@/components/globais/overlay/Overlay'
import BarberMixin from '@/mixins/BarberMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import OverlayMixin from '@/mixins/OverlayMixin'
import ValidationMixin from '@/mixins/ValidationMixin'

export default {
  name: 'RegisterBarberDialog',
  components: { DefaultDialog, InputField, Overlay },
  mixins: [ BarberMixin, SnackbarMixin, OverlayMixin, ValidationMixin ],
  data: () => ({
    email: null
  }),
  computed: {
    btnDisabled () {
      return !this.isEmailValid(this.email)
    }
  },
  methods: {
    register () {
      this.showOverlay('Enviando convite...')
      Axios.post(`/barber/invitation`, {
        email: this.email
      })
      .then(response => {
        if (response.data.codigo === 200) {
          let msg = response.data.corpo
          this.hideOverlaySuccess(msg)
          this.showSnackbar(msg)
        } else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível enviar o convite!')
      })
    },
    showDialog () {
      this.text = null
      this.$refs.dialog.showDialog()
    },
    setError (msg) {
      this.showSnackbarErro(msg)
      this.hideOverlayError(msg)
    },
    setDataValue (val, id) {
      this.$data[id] = val
    }
  }
}
</script>