<template>
  <div class="dashboard-painel elevation-1">
    <h1 class="dashboard-painel-titulo">
      Dashboard
    </h1>
    <div class="painels">
      <div class="pa-2 pa-md-4">
        <dashboard-painel-item
          :title="schedulesOfDay"
          text="Agendamentos do Dia"
          color="sucess"
        />
      </div>

      <div class="pa-2 pa-md-4">
        <dashboard-painel-item
          :title="schedulesWaiting"
          text="Aguardando confirmação"
          color="alert"
        />
      </div>

      <div class="pa-2 pa-md-4">
        <dashboard-painel-item
          :title="schedulesDone"
          text="Total de Atendimentos"
          color="sucess"
        />
      </div>

      <div class="pa-2 pa-md-4">
        <dashboard-painel-item 
          :title="barbers"
          text="Barbeiros"
          color="primary"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Axios from '@/plugins/axios'
import BarbershopMixin from '@/mixins/BarbershopMixin'
import DashboardPainelItem from './DashboardPainelItem'
export default {
  name: 'DashboardPainel',
  components: { DashboardPainelItem },
  mixins: [ BarbershopMixin ],
  data: () => ({
    schedulesOfDay: 0,
    schedulesWaiting: 0,
    schedulesDone: 0,
    barbers: 0
  }),
  watch: {
    barbershop (value) {
      if (value) {
        this.getSchedulesDone()
        this.getSchedulesWaiting()
        this.getSchedulesOfDay()
        this.getBarbers()
      }
    }
  },
  mounted () {
    if (this.barbershop.id) {
      this.getSchedulesDone()
      this.getSchedulesWaiting()
      this.getSchedulesOfDay()
      this.getBarbers()
    }
  },
  methods: {
    getSchedulesDone () {
      Axios.get(`/barbershop/${this.barbershop.id}/total-schedules-done`)
      .then(response => {
        if (response.data.codigo === 200) this.schedulesDone = response.data.corpo
        else window.console.log(response.data.corpo)
      })
      .catch ((err) => window.console.log(err))
    },
    getSchedulesWaiting () {
      Axios.get(`/barbershop/${this.barbershop.id}/total-schedules-waiting`)
      .then(response => {
        if (response.data.codigo === 200) this.schedulesWaiting = response.data.corpo
        else window.console.log(response.data.corpo)
      })
      .catch ((err) => window.console.log(err))
    },
    getSchedulesOfDay () {
      Axios.get(`/barbershop/${this.barbershop.id}/total-schedules-of-day`)
      .then(response => {
        if (response.data.codigo === 200) this.schedulesOfDay = response.data.corpo
        else window.console.log(response.data.corpo)
      })
      .catch ((err) => window.console.log(err))
    },
    getBarbers () {
      Axios.get(`/barbershop/${this.barbershop.id}/total-barbers`)
      .then(response => {
        if (response.data.codigo === 200) this.barbers = response.data.corpo
        else window.console.log(response.data.corpo)
      })
      .catch ((err) => window.console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-painel { background: #fff; padding: 15px 15px 30px; }
.dashboard-painel-titulo { font-size: 1.2rem; font-weight: 600; margin: 0; }
.painels { margin-top: 15px; display: flex; }
.painels > div { width: 25%; }
@media all and (max-width: 599px) {
  .painels { flex-wrap: wrap; }
  .painels > div { width: 50%; }
}
</style>