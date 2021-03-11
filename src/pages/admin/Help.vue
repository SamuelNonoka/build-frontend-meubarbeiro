<template>
  <div class="help">
    <card>
      <v-row>
        <v-col cols="12">
          <textarea-field
            @onKeyUp="setText"
            label="Descreva a sua dúvida"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="auto">
          <btn-secondary 
            text="enviar"
            @clicked="enviar"
            :disabled="text.length == 0"
          />  
        </v-col>  
      </v-row>
    </card>
    <overlay ref="overlay" />
  </div>
</template>

<script>
import Axios from '@/plugins/axios'
import BtnSecondary from '@/components/globais/buttons/secondary/BtnSecondary'
import Card from '@/components/globais/Card'
import Overlay from '@/components/globais/overlay/Overlay'
import TextareaField from '@/components/globais/form/textarea-field/TextareaField'
import OverlayMixin from '@/mixins/OverlayMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'

export default {
  name: 'Help',
  components: { BtnSecondary, Card, Overlay, TextareaField },
  mixins: [ OverlayMixin, SnackbarMixin ],
  data: () => ({
    text: ''
  }),
  methods: {
    enviar () {
      this.showOverlay('Enviando mensagem...')

      Axios.post(`/help`, {
        text: this.text
      })
      .then(response => {
        if (response.data.codigo === 200) {
          let text = 'Sua mensagem foi encaminhada com sucesso!<br>Em breve entraremos em contato.'
          this.hideOverlaySuccess(text)
          this.showSnackbar(text)
          this.setText('')
        } else this.setError('Não foi possível enviar sua mensagem<br>' + response.data.corpo)
      })
      .catch (() => this.setError('Não foi possível enviar sua mensagem!'))    
    },
    setText (data) {
      this.text = data
    },
    setError (msg) {
      this.showSnackbarErro(msg)
      this.hideOverlayError(msg)
    }
  }
}
</script>