<template>
  <v-row>
    <v-col cols="12">
      <div class="grey lighten-1 pa-4 step-cart app-border-radius-small">
        <p v-if="services.length > 0">
          Serviço(s):

          <ul>
            <li :key="service.id" v-for="service in services">
              {{ service.name }}
            </li>
          </ul>
        </p>
        <p v-if="barber">
          Barbeiro: <br> {{ barber.name }}
        </p>
        <p v-if="dateTime">
          Horário: <br> {{ formatDateTimeToStringPtBr(dateTime) }}
        </p>
        <p class="mb-0">
          <strong>Total: R$ {{ setMoneyMask(price) }}</strong>
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import DateMixin from '@/mixins/DateMixin'
import TextMixin from '@/mixins/TextMixin'

export default {
  name: 'RegisterScheduleStepCart',
  mixins: [ DateMixin, TextMixin ],
  props: {
    services: { default: Array },
    barber: { default: null },
    dateTime: { default: null }
  },
  computed: {
    price () {
      let val = this.services.reduce((total, i) => {
        return Number(total) + Number(i.price)
      }, 0)

      return val.toFixed(2)
    }
  }
}
</script>
