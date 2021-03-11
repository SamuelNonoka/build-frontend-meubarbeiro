<template>
  <v-card
    class="site-schedule-list-item elevation-1 d-flex flex-column"
    :class="{ actived: schedule.actived, finished: isFineshed(schedule.start_date) }"
    dark
    @click="choosed"
  >
    <div>
      <strong class="site-schedule-list-item-number">
        {{ schedule.id }}
      </strong>
      <span class="site-schedule-list-item-date">
        {{ formatDate(schedule.start_date) }}
      </span>
    </div>
    <small
      :class="'site-schedule-list-item-status-' + schedule.schedule_status_id"
      class="site-schedule-list-item-status d-inline-block mt-2"
    >
      {{ getStatusText(schedule.schedule_status_id ) }}
    </small>
  </v-card>
</template>

<script>
import DateMixin from '@/mixins/DateMixin'
import ScheduleMixin from '@/mixins/ScheduleMixin'

export default {
  name: 'ScheduleItem',
  mixins: [ DateMixin, ScheduleMixin ],
  props: {
    schedule: { type: Object, required: true }
  },
  methods: {
    choosed () {
      this.$emit('scheduleChoosed', this.schedule)
    },
    formatDate (startDate) {
      if (!startDate) return ''
      let date = new Date(startDate)
      return this.formatDateTimeToStringPtBr(date)
    },
    isFineshed (startDate) {
      let today = (new Date()).getTime()
      let scheduleDate = (new Date(startDate)).getTime()
      return scheduleDate < today 
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.site-schedule-list-item {
  background-color: $primaryDark !important;
  width: fit-content;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  padding: 15px 90px 15px 30px;
  cursor: pointer;
  user-select: none;

  &.finished { opacity: .4; }

  &:hover,
  &.actived {
    background-color: $secondary !important;

    &:after { background-color: $secondary !important; color: $primaryDark !important; }
  
    .site-schedule-list-item-date,
    .site-schedule-list-item-starts {
      color: $primaryDark !important;
      font-weight: 500;
    }

    .site-schedule-list-item-status.site-schedule-list-item-status-3 { color: $primaryDark !important; }

    .site-schedule-list-item-number { color: $primaryDark !important; }
  }

  &:before {
    content: '';
    border: solid $primaryDark;
    border-width: 0px 2px 2px 0;
    display: inline-block;
    padding: 5px;
    position: absolute;
    z-index: 1;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    right: 15px;
    left: unset;
    top: 0;
    bottom: 0;
    width: fit-content;
    height: fit-content;
    margin: auto;
    opacity: 1;
    background-color: transparent;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: #484848;
    height: 100%;
    width: 35px;
    right: 0;
    top: 0;
  }
  
  .site-schedule-list-item-number { color: $secondaryDark; min-width: 30px; display: inline-block; }

  .site-schedule-list-item-status {
    color: $primaryLight;
    font-weight: 500;

    &.site-schedule-list-item-status-1 {
      color: $success !important;

      &:before { background-color: $success; }
    }

    &.site-schedule-list-item-status-2,
    &.site-schedule-list-item-status-4 {
      color: $danger !important;

      &:before { background-color: $danger; }
    }
    
    &:before {
      content: '';
      width: 10px;
      height: 10px;
      background-color: $primaryLight;
      display: inline-block;
      margin-right: 5px;
      border-radius: 50%;
    }
  }
}
</style>