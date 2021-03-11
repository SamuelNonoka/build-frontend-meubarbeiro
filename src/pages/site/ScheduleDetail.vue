<template>
  <div class="schedule-detail">
    <schedule-description
      v-if="id"
      :scheduleId="id"
      class="mt-4"
    />
  </div>
</template>

<script>
import ScheduleDescription from '@/components/site/schedule/list/Description'

export default {
  name: 'ScheduleDetail',
  components: { ScheduleDescription },
  data: () => ({
    id: null
  }),
  mounted () {
    this.id = this.$route.params.id
  }
}
</script>