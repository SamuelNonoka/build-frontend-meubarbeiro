const DateMixin = {
  methods: {
    formatDateToDatePtBr(date) {
      if (!date) return date
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()
      if (Number(day) < 10) day = `0${day}`
      if (Number(month) < 10) month = `0${month}`
      return `${day}/${month}/${year}`
    },
    formatDateToDateEn (date) {
      if (!date) return date
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      if (Number(day) < 10) day = `0${day}`
      if (Number(month) < 10) month = `0${month}`
      
      return `${year}-${month}-${day}`
    },
    formatDateTimeToStringPtBr(date) {
      if (!date) return date

      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()
      var hour = date.getHours();
      var minute = date.getMinutes();

      if (Number(day) < 10) day = `0${day}`
      if (Number(month) < 10) month = `0${month}`
      if (Number(hour) < 10) hour = `0${hour}`
      if (Number(minute) < 10) minute = `0${minute}`

      return `${day}/${month}/${year} ${hour}:${minute}`
    },
  }
}

export default DateMixin