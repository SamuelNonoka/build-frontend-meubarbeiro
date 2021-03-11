<template>
  <div class="step-content-services">
    <filter-service-type @change="changeServiceType" />

    <v-row class="grey lighten-1 pa-4 mt-4 app-border-radius-small">
      <v-col
        :key="service.id"
        v-for="service in servicesComputed"
        cols="12" sm="4" md="3"
      >
        <div
          class="primaryLight pa-2 text-center step-content-service-item app-border-radius-small"
          :class="{ active: service.choosed }"
          @click="chooseService(service.id)"
        >
          <h2 class="mb-1">
            {{ service.name }}
          </h2>

          <p class="ma-0">
            <strong>
              R$ {{ setMoneyMask(service.price) }}
            </strong>
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import FilterServiceType from '@/components/site/service/ChooseServiceType'

import BarbershopServiceMixin from '@/mixins/BarbershopServiceMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import TextMixin from '@/mixins/TextMixin'

export default {
  name: 'RegisterScheduleStepServices',
  components: { FilterServiceType },
  mixins: [ BarbershopServiceMixin, SnackbarMixin, TextMixin ],
  props: {
    barbershop_id: { required: true },
    serviceId: { default: null }
  },
  data: () => ({
    services: [],
    serviceType: null
  }),
  computed: {
    servicesComputed () {
      if (!this.serviceType) return this.services
      return this.services.filter(i => i.service_type_id == this.serviceType)
    }
  },
  watch: {
    barbershop_id (newValue) {
      if (newValue) this.getServicesByBarbershopId(this.barbershop_id)
    }
  },
  mounted () {
    if (this.barbershop_id) this.getServicesByBarbershopId(this.barbershop_id)
  },
  methods: {
    changeServiceType (serviceType) {
      this.serviceType = serviceType
    },
    chooseService (id) {
      let index = this.services.findIndex(i => Number(i.id) === Number(id))
      this.services[index].choosed = !this.services[index].choosed
      let items = this.services.filter(i => i.choosed == true)
      this.$emit('changed', items)
    },
    onGetServicesByBarbershopIdSuccess (response) {
      let services = response.map(i => {
        i.choosed = false
        return i
      })
      
      if (this.serviceId) {
        let index = services.findIndex(i => Number(i.id) === Number(this.serviceId))
        let service = services[index]
        services.splice(index, 1)
        services.unshift(service)
      }

      this.services = services
      if (this.serviceId) this.chooseService(this.serviceId)
    },
    onGetServicesByBarbershopIdError (error) {
      this.showSnackbarErro(error)
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.step-content-services {
  .step-content-service-item { cursor: pointer;
    &.active { background-color: $primaryDark !important;
      h2 { color: #fff !important; }
    }
    h2 { color: $primaryDark; @include text-ellipsis (2, 18px); justify-content: center !important; }
    p { color: $secondary !important; font-size: 16px; }
  }
}
</style>