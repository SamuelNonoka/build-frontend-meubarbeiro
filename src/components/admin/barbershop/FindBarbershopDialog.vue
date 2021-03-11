<template>
  <v-dialog v-model="dialog" persistent max-width="400">
    <v-card 
      class="confirm-dialog py-2" 
      light
    >
      <v-card-title v-show="!loading" class="headline pt-2 px-4">
        {{ title }}
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider class="mt-0 mb-0"></v-divider>
      <template v-if="!loading && this.requests.length === 0">      
        <v-row class="mr-0">
          <v-col class="py-0 pr-0">
            <input-field
              id="search"
              class="mx-4 mt-4 pb-0 mb-0"
              icon="search"
              label="Digite o nome da barbearia"
              :value="search"
              @onEnter="getBarbers"
              @onKeyUp="changeData"
            />
          </v-col>
        </v-row>
        
        <v-card-text class="pa-0">
          <v-list-item v-if="barbershops.length > 0">
            <v-list-item-content>
              <v-list-item-title
                :key="barbershop.id"
                v-for="barbershop in barbershops"
              >
                <v-row class="align-center">
                  <v-col class="py-0">
                    {{ barbershop.name }}
                    <br>
                    <small>{{ barbershop.address }}</small>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col
                    cols="auto"
                    class="py-0 pl-0 d-flex flex-column aligns-right justify-right"
                  >
                    <v-btn
                      text
                      dark
                      class="primaryLight btn-add"
                      @click="requestBarbershop(barbershop.id)"
                    >
                      <v-icon>done</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-divider class="my-2"></v-divider>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <p v-else-if="pesquisou" class="text-center mt-2">
            Nenhuma barbearia encontrada
          </p>
        </v-card-text>
      </template>
      <template v-if="!loading && this.requests.length > 0">
        <v-list-item v-if="requests.length > 0">
          <v-list-item-title
            :key="request.id"
            v-for="request in requests"
          >
            <v-row class="align-center pt-2">
              <v-col class="py-0">
                {{ request.barbershop.name }}
              </v-col>
              <v-spacer></v-spacer>
              <v-col
                cols="auto"
                class="py-0 pl-0 d-flex flex-column aligns-right justify-right"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text
                      color="danger"
                      v-bind="attrs"
                      v-on="on"
                      @click="cancelBarbershopRequest(request.id)"
                    >
                      <v-icon>remove_circle</v-icon>
                    </v-btn>
                  </template>
                  <span>Cancelar solicitação</span>
                </v-tooltip>
              </v-col>
            </v-row>
            <v-divider class="my-2"></v-divider>
          </v-list-item-title>
        </v-list-item>
      </template>
      <v-card-actions class="px-4">
        <v-spacer></v-spacer>
        <btn-text 
          text="Fechar"
          :block="false"
          @clicked="dialog = false"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Axios from '@/plugins/axios'
import BtnText from '@/components/globais/buttons/text/BtnText'
import InputField from '@/components/globais/form/input-field/InputField'
import SnackbarMixin from '@/mixins/SnackbarMixin'
export default {
  name: 'FindBarbershopDialog',
  components: { BtnText, InputField },
  mixins: [ SnackbarMixin ],
  data: () => ({
    dialog: false,
    barbershops: [],
    loading: true,
    pesquisou: false,
    requests: [],
    search: ''
  }),
  computed: {
    title () {
      return this.requests.length === 0 ? 'Escolha a barbearia' : 'Solicitações enviadas'
    }
  },
  methods: {
    showDialog () {
      this.dialog = true
      this.search = ''
      this.checkRequests()
    },
    cancelBarbershopRequest (requestId) {
      Axios.delete(`/barbershop-request/${requestId}/cancel`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.search = ''
          this.barbershops = []
          let index = this.requests.findIndex(i => i.id === requestId)
          this.requests.splice(index, 1)
          this.showSnackbar('Solicitação cancelada com sucesso!')
        } else this.setError('Não foi possível cancelar a solicitação!')
      }).catch ((err) => { this.setError(err) })
    },
    checkRequests () {
      this.barbershops = []
      this.requests = []
      Axios.get('/barber/check-barbershop-request')
      .then(response => {
        if (response.data.codigo === 200) {
          this.requests  = response.data.corpo
          setTimeout(() => {
            this.loading = false
          }, 300);
        } else this.setError('Não foi possível verificar os agendamentos')
      })
      .catch ((err) => { this.setError(err) })
    },
    changeData (value, id) {
      this.$data[id] = value
    },
    getBarbers () {
      this.pesquisou = true
      let url = '/barbershop'
      if (this.search) url += `?name=${this.search}` 
      Axios.get(url)
      .then(response => {
        if (response.data.codigo === 200) {
          let barbers = response.data.corpo.map(i => {
            let address = ''
            if (i.address) address = `${i.address.city} - ${i.address.neighborhood}` 
            return {
              id: i.id,
              name: i.name,
              address:  address
            }
          })
          this.barbershops = barbers
        } else this.setError('Não foi possível buscar as barbearias')
      })
      .catch ((err) => { this.setError(err) })
    },
    requestBarbershop (barbershopId) {
      Axios.post('/barber/barbershop-request', {
        barbershop_id: barbershopId
      }).then(response => {
        if (response.data.codigo === 200) {
          this.requests = response.data.corpo
          this.showSnackbar('Solicitação enviada com sucesso!')
        }
        else this.setError('Não foi possível buscar as barbearias')
      }).catch ((err) => { this.setError(err) })
    },
    setError(msg) {
      this.barbershops = []
      this.loading = false
      this.showSnackbarErro(msg)
    }
  }
}
</script>

<style scoped>
.btn-add {
  border-radius: 50px;
  min-width: 45px !important;
  height: 44px !important;
  padding: 0 !important;
}
</style>