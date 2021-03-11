<template>
  <service-form
    ref="dialog"
    title="Cadastrar Serviço" 
    @sendService="addService"
  />
</template>

<script>
// Components
import ServiceForm from '@/components/admin/service/form/Form'
// Mixins
import BarbershopServiceMixin from '@/mixins/BarbershopServiceMixin'
import DialogMixin from '@/mixins/DialogMixin'

export default {
  name: 'Create',
  components: { ServiceForm },
  mixins: [ BarbershopServiceMixin, DialogMixin ],
  methods: {
    addService (service) {
      this.storeService(service)
    },
    onStoreServiceSuccess (response) {
      this.$emit('onSuccess', response)
    },
    onStoreServiceError (error) {
      this.$emit('onError', error)
    }
  }
}
</script>