<template>
  <card v-if="requests.length > 0" class="barbers" title="Solicitações">
    <table>
      <thead>
        <tr>
          <th></th>
          <th class="text-left">Barbeiro</th>
          <th class="text-left">Status</th>
          <th class="text-center">#</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="request.id"
          v-for="request in requests"
        >
          <td>
            <div class="image">
              <img
                v-if="request.barber.image_url"
                :src="getUrl(request.barber.image_url)" 
              />
            </div>
          </td>
          <td class="name text-left">
            <strong v-if="request.barber.name" class="d-block">
              {{ request.barber.name }}
            </strong>
            <span>
              {{ request.barber.email }}
            </span>
          </td>
          <td class="status">
            Solicitação
          </td>
          <td class="actions text-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="d-inline"
                  v-bind="attrs"
                  v-on="on"
                  @click="approve(request)"
                >
                  <btn-icon 
                    icon="check"
                  />
                </div>
              </template>
              <span>
                Aprovar Solicitação
              </span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div
                  class="d-inline"
                  v-bind="attrs"
                  v-on="on"
                  @click="reprove(request)"
                >
                  <btn-icon
                    class="ml-2 danger" 
                    icon="close"
                  />
                </div>
              </template>
              <span>
                Reprovar Solicitação
              </span>
            </v-tooltip>
          </td>
        </tr>
      </tbody>
    </table>
  </card>
</template>

<script>
import Axios from '@/plugins/axios'
import BarberMixin from '@/mixins/BarberMixin'
import BtnIcon from '@/components/globais/buttons/icon/BtnIcon'
import Card from '@/components/globais/Card'
import SnackbarMixin from '@/mixins/SnackbarMixin'
export default {
  name: 'BarberRequests',
  components: { BtnIcon, Card },
  mixins: [ BarberMixin, SnackbarMixin ],
  data: () => ({
    requests: []
  }),
  mounted () {
    this.getBarbers()
  },
  methods: {
    approve (request) {
      Axios.post(`/barbershop-request/${request.id}/approve`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.showSnackbar('Solicitação aprovada!')
          let index = this.requests.findIndex(i => i.id === request.id)
          this.requests.splice(index, 1)
        } else this.showSnackbarErro(response.data.corpo)
      }).catch (err => {
        window.console.error(err)
        this.showSnackbarErro('Não foi possível aprovar a solicitação!')
      })
    },
    reprove (request) {
      Axios.delete(`/barbershop-request/${request.id}/reprove`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.showSnackbar('Solicitação reprovada!')
          let index = this.requests.findIndex(i => i.id === request.id)
          this.requests.splice(index, 1)
        } else this.showSnackbarErro(response.data.corpo)
      }).catch (err => {
        window.console.error(err)
        this.showSnackbarErro('Não foi possível reprovar a solicitação!')
      })
    },
    getBarbers () {
      Axios.get(`/barbershop-request/barbershop/${this.barber.barbershop_id}`)
      .then(response => {
        if (response.data.codigo === 200) this.requests = response.data.corpo
        else window.console.error(response.data.corpo)
      }).catch (err => window.console.error(err))
    },
    getUrl (image) {
      return `${this.$url_backend}${image}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';
.barbers { width: 100%; overflow: hidden; overflow-x: auto;
  table { width: 100%; min-width: 600px; border-spacing: 0;
    thead tr th { border-bottom: 2px solid $primaryLight; padding: 0 10px; }
    tbody tr { border-bottom: 1px solid $muted;
      td { padding: 10px; margin: 0 15px; }
    }
    td, th {
      &:first-child { width: 100px; margin: 0; } 
      .image {
        overflow: hidden;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: block;
        background-color: #cecece;
      }
      &.status { min-width: 100px; }
    }
  }
}
</style>