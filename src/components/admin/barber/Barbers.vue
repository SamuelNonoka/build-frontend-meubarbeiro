<template>
  <card title="Barbeiros" class="barbers">
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
          :key="barber.id"
          v-for="barber in barbers"
        >
          <td>
            <div class="image">
              <img
                v-if="barber.image_url"
                :src="getUrl(barber.image_url)" 
              />
            </div>
          </td>
          <td class="name text-left">
            <strong v-if="barber.name" class="d-block">
              {{ barber.name }}
            </strong>
            <span>
              {{ barber.email }}
            </span>
          </td>
          <td class="status">
            {{ barber.status.name }}
          </td>
          <td class="actions text-center">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div
                  v-if="showBtnEdit(barber.id)"
                  class="d-inline"
                  v-bind="attrs"
                  v-on="on"
                  @click="editBarber(barber)"
                >
                  <btn-icon 
                    icon="edit"
                  />
                </div>
              </template>
              <span>
                Editar Usuário
              </span>
            </v-tooltip>
          </td>
        </tr>
      </tbody>
    </table>
    <edit-barber-dialog
      ref="edit"
      @onBarberBlocked="onBarberBlocked"
      @onBarberUnlocked="onBarberUnlocked"
    />
  </card>
</template>

<script>
import Axios from '@/plugins/axios'
import BarberMixin from '@/mixins/BarberMixin'
import BtnIcon from '@/components/globais/buttons/icon/BtnIcon'
import Card from '@/components/globais/Card'
import EditBarberDialog from '@/components/admin/barber/EditBarberDialog'
import SnackbarMixin from '@/mixins/SnackbarMixin'
export default {
  name: 'Barbers',
  components: { BtnIcon, Card, EditBarberDialog },
  mixins: [ BarberMixin, SnackbarMixin ],
  data: () => ({
    barbers: []
  }),
  mounted () {
    this.getBarbers()
  },
  methods: {
    editBarber (barber) {
      this.$refs.edit.showDialog(barber)
    },
    getBarbers () {
      Axios.get(`/barber/by-barbershop`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.barbers = response.data.corpo
        } else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível cadastrar a barbearia!')
      })
    },
    getUrl (image) {
      return `${this.$url_backend}${image}`
    },
    onBarberBlocked (barberId) {
      let index = this.barbers.findIndex(i => Number(i.id) === Number(barberId))
      this.barbers[index].status.name = 'Bloqueado'
    },
    onBarberUnlocked (barberId) {
      let index = this.barbers.findIndex(i => Number(i.id) === Number(barberId))
      this.barbers[index].status.name = 'Ativo'
    },
    setError (msg) {
      this.showSnackbarErro(msg)
    },
    showBtnEdit (id) {
      return this.barber.id !== id
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