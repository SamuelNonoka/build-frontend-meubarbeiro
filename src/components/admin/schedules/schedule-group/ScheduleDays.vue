<template>
  <div class="schedules-days align-center d-flex">
    <table>
      <thead>
        <tr>
          <th
            :key="index"
            v-for="(item, index) in timesModel"
            class="primary py-2 pa-4"
          >
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          :key="barber.id"
          v-for="barber in schedules"
        >
          <td
            :key="index"
            v-for="(time, index) in timesModel"
            @click="showSchedule(barber, time.text)"
            class="schedules-days-item"
          >
            <div
              class="d-block schedule-box"
              :class="getClass(barber, time.text)"
            ></div>
          </td>
        </tr>
      </tbody>
    </table> 
    <schedule-dialog
      ref="scheduleDialog"
      @onApproved="onApproved"
      @onRepproved="onRepproved"
    />
  </div>
</template>

<script>
import ScheduleDialog from './ScheduleDialog'
import BarbershopMixin from '@/mixins/BarbershopMixin'
import TimeMixin from '@/mixins/TimeMixin'

export default {
  name: 'ScheduleDays',
  mixins: [ BarbershopMixin, TimeMixin ],
  components: { ScheduleDialog },
  props: {
    date: { required: true },
    schedules: { default: [] }
  },
  computed: {
    timesModel () {
      let dateNow = new Date(this.date)
      let hour = dateNow.getHours()
      return this.times.filter(time => {
        let h = Number(time.text.split(':')[0])
        return h > hour
      })
    }
  },
  methods: {
    getClass (barber, time) {
      let schedule = this.findSchedule(barber, time)
      if (schedule) {
        if (schedule.schedule_status_id === 1) return 'success'
        else if (schedule.schedule_status_id === 2 || schedule.schedule_status_id === 4) return 'danger'
        else if (schedule.schedule_status_id === 3) return 'warning'
      } else return ''
    },
    findSchedule (barber, time) {
      let schedule = barber.schedules.find(i => {
        let startDate = i.start_date
        startDate = startDate.split(' ')[1]
        startDate = startDate.split(':')
        startDate = startDate[0] + ':' + startDate[1]

        let endDate = null
        let now = new Date()
        now.setHours('23', '59', '59')
        
        if (new Date(i.end_date) > now) {
          endDate = '23:45'
        } else {
          endDate = i.end_date
          endDate = endDate.split(' ')[1]
          endDate = endDate.split(':')
          endDate = endDate[0] + ':' + endDate[1]
        }

        return time >= startDate && time <=endDate
      })

      return schedule
    },
    onApproved (schedule) {
      let barber = this.schedules.find(barber => barber.id === schedule.barber_id)
      let index = barber.schedules.findIndex(i => Number(i.id) === Number(schedule.id))
      barber.schedules[index].schedule_status_id = this.$SCHEDULE_STATUS.APROVADO
      let barberIndex = this.schedules.find(barber => barber.id === schedule.barber_id)
      this.schedules[barberIndex] = barber
    },
    onRepproved (schedule) {
      let barber = this.schedules.find(barber => barber.id === schedule.barber_id)
      let index = barber.schedules.findIndex(i => Number(i.id) === Number(schedule.id))
      barber.schedules[index].schedule_status_id = this.$SCHEDULE_STATUS.REPROVADO
      let barberIndex = this.schedules.find(barber => barber.id === schedule.barber_id)
      this.schedules[barberIndex] = barber
    },
    showSchedule (barber, time) {
      let schedule = this.findSchedule(barber, time)
      if (schedule) this.$refs.scheduleDialog.show(schedule)
    }
  }
}
</script>

<style lang="scss" scoped>
.schedules-days { width: 100%; height: 100%; overflow: hidden; overflow-x: auto;
  table { border-spacing: 0; border-collapse: collapse; border: 1px solid;
    thead { color: #fff; }
    tbody tr td { height: 70px; border: 1px solid; }
  }
}
.schedule-box { width: 100%; height: 100%; cursor: pointer; }
</style>