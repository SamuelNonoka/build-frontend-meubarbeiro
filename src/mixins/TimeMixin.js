const TimeMixin = {
  data: () => ({
    times: [
      { text: '00:00', value: '00:00' }, { text: '00:15', value: '00:15' },
      { text: '00:30', value: '00:30' }, { text: '00:45', value: '00:45' },
      { text: '01:00', value: '01:00' }, { text: '01:15', value: '01:15' },
      { text: '01:30', value: '01:30' }, { text: '01:45', value: '01:45' },
      { text: '02:00', value: '02:00' }, { text: '02:15', value: '02:15' },
      { text: '02:30', value: '02:30' }, { text: '02:45', value: '02:45' },
      { text: '03:00', value: '03:00' }, { text: '03:15', value: '03:15' },
      { text: '03:30', value: '03:30' }, { text: '03:45', value: '03:45' },
      { text: '04:00', value: '04:00' }, { text: '04:15', value: '04:15' },
      { text: '04:30', value: '04:30' }, { text: '04:45', value: '04:45' },
      { text: '05:00', value: '05:00' }, { text: '05:15', value: '05:15' },
      { text: '05:30', value: '05:30' }, { text: '05:45', value: '05:45' },
      { text: '06:00', value: '06:00' }, { text: '06:15', value: '06:15' },
      { text: '06:30', value: '06:30' }, { text: '06:45', value: '06:45' },
      { text: '07:00', value: '07:00' }, { text: '07:15', value: '07:15' },
      { text: '07:30', value: '07:30' }, { text: '07:45', value: '07:45' },
      { text: '08:00', value: '08:00' }, { text: '08:15', value: '08:15' },
      { text: '08:30', value: '08:30' }, { text: '08:45', value: '08:45' },
      { text: '09:00', value: '09:00' }, { text: '09:15', value: '09:15' },
      { text: '09:30', value: '09:30' }, { text: '09:45', value: '09:45' },
      { text: '10:00', value: '10:00' }, { text: '10:15', value: '10:15' },
      { text: '10:30', value: '10:30' }, { text: '10:45', value: '10:45' },
      { text: '11:00', value: '11:00' }, { text: '11:15', value: '11:15' },
      { text: '11:30', value: '11:30' }, { text: '11:45', value: '11:45' },
      { text: '12:00', value: '12:00' }, { text: '12:15', value: '12:15' },
      { text: '12:30', value: '12:30' }, { text: '12:45', value: '12:45' },
      { text: '13:00', value: '13:00' }, { text: '13:15', value: '13:15' },
      { text: '13:30', value: '13:30' }, { text: '13:45', value: '13:45' },
      { text: '14:00', value: '14:00' }, { text: '14:15', value: '14:15' },
      { text: '14:30', value: '14:30' }, { text: '14:45', value: '14:45' },
      { text: '15:00', value: '15:00' }, { text: '15:15', value: '15:15' },
      { text: '15:30', value: '15:30' }, { text: '15:45', value: '15:45' },
      { text: '16:00', value: '16:00' }, { text: '16:15', value: '16:15' },
      { text: '16:30', value: '16:30' }, { text: '16:45', value: '16:45' },
      { text: '17:00', value: '17:00' }, { text: '17:15', value: '17:15' },
      { text: '17:30', value: '17:30' }, { text: '17:45', value: '17:45' },
      { text: '18:00', value: '18:00' }, { text: '18:15', value: '18:15' },
      { text: '18:30', value: '18:30' }, { text: '18:45', value: '18:45' },
      { text: '19:00', value: '19:00' }, { text: '19:15', value: '19:15' },
      { text: '19:30', value: '19:30' }, { text: '19:45', value: '19:45' },
      { text: '20:00', value: '20:00' }, { text: '20:15', value: '20:15' },
      { text: '20:30', value: '20:30' }, { text: '20:45', value: '20:45' },
      { text: '21:00', value: '21:00' }, { text: '21:15', value: '21:15' },
      { text: '21:30', value: '21:30' }, { text: '21:45', value: '21:45' },
      { text: '22:00', value: '22:00' }, { text: '22:15', value: '22:15' },
      { text: '22:30', value: '22:30' }, { text: '22:45', value: '22:45' },
      { text: '23:00', value: '23:00' }, { text: '23:15', value: '23:15' },
      { text: '23:30', value: '23:30' }, { text: '23:45', value: '23:45' }
    ]
  }),
  methods: {
    formatResponseToTime (time) {
      if (!time) return time
      time = time.split(':')
      time.pop()
      return time.join(':')
    }
  }
}

export default TimeMixin