<template>
  <div class="schedule-group">
    <v-row>
      <v-col cols="auto" class="align-center py-0">
        <div class="schedule-group-legend d-flex mt-4">
          <div class="schedule-group-item mr-4">
            Agendados
          </div>

          <div class="schedule-group-item mr-4">
            Aguardando aprovação
          </div>

          <div class="schedule-group-item">
            Ausente
          </div> 
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col class="py-0 choose-date">
        <date-picker
          label="Escolha a data:"
          @change="setDate"  
        />
      </v-col>
    </v-row>
    <v-row v-if="schedules.length > 0">
      <v-col cols="3">
        <div class="primary pa-4" dark>
          <h1>
            Barbeiros:
          </h1>
          <barbers :schedules="schedules" />
        </div>
      </v-col>
      <v-col cols="9" class="py-0">
        <schedule-days
          :date="date" 
          :schedules="schedules"
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col class="d-flex">
        <v-alert
          class="d-inline-block my-8 mx-auto"
          type="info"
          color="primaryLight"
        >
          Não há agendamentos para este dia :(  
        </v-alert> 
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Axios from "@/plugins/axios"
import Barbers from './Barbers'
import DatePicker from '@/components/globais/form/date-picker/DatePicker'
import ScheduleDays from './ScheduleDays'
import BarbershopMixin from '@/mixins/BarbershopMixin'
import DateMixin from '@/mixins/DateMixin'

export default {
  name: 'ScheduleGroup',
  components: { Barbers, DatePicker, ScheduleDays },
  mixins: [ BarbershopMixin, DateMixin ],
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    schedules: []
  }),
  watch: {
    barbershop (value) {
      if (value) this.getSchedules()
    }
  },
  methods: {
    setDate (newDate) {
      this.date = newDate
      if (this.barbershop) this.getSchedules()
    },
    getSchedules () {
      let date = new Date(this.date)
      date.setDate(date.getDate() + 1)
      let url = `/schedule/barbershop/${this.barbershop.id}?date=${this.formatDateToDateEn(date)}`
      Axios.get(url)
      .then(response => {
        if (response.data.codigo === 200) this.schedules = response.data.corpo
        else this.setError(response.data.corpo)
      })
      .catch ((err) => this.setError(err))
    },
    setError (msg) {
      window.console.log(msg)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/theme.scss';

.schedule-group { align-items: center;
  h1 { font-size: 16px; font-weight: bold; margin: 0 0 10px; color: #fff; }
  .schedule-group-item {
    &:before { content: ""; display: inline-block; width: 12px; height: 12px; }
    &:first-child:before { background-color: $success; }
    &:nth-child(2):before { background-color: $accent; }
    &:last-child:before { background-color: $danger; }
  }
  .choose-date { flex-basis: 200px; flex-grow: unset; }
}
</style>