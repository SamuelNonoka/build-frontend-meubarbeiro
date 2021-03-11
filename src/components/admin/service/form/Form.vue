<template>
  <dialog-modal
    ref="dialog"
    :title="title"
    :btnDisabled="btnDisabled"
    @confirm="sendService"
  >
    <v-row>
      <v-col cols="12" class="py-0">
        <select-field
          id="serviceType"
          label="Tipo de serviço" 
          :items="servicesTypes"
          :rules="serviceTypeRules"
          :value="service ? service.service_type_id : ''"
          @onChange="setValue"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <input-field
          id="name"
          label="Nome" 
          placeholder="Corte máquina"
          counter="50"
          :value="service ? service.name : ''"
          :rules="descriptionRules"
          @onKeyUp="setValue"
        />
      </v-col>
      <v-col cols="6" class="py-0">
        <select-field
          id="durationTime"
          label="Duração:"
          :value="service ? service.duration_time : ''"
          :items="durationTimes"
          :rules="durationTimeRules"
          @onChange="setValue"
        />
      </v-col>
      <v-col cols="6" class="py-0">
        <money-field
          id="price"
          label="Valor"
          @onKeyUp="setValue"
          :value="service ? service.price : ''"
        />
      </v-col>
    </v-row>
  </dialog-modal>
</template>

<script>
// Components
import DialogModal from '@/components/globais/dialogs/default/Default'
import InputField from '@/components/globais/form/input-field/InputField'
import MoneyField from '@/components/globais/form/money-field/MoneyField'
import SelectField from '@/components/globais/form/select-field/SelectField'
// Mixins
import BarbershopMixin from '@/mixins/BarbershopMixin'
import DialogMixin from '@/mixins/DialogMixin'
import ServiceMixin from '@/mixins/ServiceMixin'
import TextMixin from '@/mixins/TextMixin'

export default {
  name: 'Create',
  components: { DialogModal, InputField, MoneyField, SelectField },
  mixins: [ BarbershopMixin, DialogMixin, ServiceMixin, TextMixin ],
  props: {
    title: {
      default: ''
    }
  },
  data: () => ({
    name: null,
    durationTime: null,
    serviceType: null,
    price: 0.00,
    descriptionRules: [
      value => !!value || 'Informe o nome do serviço',
      value => value.length <= 50 || 'O nome do serviço deve ter no máximo 50 caracteres'
    ],
    serviceTypeRules: [value => !!value || 'Informe o tipo de serviço'],
    durationTimeRules: [value => !!value || 'Informe o tempo de duração'],
    service: null
  }),
  computed: {
    btnDisabled () {
      if (!this.name || this.name.length > 50) return true
      else if (!this.durationTime || !this.serviceType) return true
      return false
    }
  },
  methods: {
    sendService () {
      let service = {
        barbershop_id: this.getBarbershop().id,
        name: this.name,
        duration_time: this.durationTime,
        service_type_id: this.serviceType,
        price: this.removeMoneyMask(this.price)
      } 
      this.$emit('sendService', service)
    },
    setValue (value, id) {
      this.$data[id] = value
    },
    showDialogForm (service = null) {
      if (service) {
        this.service = service
        this.setValue(this.service.name, 'name')
        this.setValue(this.service.price, 'price')
        this.setValue(this.service.duration_time, 'durationTime')
        this.setValue(this.service.service_type_id, 'serviceType')
      }
      this.showDialog()
    },
  }
}
</script>