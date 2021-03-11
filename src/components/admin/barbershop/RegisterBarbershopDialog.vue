<template>
  <div>
    <default-dialog
      ref="dialog"
      title="Cadastrar Barbearia"
      :btnDisabled="btnDisabled"
      @confirm="register" 
    >
      <input-field
        id="barber-name"
        label="Nome da barbearia"
        icon="home"
        @onKeyUp="setText"
      />
    </default-dialog>
    <overlay ref="overlay" />
  </div>
</template>

<script>
import Axios from "@/plugins/axios"

import DefaultDialog from '@/components/globais/dialogs/default/Default'
import InputField from '@/components/globais/form/input-field/InputField'
import Overlay from '@/components/globais/overlay/Overlay'
import BarberMixin from '@/mixins/BarberMixin'
import BarbershopMixin from '@/mixins/BarbershopMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import OverlayMixin from '@/mixins/OverlayMixin'

export default {
  name: 'RegisterBarbershopDialog',
  components: { DefaultDialog, InputField, Overlay },
  mixins: [ BarberMixin, BarbershopMixin, SnackbarMixin, OverlayMixin ],
  data: () => ({
    text: null
  }),
  computed: {
    btnDisabled () {
      return (!this.text || this.text.length < 2)
    }
  },
  methods: {
    onGetBarbershopByIdOnServiceSuccess (response) {
      this.storeBarbershop(response)
    },
    register () {
      this.showOverlay('Cadastrando barbearia...')
      Axios.post(`/barbershop`, {
        name: this.text,
        barber_id: this.barber.id
      })
      .then(response => {
        if (response.data.codigo === 200) {
          let token = response.data.corpo.token
          this.storeBarber(token)
          let msg = 'Barbearia cadastrada!'
          this.hideOverlaySuccess(msg)
          this.showSnackbar(msg)
          this.getBarbershopByIdOnService(this.barber.barbershop_id)
        } else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível cadastrar a barbearia!')
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
    setText (val) {
      this.text = val
    }
  }
}
</script>