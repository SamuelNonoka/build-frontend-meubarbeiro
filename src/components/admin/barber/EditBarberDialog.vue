<template>
  <div>
    <v-row justify="center" v-if="dialog">
      <v-dialog v-model="dialog" persistent max-width="400">
      <v-card 
        class="confirm-dialog py-2" 
        light
      >
        <v-card-title class="headline">
          Dados do Usuário
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-if="barber.image_url" cols="12" class="py-0 mt-4">
              <div class="image">
                <img :src="getUrl(barber.image_url)" />
              </div>
            </v-col>
            <v-col cols="12">
              <div class="description">
                <h1 class="name">
                  {{ barber.name }}
                </h1>
                <h2 class="mail">
                  {{ barber.email }}
                </h2>
              </div>
            </v-col>
            <v-col cols="12">
              <btn
                v-if="showBtnBlock(barber.barber_status_id)"
                text="Bloquear Barbeiro"
                class="danger"
                @clicked="blockBarber(barber.id)"
              />
              <btn
                v-if="showBtnUnlock(barber.barber_status_id)"
                text="Desbloquear Barbeiro"
                @clicked="unlockBarber(barber.id)"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
    <overlay ref="overlay" />
  </div>
</template>

<script>
import Axios from '@/plugins/axios'
import Btn from '@/components/globais/buttons/secondary/BtnSecondary'
import Overlay from '@/components/globais/overlay/Overlay'
import OverlayMixin from '@/mixins/OverlayMixin'
export default {
  name: 'EditBarberDialog',
  components: { Btn, Overlay },
  mixins: { OverlayMixin },
  data: () => ({
    barber: null,
    dialog: false
  }),
  methods: {
    blockBarber (barberId) {
      this.$refs.overlay.showOverlay('Aguardando...')
      Axios.post(`/barber/block/${barberId}`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.barber.barber_status_id = this.$BARBER_STATUS.BLOQUEADO
          let msg = response.data.corpo
          this.$refs.overlay.hideOverlaySuccess(msg)
          this.$emit('onBarberBlocked', barberId)
          this.hideDialog()
        } else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível bloquear o barbeiro!')
      })
    },
    unlockBarber (barberId) {
      this.$refs.overlay.showOverlay('Aguardando...')
      Axios.post(`/barber/unlock/${barberId}`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.barber.barber_status_id = this.$BARBER_STATUS.BLOQUEADO
          let msg = response.data.corpo
          this.$refs.overlay.hideOverlaySuccess(msg)
          this.$emit('onBarberUnlocked', barberId)
          this.hideDialog()
        } else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível desbloquear o barbeiro!')
      })
    },
    getUrl (image) {
      return `${this.$url_backend}${image}`
    },
    hideDialog () {
      this.dialog = false
    },
    setError (msg) {
      this.hideDialog()
      this.$refs.overlay.hideOverlayError(msg)
    },
    showBtnBlock (barberStatusId) {
      return Number(barberStatusId) === this.$BARBER_STATUS.ATIVO
    },
    showBtnUnlock (barberStatusId) {
      return Number(barberStatusId) === this.$BARBER_STATUS.BLOQUEADO
    },
    showDialog (barber) {
      this.barber = barber
      this.dialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
.image { width: 200px; margin: auto; }
.name { font-weight: 500; font-size: 2rem; text-align: center; margin: 0; }
.mail { margin: 0; text-align: center; font-size: 1.2rem; }
</style>