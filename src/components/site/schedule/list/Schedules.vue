<template>
  <div class="site-schedule-list-schedules">
    <schedule-item
      :key="schedule.id"
      v-for="schedule in schedules"
      :schedule="schedule"
      class="mb-4"
      @scheduleChoosed="scheduleChoosed"
    />
  </div>
</template>

<script>
import ScheduleItem from './ScheduleItem'

export default {
  name: 'Schedules',
  components: { ScheduleItem },
  props: {
    schedules: { type: Array, default: Array }
  },
  methods: {
    scheduleChoosed (schedule) {
      this.$emit('scheduleChoosed', schedule)
    }
  }
}
</script>

<style lang="scss" scoped>
.site-schedule-list-schedules {
  height: calc(100vh - 144px);
  max-width: 320px;
  overflow: hidden;
  overflow-y: auto;
  padding-right: 15px; 
}

@media all and (max-width: 959px) {
  .site-schedule-list-schedules { 
    max-width: 260px;

    .site-schedule-list-item {
        min-width: 100%;
      padding: 15px 45px 15px 15px;
    }
  }
}

@media all and (max-width: 599px) {
  .site-schedule-list-schedules { 
    .site-schedule-list-item { padding-right: 90px; width: 100%; }
  }
}
</style>