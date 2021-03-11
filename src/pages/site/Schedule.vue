<template>
  <div class="schedules">
    <v-row v-if="schedules.length">
      <v-col cols="12" sm="auto" class="pr-0 pr-md-3">
        <schedules
          :schedules="schedulesModel" 
          @scheduleChoosed="scheduleChoosed"
        />
      </v-col>
      <v-col class="d-none d-sm-block pl-0 pl-md-3">
        <schedule-description 
          v-if="schedule"
          :scheduleId="schedule.id"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-center align-center lista-vazia" v-else>
      <p class="ma-0">Não existem agendamentos</p>
    </div>
  </div>
</template>

<script>
import Schedules from '@/components/site/schedule/list/Schedules'
import ScheduleDescription from '@/components/site/schedule/list/Description'

import NavigationMixin from '@/mixins/NavigationMixin'
import ScheduleMixin from '@/mixins/ScheduleMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import UserMixin from '@/mixins/UserMixin'

export default {
  name: 'Schedule',
  components: { Schedules, ScheduleDescription },
  mixins: [ NavigationMixin, ScheduleMixin, SnackbarMixin, UserMixin ],
  data: () => ({
    loading: true,
    schedules: [],
    schedule: null,
    defaultScheduleSelectedId: null
  }),
  computed: {
    schedulesModel () {
      let schedules = this.schedules
      return schedules.sort((a, b) => {
        let aDate = (new Date(a.start_date)).getTime()
        let bDate = (new Date(b.start_date)).getTime()

        if (aDate < bDate) return 1
        else if (aDate > bDate) return -1
        return 0
      })
    }
  },
  created () {
    this.defaultScheduleSelectedId = this.$route.params.defaultScheduleSelectedId || null
  },
  mounted () {
    this.getScheduleByUserId(this.getUser().id)
  },
  methods: {
    scheduleChoosed (schedule) {
      this.schedules.forEach(i => { i.actived = false })
      let index = this.schedules.findIndex(i => i.id === schedule.id)
      this.schedules[index].actived = true
      if (window.screen.width >= 600) this.schedule = schedule
      else this.goTo('site-schedule-detail', { id: schedule.id })
    },
    onGetScheduleByUserIdSuccess (response) {
      let schedules = response
      schedules.forEach((i, index) => {
        schedules[index].actived = false
      })
      this.schedules = schedules
      
      if (this.schedules.length > 0) {
        let schedule = null
        if (this.defaultScheduleSelectedId)
          schedule = this.schedules.find(i => Number(i.id) === Number(this.defaultScheduleSelectedId))
        else schedule = this.schedulesModel[0]

        this.scheduleChoosed(schedule)
      }
      this.loading = false
    },
    onGetScheduleByUserIdError (error) {
      this.schedules = []
      this.loading = false
      this.showSnackbarErro(error)
    },
  }
}
</script>

<style lang="scss" scoped>
.lista-vazia { height: calc(100vh - 110px); color: #fff; }
</style>