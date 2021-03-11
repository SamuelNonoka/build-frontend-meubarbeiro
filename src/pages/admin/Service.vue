<template>
  <div cssClass="services">
    <div
      v-if="!loading && servicesCmpt.length === 0"
      class="d-flex services-empty justify-center"
    >
      <div class="align-self-center">
        <btn-secondary 
          text="Cadastrar Serviço"
          icon="add"
          @clicked="addService"
        />
      </div>
    </div>
    <div v-if="servicesCmpt.length > 0">
      <btn-secondary 
        text="Cadastrar"
        icon="add"
        cssClass="py-2"
        class="mt-8 mt-md-4"
        :block="false"
        @clicked="addService"
      />

      <card class="mt-4">
        <div class="service-table">
          <table>
            <thead>
              <tr>
                <th class="px-2" colspan="1">Nome</th>
                <th class="px-2" colspan="1">Tipo</th>
                <th class="px-2" colspan="1">Valor</th>
                <th class="px-2" colspan="1">Duração</th>
                <th class="px-2" colspan="1">#</th>
              </tr>
            </thead>
            <tbody>
              <tr
                :key="index"
                v-for="(service, index) in servicesCmpt"
              >
                <td class="pa-2" colspan="1">
                  {{ service.name }}
                </td>
                <td class="pa-2" colspan="1">
                  {{ getServiceType(service.service_type_id) }}
                </td>
                <td class="pa-2" colspan="1">
                  {{ setMoneyMask(service.price) }}
                </td>
                <td class="pa-2" colspan="1">
                  {{ getServiceTime(service.duration_time ) }}
                </td>
                <td class="pa-2" colspan="1">
                  <btn-icon
                    icon="edit"
                    color="primaryLight" 
                    @clicked="editService(service)"
                  />

                  <btn-icon
                    icon="remove"
                    color="danger"
                    class="ml-2"
                    @clicked="removeService(service)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>

    <create-service-modal
      ref="createServiceModal"
      @onSuccess="onSuccessCreateModal"
      @onError="onErrorModal"
    />
    <edit-service-modal
      ref="editServiceModal" 
      @onSuccess="onSuccessUpdateModal"
      @onError="onErrorModal"
    />
    <confirm-dialog
      ref="removeServiceModal"
      title="Deseja realmente remover o serviço?"
      :description="dialogDescription"
      :danger="true"
      @confirm="confirmRemove"
    />
    <overlay ref="overlay" />
  </div>
</template>

<script>
import BtnIcon from '@/components/globais/buttons/icon/BtnIcon'
import BtnSecondary from '@/components/globais/buttons/secondary/BtnSecondary'
import Card from '@/components/globais/Card'
import CreateServiceModal from '@/components/admin/service/create/Create'
import ConfirmDialog from '@/components/globais/dialogs/confirm/Confirm'
import EditServiceModal from '@/components/admin/service/edit/Edit'
import Overlay from '@/components/globais/overlay/Overlay'
import BarberMixin from '@/mixins/BarberMixin'
import BarbershopServiceMixin from '@/mixins/BarbershopServiceMixin'
import OverlayMixin from '@/mixins/OverlayMixin'
import ServiceMixin from '@/mixins/ServiceMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import TextMixin from '@/mixins/TextMixin'

export default {
  name: 'Service',
  components: { BtnIcon, BtnSecondary, Card, ConfirmDialog, CreateServiceModal, EditServiceModal, Overlay },
  mixins: [ BarberMixin, BarbershopServiceMixin, OverlayMixin, ServiceMixin, SnackbarMixin, TextMixin ],
  data: () => ({
    services: [],
    loading: false,
    dialogDescription: null,
    id: null
  }), 
  computed: {
    showContent () {
      return this.barber.barbershop_id
    },
    servicesCmpt () {
      return this.services
    }
  },
  mounted () {
    this.showOverlay()
    this.loading = true
    if (this.barber.barbershop_id)
      this.getServicesByBarbershopId(this.barber.barbershop_id)
  },
  methods: {
    addService () {
      this.$refs.createServiceModal.showDialog()
    },
    confirmRemove () {
      this.destroyService(this.id)
    },
    editService (service) {
      this.$refs.editServiceModal.showEditDialog(service)
    },
    getServiceTime (durationTime) {
      durationTime = durationTime.split(':')
      return `${durationTime[0]}:${durationTime[1]}`
    },
    getServiceType (service_type_id) {
      let service = this.servicesTypes.find(i => i.value == service_type_id)
      return service.text
    },
    onDestroyServiceSuccess (response) {
      this.showSnackbar(response)
      let index = this.services.findIndex(i => i.id == this.id)
      if (index != -1) this.services.splice(index, 1)
    },
    onDestroyServiceError (error) {
      this.showSnackbarErro(error)
    },
    onGetServicesByBarbershopIdError (error) {
      this.loading = false
      this.hideOverlaySuccess('')
      this.showSnackbarErro(error)
    },
    onGetServicesByBarbershopIdSuccess (response) {
      this.loading = false
      this.hideOverlay()
      this.services = response
    },
    onSuccessCreateModal (response) {
      this.showSnackbar('Serviço salvo com sucesso!')
      this.services.push(response)
    },
    onErrorModal (error) {
      this.showSnackbarErro(error)
    },
    onSuccessUpdateModal (response) {
      this.showSnackbar('Serviço salvo com sucesso!')
      let index = this.services.findIndex(i => i.id == response.id)
      if (index >= 0) {
        this.services[index].name = response.name
        this.services[index].service_type_id = response.service_type_id
        this.services[index].price = response.price
        this.services[index].duration_time = response.duration_time
        this.services[index].barbershop_id = response.barbershop_id
      }
    },
    removeService (service) {
      this.id = service.id
      this.dialogDescription = service.name
      this.$refs.removeServiceModal.showDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.services { 
 .services-empty { height: calc(100vh - 162px); }
  .service-table { width: 100%; overflow: hidden; overflow-x: auto;
    table { width: 100%;
      thead tr { border-bottom: 2px solid $primaryLight; }
      tr { display: flex; align-items: center; border-bottom: 1px solid $muted;
        td, th { text-align: center; width: -webkit-fill-available;
          &:first-child { text-align: left; }
          &:last-child { width: 440px; }
        }
      }
    }
  }
}
</style>