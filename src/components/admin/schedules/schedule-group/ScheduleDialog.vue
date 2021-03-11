<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <div class="schedule-dialog pa-4" v-if="schedule">
      <div class="d-flex">
        <h1 class="titulo text-center">
          Detalhes do Agendamento
        </h1>
        <v-spacer></v-spacer>
        <v-btn
          text
          @click="dialog = false"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </div>
      <div class="schedule">
        <v-row class="mt-2 flex-row flex-sm-row-reverse">
          <v-col class="text-right" cols="12" sm="auto">
            <v-chip 
              class="status"
              :class="getStatus()"
              small
            >
              {{ getStatusText(schedule.schedule_status_id ) }}
            </v-chip>
          </v-col>
          <v-col>
            <div>
              Cód: <strong>{{ schedule.id }}</strong>
            </div>
          </v-col>
        </v-row>
        
        <section class="mt-2" v-if="schedule.user">
          <h2 class="subtitulo">
            Cliente:
          </h2>
          <strong class="nome-cliente d-block">{{ schedule.user.name }}</strong>
          <span class="telefone d-block">
            {{ this.setPhoneMask(schedule.user.phone_number) }}
          </span>
        </section>
        <section class="mt-4">
          <h2 class="subtitulo">Servicos:</h2>
          <ul class="ma-0">
            <li
              :key="service.id"
              v-for="service in schedule.services"
            >
              {{ service.name }}
            </li>
          </ul>
        </section>
        <section class="mt-6">
          <strong class="valor">
            R$ {{ this.setMoneyMask(schedule.price.toFixed(2)) }}
          </strong>
        </section>
      </div>
      <div
        v-if="showButtons"
        class="text-center mt-8"
      >
        <v-btn
          class="mx-4 py-2 px-6 primary"
          height="auto"
          @click="approve"
        >
          <v-icon class="mr-2">check</v-icon> Aprovar
        </v-btn>
        <v-btn
          class="mx-4 py-2 px-6 danger"
          height="auto"
          @click="repprove"
        >
          <v-icon class="mr-2">unpublished</v-icon> Reprovar
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import Axios from "@/plugins/axios"
import TextMixin from '@/mixins/TextMixin'
import ScheduleMixin from '@/mixins/ScheduleMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'

export default {
  name: 'ScheduleDialog',
  mixins: [ ScheduleMixin, SnackbarMixin, TextMixin ],
  data: () => ({
    dialog: false,
    schedule: false
  }),
  computed: {
    showButtons () {
      return this.schedule.schedule_status_id === this.$SCHEDULE_STATUS.AGUARDANDO
    }
  },
  methods: {
    approve () {
      Axios.put(`/schedule/${this.schedule.id}/approve`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.showSnackbar(response.data.corpo)
          this.$emit('onApproved', this.schedule)
          this.dialog = false
        }
        else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível aprovar o agendamento!')
      })
    },
    getStatus () {
      if (Number(this.schedule.schedule_status_id) === Number(this.$SCHEDULE_STATUS.APROVADO)) return 'success'
      else if (Number(this.schedule.schedule_status_id) === Number(this.$SCHEDULE_STATUS.CANCELADO)) return 'danger'
      else if (Number(this.schedule.schedule_status_id) === Number(this.$SCHEDULE_STATUS.REPROVADO)) return 'danger'
      return ''
    },
    repprove () {
      Axios.put(`/schedule/${this.schedule.id}/repprove`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.showSnackbar(response.data.corpo)
          this.$emit('onApproved', this.schedule)
          this.dialog = false
        }
        else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível reprovar o agendamento!')
      })
    },
    setError (msg) {
      this.showSnackbarErro(msg)
      this.dialog = false
    },
    show (schedule) {
      this.dialog = true
      this.schedule = schedule
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/theme.scss';
.schedule-dialog { background: #fff; }
.titulo { font-size: 1.5rem; font-weight: 600; margin: 0; }
.subtitulo {
  font-size: 1rem;
  color: $primaryLight;
  font-weight: 500;
  margin: 0 0 5px;
  display: inline-block;
  border-bottom: 2px solid #ccc; 
}
.valor { font-size: 1.5rem; }
</style>