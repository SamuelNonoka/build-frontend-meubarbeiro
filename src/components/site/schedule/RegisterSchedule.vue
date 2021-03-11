<template>
  <v-row
    v-if="dialog"
    justify="center"
  >
    <v-dialog 
      v-model="dialog"
      persistent
      max-width="800"
    >
      <v-card 
        class="primaryDark create-schedule-dialog" 
      >
        <v-stepper v-model="step">
          <h1 class="primaryDark ma-0 py-2 px-2 px-md-4">
            {{ title }}
          </h1>
          
          <step-header :step="step" />

          <v-stepper-items>
            <step-content
              :step="1"
              :disabled="services.length == 0"
              :services="services"
              :barber="barber"
              :dateTime="dateTime"
              @clicked="step = 2"
              @cancel="cancel"
            >
              <services
                ref="stepServices"
                :serviceId="serviceId"
                :barbershop_id="barbershopId"
                @changed="changeServices" 
              />
            </step-content>
            <step-content
              :step="2"
              :disabled="false"
              :services="services"
              :barber="barber"
              :dateTime="dateTime"
              @clicked="step = 3"
              @cancel="cancel"
            >
              <barber
                ref="barberStep"
                :barbershopId="barbershopId"
                @loadedBarbers="loadedBarbers"  
                @choosedBarbers="choosedBarbers"
              />
            </step-content>
            <step-content
              :step="3"
              :services="services"
              :barber="barber"
              :dateTime="dateTime"
              :disabled="!dateTime"
              @clicked="step = 4"
              @cancel="cancel"
            >
              <choose-time
                ref="timeStep"
                :barbershop_id="barbershopId"
                :duration="duration"
                :choosedBarbers="choosedBarbersModel"
                @choosed="setDateTime"
              />
            </step-content>

            <step-content
              :step="4"
              :disabled="false"
              btnConfirmText="Finalizar"
              @clicked="confirmRegister"
              @cancel="cancel"
            >
              <cart 
                :services="services"
                :barber="barber"
                :dateTime="dateTime"
              />
            </step-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
    </v-dialog>

    <overlay ref="overlay" />
  </v-row>
</template>

<script>
const Barber = () => import('./RegisterScheduleStepBarber')
const Cart = () => import('./RegisterScheduleStepCart')
import Overlay from '@/components/globais/overlay/Overlay'
import StepContent from './RegisterScheduleStepContent'
const Services = () => import('./RegisterScheduleStepServices')
import StepHeader from './RegisterScheduleSteps'
const ChooseTime = () => import('./RegisterScheduleStepTime')

import NavigationMixin from '@/mixins/NavigationMixin'
import OverlayMixin from '@/mixins/OverlayMixin'
import ScheduleMixin from '@/mixins/ScheduleMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'

export default {
  name: 'RegisterSchedule',
  components: { Barber, Cart, ChooseTime, Overlay, StepContent, Services, StepHeader },
  mixins: [ NavigationMixin, OverlayMixin, ScheduleMixin, SnackbarMixin ],
  props: {
    barbershopId: { required: true },
    userId: { required: true }
  },
  data: () => ({
    dialog: false,
    step: 1,
    services: [],
    barbers: [],
    barber: null,
    choosedBarbersModel: [],
    dateTime: null,
    scheduleId: null,
    serviceId: null,
  }),
  computed: {
    duration () {
      if (this.services.length === 0) return '0:00'
      return this.services.reduce((time, item) => {
        let [ itemHours, itemMinutes ] = item.duration_time.split(':')
        let [ timeHours, timeMinutes ] = time.split(':')
        let hours = Number(itemHours) + Number(timeHours)
        let minutes = Number(itemMinutes) + Number(timeMinutes)
        hours += minutes / 60
        minutes = minutes % 60
        if (hours < 10) hours = `0${hours}`
        if (minutes < 10) minutes = `0${minutes}`
        return `${hours}:${minutes}`
      }, '0:00')  
    },
    title () {
      if (this.step == 1) return 'Escolha os serviços'
      else if (this.step == 2) return 'Escolha o barbeiro'
      else if (this.step == 3) return 'Escolha o horário'
      return 'Confirme o agendamento'
    }
  },
  watch: {
    step ( newValue, oldValue) {
      if (newValue === 2 && newValue > oldValue) this.$refs.barberStep.getBarbers()
      else if (newValue === 3 && newValue > oldValue) this.$refs.timeStep.getTimes()
    }
  },
  methods: {
    cancel () {
      this.step = 1
      this.services = []
      this.barbers = []
      this.barber = null
      this.chooseBarber = true
      this.dateTime = null
      this.dialog = false
    },
    changeServices (services) {
      this.services = services
    },
    confirmRegister () {
      this.showOverlay('Enviando solicitação...')
      let startDate = this.dateTime.toLocaleString()
      let [ date, time ] = startDate.split(' ')
      let [ day, month, year ] = date.split('/')
      startDate = `${year}-${month}-${day} ${time}`
      
      let endDate = this.services.reduce((dateTime, service) => {
        let [ serviceHours, serviceMinutes ] = service.duration_time.split(':')
        let hours = dateTime.getHours() + Number(serviceHours)
        let minutes = dateTime.getMinutes() + Number(serviceMinutes)
        hours += minutes / 60
        minutes = minutes % 60
        dateTime.setHours(hours, minutes)
        return dateTime
      }, this.dateTime)

      endDate = endDate.toLocaleString()
      let [ date2, time2 ] = endDate.split(' ')
      let [ day2, month2, year2 ] = date2.split('/')
      endDate = `${year2}-${month2}-${day2} ${time2}`
      
      let data = {
        barber_id: this.barber.id,
        user_id: this.userId,
        barbershop_id: this.barbershopId,
        start_date: startDate,
        end_date: endDate,
        services: this.services.map(i => {
          return { id: i.id, price: i.price }
        })
      }

      this.storeSchedule(data)
    },
    loadedBarbers (barbers) {
      this.barbers = barbers
    },
    onStoreScheduleSuccess (response) {
      this.hideOverlaySuccess('Agendamento solicitado!')
      this.scheduleId = response.id
    },
    onOverlaySuccess () {
      this.dialog = false
      this.goTo('site-schedule', { defaultScheduleSelectedId: this.scheduleId })
    },
    onStoreScheduleError (error) {
      this.hideOverlay()
      this.showSnackbarErro(error)
    },
    choosedBarbers (barbers) {
      this.choosedBarbersModel = barbers
    },
    setDateTime (dateTime, barberId) {
      this.dateTime = dateTime
      this.barber = this.barbers.find(i => i.id === barberId)
    },
    showDialog (serviceId = null) {
      this.dialog = true
      this.serviceId = serviceId
    }
  }
}
</script>

<style lang="scss" scoped>
.create-schedule-dialog h1 { font-size: 22px; color: #fff; }
</style>
