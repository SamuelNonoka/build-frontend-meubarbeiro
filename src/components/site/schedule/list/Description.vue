<template>
  <card
    v-if="schedule"
    class="primaryDark schedule-description"
  >
    <v-row class="topo flex-row-reverse">
      <v-col class="text-right py-0 mb-2" cols="12" sm="auto">
        <v-chip 
          class="status"
          :class="getStatus()"
          small
        >
          <span v-show="exibirLabelFinalizado">Finalizado - </span>{{ getStatusText(schedule.schedule_status_id ) }}
        </v-chip>
      </v-col>
      <v-col class="py-0 pb-md-0">
        <strong class="codigo">
          Nº atendimento: {{ schedule.id }}
        </strong>
      </v-col>
    </v-row>
    
    <p>
      <span class="d-block">
        {{ formatDateTimeToStringPtBr(new Date(schedule.start_date)) }}
      </span>
      <span class="primaryLight px-2 py-1 d-inline-block">
        R$ {{ setMoneyMask(schedule.price.toFixed(2)) }}
      </span>
    </p>
    
    <div class="mt-4">
      <h2>
        Serviços:
      </h2>

      <ul>
        <li 
          :key="index"
          v-for="(service, index) in schedule.services"
        >
          {{ service.name }}
        </li>
       </ul>
    </div>

    <div class="mt-4">
      <h2>
        Barbeiro:
      </h2>
      <p>
        {{ schedule.barber.name }}
      </p>
      <p v-if="schedule.barber.phone">
        {{ schedule.barber.phone }}
      </p>
    </div>

    <div class="mt-4">
      <h2>
        {{ schedule.barbershop.name }}
      </h2>
      <p v-if="schedule.barbershop.phone_number" class="mb-0">
        {{ setPhoneMask(schedule.barbershop.phone_number) }}
      </p>
      <p class="ma-0">
        {{ description }}
      </p>
    </div>

    <div
      v-if="showBtn"
      class="text-center mt-8 mb-4"
    >
      <btn
        text="Cancelar agendamento"
        class="danger"
        :block="false"
        @clicked="cancel"
      />
    </div>
  </card>
</template>

<script>
import Axios from '@/plugins/axios'
import Btn from '@/components/globais/buttons/secondary/BtnSecondary'
import Card from '@/components/globais/Card'
import DateMixin from '@/mixins/DateMixin'
import ScheduleMixin from '@/mixins/ScheduleMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import TextMixin from '@/mixins/TextMixin'
import UserMixin from '@/mixins/UserMixin'

export default {
  name: 'Description',
  components: { Btn, Card },
  mixins: [ DateMixin, ScheduleMixin, SnackbarMixin, TextMixin, UserMixin ],
  props: {
    scheduleId: { default: null }
  },
  data: () => ({
    schedule: null
  }),
  watch: {
    scheduleId (id) {
      this.getScheduleById(id)
    }
  },
  computed: {
    showBtn () {
      if (this.schedule.status.id === this.$SCHEDULE_STATUS.AGUARDANDO)
        if ((new Date()).getTime() < (new Date(this.schedule.start_date)).getTime()) return true

      return false
    },
    description () {
      let address = this.schedule.barbershop.address
      let text = address.public_place
      if (address.number) text += `, ${address.number}`
      text += `, ${address.neighborhood}, ${address.city} - ${address.uf}`
      if (address.complement) text += `\n ${address.complement}`
      return text
    },
    exibirLabelFinalizado () {
      return (new Date()).getTime() > (new Date(this.schedule.start_date)).getTime()
    }
  },
  mounted () {
    this.getScheduleById(this.scheduleId)
  },
  methods: {
    cancel () {
      Axios.put(`schedule/${this.schedule.id}/user/cancel`,
        { user_id: this.getUser().id }
      ).then(response => {
        if (response.data.codigo === 200) this.onCancelSucess(response.data.corpo)
        else this.onCancelError(response.data.corpo)
      }).catch ((err) => {
        this.onCancelError('Não foi possível cancelar o agendamento!')
        window.console.log(err)
      })
    },
    getStatus () {
      if (Number(this.schedule.status.id) === Number(this.$SCHEDULE_STATUS.APROVADO)) return 'success'
      else if (Number(this.schedule.status.id) === Number(this.$SCHEDULE_STATUS.CANCELADO)) return 'danger'
      else if (Number(this.schedule.status.id) === Number(this.$SCHEDULE_STATUS.REPROVADO)) return 'danger'
      return ''
    },
    onGetScheduleByIdSuccess (response) {
      this.schedule = response
    },
    onGetScheduleByIdError (error) {
      this.showSnackbarErro(error)
    },
    onCancelError (error) {
      this.showSnackbarErro(error)
    },
    onCancelSucess (message) {
      this.schedule.status = {
        id: this.$SCHEDULE_STATUS.CANCELADO,
        name: this.schedule.status.name = 'Cancelado'
      }
      this.showSnackbar(message)
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/theme.scss';

.schedule-description {
  color: #fff !important;
  max-height: calc(100vh - 140px);
  overflow: hidden;
  overflow-y: auto;

  .status { color: #000 !important; }

  .codigo { color: $secondary; font-size: 26px; }

  h2 { color: $secondary; margin: 0; font-size: 18px; }

  ul { margin: 5px 0 0; }

  p { margin: 5px 0 0; white-space: pre; }
}
</style>