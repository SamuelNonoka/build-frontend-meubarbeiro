import Axios from '@/plugins/axios'

const ScheduleMixin = {
  methods: {
    getStatusText (scheduleId) {
      if (Number(scheduleId) === Number(this.$SCHEDULE_STATUS.APROVADO)) return 'Agendado'
      else if (Number(scheduleId) === Number(this.$SCHEDULE_STATUS.CANCELADO)) return 'Cancelado'
      else if (Number(scheduleId) === Number(this.$SCHEDULE_STATUS.REPROVADO)) return 'Cancelado pelo barbeiro'
      else return 'Aguardando aprovação do barbeiro'
    },
    getScheduleById (id) {
      Axios.get(`/schedule/${id}`)
      .then(response => {
        if (response.data.codigo === 200) this.onGetScheduleByIdSuccess(response.data.corpo)
        else this.onGetScheduleByIdError(response.data.corpo)
      }).catch ((err) => {
        this.onGetScheduleByIdError('Não foi possível recuperar o agendamento!')
        window.console.log(err)
      })
    },
    onGetScheduleByIdSuccess (response) {
      window.console.log(`onGetScheduleByIdSuccess: ${response}`)
    },
    onGetScheduleByIdError (error) {
      window.console.log(`onGetScheduleByIdError: ${error}`)
    },
    getScheduleByUserId (userId) {
      Axios.get(`/schedule/user/${userId}`)
      .then(response => {
        if (response.data.codigo === 200) this.onGetScheduleByUserIdSuccess(response.data.corpo)
        else this.onGetScheduleByUserIdError(response.data.corpo)
      }).catch ((err) => {
        this.onGetScheduleByUserIdError('Não foi possível recuperar os agendamentos!')
        window.console.log(err)
      })
    },
    onGetScheduleByUserIdSuccess (response) {
      window.console.log(`onGetScheduleByUserIdSuccess: ${response}`)
    },
    onGetScheduleByUserIdError (error) {
      window.console.log(`onGetScheduleByUserIdError: ${error}`)
    },
    storeSchedule (schedule) {
      Axios.post(`/schedule`, schedule)
      .then(response => {
        if (response.data.codigo === 200) this.onStoreScheduleSuccess(response.data.corpo)
        else this.onStoreScheduleError(response.data.corpo)
      }).catch ((err) => {
        this.onStoreScheduleError('Não foi possível fazer o agendamento!')
        window.console.log(err)
      })
    },
    onStoreScheduleSuccess (response) {
      window.console.log(`onStoreScheduleSuccess: ${response}`)
    },
    onStoreScheduleError (error) {
      window.console.log(`onStoreScheduleError: ${error}`)
    },
  }
}

export default ScheduleMixin