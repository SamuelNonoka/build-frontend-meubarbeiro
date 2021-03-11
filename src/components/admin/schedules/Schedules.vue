<template>
  <card
    title="Horários"
    icon="access_time"
    class="schedules"
  >
    <div class="schedules-box">
      <table>
        <thead>
          <tr>
            <th class="px-2">Aberto</th>
            <th class="px-2">
              <span class="d-none d-sm-inline">Dia/semana</span>
              <span class="d-inline d-sm-none">Dia</span>
            </th>
            <th class="px-2">Abertura</th>
            <th class="px-2">Fechamento</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :key="index"
            v-for="(item, index) in barbershopDays"
          >
            <td class="pa-2">
              <v-checkbox v-model="item.open"></v-checkbox>
            </td>
            <td class="pa-2">
              <span class="d-none d-sm-inline">{{ item.name }}</span>
              <span class="d-inline d-sm-none">{{ item.short_name }}</span>
            </td>
            <td class="pa-2">
              <select-field
                :id="item.schedule_day_id"
                class="time-select"
                :items="times"
                :value="item.open ? item.start : null"
                :disabled="!item.open"
                @onChange="onChangeStartDate"
              />
            </td>
            <td class="pa-2">
              <select-field
                :id="item.schedule_day_id"
                class="time-select"
                :items="times"
                :value="item.open ? item.end : null"
                :disabled="!item.open"
                @onChange="onChangeEndDate"
              />
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </card>
</template>

<script>
// Modules
import './Schedules.scss'
// Component
import Card from '@/components/globais/Card'
import SelectField from '@/components/globais/form/select-field/SelectField'
// Mixin
import TimeMixin from '@/mixins/TimeMixin' 

export default {
  name: 'Schedules',
  components: { Card, SelectField },
  mixins: [ TimeMixin ],
  props: {
    schedulesDays: {
      default: Array
    }
  },
  data: () => ({
    barbershopDays: []
  }),
  watch: {
    schedulesDays: function (days) {
      this.barbershopDays = [
        { schedule_day_id: 1, name: 'Segunda', short_name: 'Seg', open: false, start: null, end: null },
        { schedule_day_id: 2, name: 'Terça', short_name: 'Ter', open: false, start: null, end: null },
        { schedule_day_id: 3, name: 'Quarta', short_name: 'Qua', open: false, start: null, end: null },
        { schedule_day_id: 4, name: 'Quinta', short_name: 'Qui', open: false, start: null, end: null },
        { schedule_day_id: 5, name: 'Sexta', short_name: 'Sex', open: false, start: null, end: null },
        { schedule_day_id: 6, name: 'Sábado', short_name: 'Sab', open: false, start: null, end: null },
        { schedule_day_id: 7, name: 'Domingo', short_name: 'Dom', open: false, start: null, end: null}
      ]

      days.forEach(s => {
        let index = this.barbershopDays.findIndex(i => i.schedule_day_id == s.schedule_day_id)
        this.barbershopDays[index].open = true
        this.barbershopDays[index].start = this.formatResponseToTime(s.start)
        this.barbershopDays[index].end = this.formatResponseToTime(s.end)
      })
    }
  },
  mounted () {
    this.barbershopDays = [
      { schedule_day_id: 1, name: 'Segunda', short_name: 'Seg', open: false, start: null, end: null },
      { schedule_day_id: 2, name: 'Terça', short_name: 'Ter', open: false, start: null, end: null },
      { schedule_day_id: 3, name: 'Quarta', short_name: 'Qua', open: false, start: null, end: null },
      { schedule_day_id: 4, name: 'Quinta', short_name: 'Qui', open: false, start: null, end: null },
      { schedule_day_id: 5, name: 'Sexta', short_name: 'Sex', open: false, start: null, end: null },
      { schedule_day_id: 6, name: 'Sábado', short_name: 'Sab', open: false, start: null, end: null },
      { schedule_day_id: 7, name: 'Domingo', short_name: 'Dom', open: false, start: null, end: null}
    ]
  },
  methods: {
    onChangeStartDate (value, id) {
      this.barbershopDays[id - 1].start = value
    },
    onChangeEndDate (value, id) {
      let index = this.barbershopDays.findIndex(i => i.schedule_day_id == id);
      this.barbershopDays[index].end = value
    }
  }
}
</script>