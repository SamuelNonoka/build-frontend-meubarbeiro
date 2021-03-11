<template>
  <v-menu
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="200px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="dateModel"
        :label="label"
        locale="pt"
        prepend-inner-icon="event"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      :min="min"
      :max="max"
      @input="menu2 = false"
      color="primary"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import DateMixin from '@/mixins/DateMixin'
export default {
  name: 'DatePicker',
  mixins: [ DateMixin ],
  props: {
    label: {
      default: 'Data:'
    },
    min: {
      default: null
    },
    max: {
      default: null
    },
    value: {
      default: null 
    },
    outlined: { default: null }
  },
  data: () => ({
    date: null,
    menu2: false
  }),
  mounted () {
    if (this.value) this.date = this.value
    else {
      let date = new Date()
      this.date = this.formatDateToDateEn(date)
    }
  },
  computed: {
    dateModel () {
      let date = new Date(this.date)
      date.setDate(date.getDate() + 1)
      return this.formatDateToDatePtBr(date)
    }
  },
  watch: {
    date (date) {
      this.$emit('change', date)
    }
  }
}
</script>