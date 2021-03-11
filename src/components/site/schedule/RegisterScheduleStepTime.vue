<template>
  <div class="step-time">
    <v-row>
      <v-col cols="auto" class="py-0">
        <date-picker
          label="Data do agendamento"
          :max="maxDate"
          :min="minDate"
          @change="dateChanged"
         />
      </v-col>
    </v-row>
    
    <v-row
      :key="barber.id"
      v-for="barber in barbers"
    >
      <v-col cols="12" class="barber-info py-0">
        <div class="imagem">
          <img
            v-if="barber.image_url"
            :src="`${$url_backend}${barber.image_url}`"
            :lazy-src="`${$url_backend}${barber.image_url}`"
            aspect-ratio="1"
            class="grey lighten-2"
          />
        </div>
        <h1 class="nome">
          {{ barber.name }}
        </h1>
      </v-col>
      
      <v-col cols="12" class="py-0">
        <v-row v-if="barber.times.length > 0">
          <v-col cols="12" class="py-0">
          <p class="ma-0 mt-3"><strong>Horários disponíveis:</strong></p>
        </v-col>
          <v-col
            :key="index"
            v-for="(timeItem, index) in barber.times"
            cols="auto"
            @click="chooseTime(timeItem.time, barber.id)"
          >
            <div
              class="grey lighten-1 pa-2 text-center app-border-radius-small step-time-item"
              :class="{ active: timeItem.time === time }"
            >
              {{ formatResponseToTime(timeItem.time) }}
            </div>
          </v-col>
        </v-row>
        <p v-else class="text-center ma-0">
          Nenhum horário disponível
        </p>
      </v-col>
      <v-col cols="12" class="px-4">
        <v-divider class="mb-0"></v-divider>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Axios from '@/plugins/axios'
import DatePicker from '@/components/globais/form/date-picker/DatePicker'
import DateMixin from '@/mixins/DateMixin'
import TimeMixin from '@/mixins/TimeMixin'
import BarbershopMixin from '@/mixins/BarbershopMixin'

export default {
  name: 'RegisterScheduleStepTime',
  mixins: [ BarbershopMixin, DateMixin, TimeMixin ],
  components: { DatePicker },
  props: {
    barbershop_id: { required: true },
    choosedBarbers: { default: Array },
    duration: { default: '0:00' }
  },
  data: () => ({
    barbershopObj: null,
    time: null,
    barbers: [],
    loading: true,
    date: null
  }),
  computed: {
    maxDate () {
      let maxDate = new Date()
      maxDate.setDate(maxDate.getDate() + 6)
      return maxDate.toISOString().substr(0, 10)
    },
    minDate () {
      let minDate = new Date()
      minDate.setDate(minDate.getDate() - 1)
      return minDate.toISOString().substr(0, 10)
    }
  },
  methods: {
    chooseTime (time, barberId) {
      this.time = time
      let [ hours, minutes ] = this.time.split(':') 
      this.date.setHours(hours, minutes, 0)
      this.$emit('choosed', this.date, barberId)
    },
    dateChanged (newDate) {
      let hasDate = this.date
      let date = new Date(newDate)
      date.setDate(date.getDate() + 1)
      this.date = date
      if (hasDate) this.getTimesOnService(this.date)
    },
    getTimes () {
      this.date = new Date()
      this.getTimesOnService(this.date)
    },
    getTimesOnService (date) {
      date = this.formatDateToDateEn(date)
      this.barbers = []
      let url = `/barbershop/${this.barbershop_id}/time/available/${date}`
      window.console.log('choosedBarbers', this.choosedBarbers, this.choosedBarbers.length)
      if (this.choosedBarbers.length > 0) {
        window.console.log('entrou')
        let barbers = this.choosedBarbers.map(i => i.id)
        url += `?barbers=${barbers}`
      }
      Axios.get(url)
      .then(response => {
        if (response.data.codigo === 200) this.barbers = response.data.corpo  
        else this.barbers = []
      })
      .catch ((err) => {
        this.barbers = []
        window.console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';
.v-application .step-time {
  .step-time-item { cursor: pointer; 
    &:hover, &.active { background: #000 !important; color: #fff !important; }
  }
}
.barber-info { display: flex; align-items: center; }
.imagem { background: #ccc; width: 60px; height: 60px; border-radius: 50%; overflow: hidden; margin-right: 15px; }
.nome { color: #000; font-size: 1.2rem; margin: 0; }
</style>