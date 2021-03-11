<template>
  <div class="step-content-barber grey lighten-1 pa-4 app-border-radius-small">
    <v-card class="mt-4 elevation-1 pa-2">
      <div
        :key="barber.id"
        v-for="(barber, index) in barbers"  
      >
        <v-divider v-if="index > 0"></v-divider>
        <barber-item 
          :barber="barber"
          @toggle="setBarber"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
import BarberItem from './RegisterScheduleStepBarberItem'
import BarberMixin from '@/mixins/BarberMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'

export default {
  name: 'RegisterScheduleStepBarber',
  components: { BarberItem },
  mixins: [ BarberMixin, SnackbarMixin ],
  props: {
    barbershopId: { default: null }
  },
  data: () => ({
    barbers: []
  }),
  methods: {
    getBarbers () {
      this.getBarberByBarbershopIdOnService(this.barbershopId)
    },
    onGetBarberByBarbershopIdOnServiceError (err) {
      this.showSnackbarErro(err)
    },
    onGetBarberByBarbershopIdOnServiceSuccess (response) {
      this.barbers = response
      this.$emit('loadedBarbers', this.barbers)
    },
    setBarber (barber) {
      let index = this.barbers.findIndex(i => i.id == barber.id)
      this.barbers[index] = barber
      let barbers = this.barbers.filter(i => i.choosed == true)
      this.$emit('choosedBarbers', barbers)
    }
  }
}
</script>