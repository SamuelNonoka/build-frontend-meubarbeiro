<template>
  <div class="approval">
    <div
      v-if="schedules.length === 0"
      class="d-flex align-center justify-center"
      style="height: calc(100vh - 100px)"
    >
      <v-alert
        class="py-4 px-8"
        type="info"
        color="primary"
      >
        Não há agendamentos para serem aprovados  
      </v-alert>
    </div>

    <v-row v-else class="pending">
      <v-col
        :key="index"
        v-for="(schedule, index) in schedules"
        class="text-center"
        cols="6" sm="4" md="3" lg="auto"
      >
        <div
          class="list-item primaryLight py-4 px-6"
          :class="{ ativo: schedule.ativo }"
          @click="chooseSchedule(schedule)"
        >
          <strong class="d-block">
            {{ formatDateTimeToStringPtBr( new Date(schedule.start_date)) }}
          </strong>
          <span class="d-block">
            {{ schedule.user.name }}
          </span>
        </div>
      </v-col>
    </v-row>
    <schedule-dialog
      ref="scheduleDialog"
      @onApproved="onApproved"
      @onRepproved="onRepproved"
    />
  </div>
</template>

<script>
import Axios from "@/plugins/axios"
import BarberMixin from '@/mixins/BarberMixin'
import DateMixin from '@/mixins/DateMixin'
import ScheduleDialog from '@/components/admin/schedules/schedule-group/ScheduleDialog'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import TextMixin from '@/mixins/TextMixin'
export default {
  name: 'Approval',
  components: { ScheduleDialog },
  mixins: [ BarberMixin, DateMixin, SnackbarMixin, TextMixin ],
  data: () => ({
    schedules: []
  }),
  mounted () {
    this.getSchedules()
  },
  methods: {
    chooseSchedule (schedule) {
      this.$refs.scheduleDialog.show(schedule)
    },
    getSchedules () {
      Axios.get(`/schedule/barbershop/${this.barber.barbershop_id}/pending`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.schedules = response.data.corpo
        }
        else this.setError(response.data.corpo)
      })
      .catch ((err) => { 
        window.console.log(err) 
        this.setError(err)
      })
    },
    setError (err) {
      this.showSnackbarErro(err)
    },
    onApproved (schedule) {
      let index = this.schedules.findIndex(i => i.id === schedule.id)
      this.schedules.splice(index, 1)
    },
    onRepproved (schedule) {
      let index = this.schedules.findIndex(i => i.id === schedule.id)
      this.schedules.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/theme.scss';
.list-item { border-radius: 5px; color: #fff; cursor: pointer; }
.list-item:hover { background: $primaryDark !important; }
@media all and (max-width: 959px) {
  .pending { margin-top: 15px; }
}
</style>