<template>
  <div class="site-service elevation-1">
    <h1 class="secondary py-2 px-6 font-weight-bold">
      Preços & serviços
    </h1>

    <div class="site-service-content primaryDark">
      <choose-service-type @change="changeServiceType" />
      <carousel
        v-if="servicesComputed.length > 0"
        :perPage="6"
      >
        <slide
          :key="index"
          v-for="(service, index) in servicesComputed"
          class="py-3 px-1"
        >
          <div
            class="site-service-content-item text-center"
            @click="onServiceChoosed(service)"
          >
            <h2>
              {{ service.name }}
            </h2>

            <p class="font-weight-bold">
              R$ {{ setMoneyMask(service.price) }}
            </p>
          </div>
        </slide>
      </carousel>
      <p
        v-else
        class="text-center ma-0 pb-4 d-flex justify-center align-center"
      >
        Nenhum serviço encontrado
      </p>
    </div>
  </div>
</template>

<script>
import ChooseServiceType from './ChooseServiceType'

import BarbershopServiceMixin from '@/mixins/BarbershopServiceMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import TextMixin from '@/mixins/TextMixin'

export default {
  name: 'Service',
  mixins: [ BarbershopServiceMixin, SnackbarMixin, TextMixin ],
  components: { ChooseServiceType },
  props: {
    id: { required: true }
  },
  data: () => ({
    serviceType: null,
    services: []
  }),
  computed: {
    servicesComputed () {
      if (!this.serviceType) return this.services
      return this.services.filter(i => i.service_type_id == this.serviceType)
    }
  },
  watch: {
    id (newValue) {
      if (newValue) this.getServicesByBarbershopId(this.id)
    }
  },
  methods: {
    changeServiceType (value) {
      this.serviceType = value
    },
    onGetServicesByBarbershopIdSuccess (response) {
      this.services = response
    },
    onGetServicesByBarbershopIdError (error) {
      this.showSnackbarErro(error)
    },
    onServiceChoosed (service) {
      this.$emit('onServiceChoosed', service)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.site-service {
  h1 {
    margin: 0;
    font-size: 18px;
    color: $primaryDark;
    @include border-radius-mixin(5px 5px 0 0);
  }
  .site-service-content {    
    > p { color: #fff; }
    
    .VueCarousel {
      .site-service-content-item {
        margin: auto;
        width: 150px;
        height: 100%;
        padding: 10px;
        cursor: pointer;
        background: $primary;
        border: 1px solid $primary;
        align-items: stretch;
        display: flex;
        justify-content: center;
        flex-direction: column;
        @include border-radius-mixin(5px);
        @include transition-mixin(all, .5s);
        &:hover {
          background-color: $primaryDark;
          border-color: #fff;
          @include transition-mixin(all, .5s);
          small { color: #fff; }
        }
        h2 { color: #fff; font-size: 16px; margin: 0; }
        p { margin: 5px 0 0; color: $secondary; font-size: 22px; }
        small { font-size: 14px; }
      }
    }
  }
}
</style>

<style lang="scss">
@import 'src/scss/theme.scss';

.site-service {
  .VueCarousel-dot-container { margin-top: 0 !important;
    .VueCarousel-dot { margin-top: 0 !important; outline: none !important;
      &.VueCarousel-dot--active { background-color: $secondaryDark !important; }
    }
  }
}
</style>