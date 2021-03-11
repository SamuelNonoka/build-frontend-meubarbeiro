<template>
  <service-form
    ref="dialog"
    title="Editar Serviço"
    @sendService="update"
  />
</template>

<script>
// Components
import ServiceForm from '@/components/admin/service/form/Form'
// Mixins
import BarbershopServiceMixin from '@/mixins/BarbershopServiceMixin'
import DialogMixin from '@/mixins/DialogMixin'

export default {
  name: 'Edit',
  components: { ServiceForm },
  mixins: [ BarbershopServiceMixin, DialogMixin ],
  data: () => ({
    id: null
  }),
  methods: {
    showEditDialog (service) {
      this.id = service.id
      this.$refs.dialog.showDialogForm(service)
    },
    update (service) {
     this.updateService(service, this.id)
    },
    onUpdateServiceSuccess (response) {
      response.id = this.id
      this.$emit('onSuccess', response)
    },
    onUpdateServiceError (error) {
      this.$emit('onError', error)
    }
  }
}
</script>