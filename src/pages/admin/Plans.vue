<template>
  <div>
    <div class="plans" v-if="barber">
      <v-row>
        <v-col class="mt-0">
          <h1 class="text-center plans-title">
            Escolha o plano ideal para a sua <span>Barbearia</span>.
          </h1>    
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col cols="12">
          <div 
            :key="indice"
            v-for="(item, indice) in items"
            class="plan-item"
          >
            <header class="text-center">
              <h2 class="font-weight-regular">
                {{ item.name }}
              </h2>
              <span class="plan-item-price font-weight-bold">
                {{ item.value }} <small class="font-weight-light">/mês</small>
              </span>
              <span class="plan-description font-weight-light">
                {{ item.description }}
              </span>
            </header>

            <content>
              <table>
                <tr
                  :key="indice"
                  v-for="(item, indice) in item.list"
                  class="plan-list-item"
                >
                  <td class="text-right">
                    <span
                      v-if="!isBoolean(item.value)" 
                      class="plan-list-value font-weight-bold">
                      {{ item.value }}
                    </span>

                    <v-icon 
                      v-else
                      class="plan-list-value font-weight-bold"
                    >
                      check
                    </v-icon>
                  </td>

                  <td class="text-left pl-2">
                    <span class="plan-list-key">
                      {{ item.key }}
                    </span>
                  </td>
                </tr>
              </table>

              <btn-confirm
                v-if="showBtn(item.id)"
                :disabled="item.id != 1"
                text="Escolher Plano"
                class="mt-8" 
                @clicked="choosed(item.id)"
              />
              <btn-confirm
                v-else
                :disabled="item.id != 1"
                text="Cancelar Plano"
                class="mt-8 danger" 
                @clicked="choosed(null)"
              />
            </content>
          </div>
        </v-col>
      </v-row>
    </div>
    <confirm-dialog
      ref="dialog"
      :title="confirmDialogTitle"
      :danger="danger"
      @confirm="confirm"
    />
    <overlay ref="overlay" />
  </div>
</template>

<script>
import Axios from "@/plugins/axios"
import BtnConfirm from '@/components/globais/buttons/confirm/BtnConfirm'
import ConfirmDialog from '@/components/globais/dialogs/confirm/Confirm'
import Overlay from '@/components/globais/overlay/Overlay'
import BarberMixin from '@/mixins/BarberMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import OverlayMixin from '@/mixins/OverlayMixin'

export default {
  name: 'Plans',
  components: { BtnConfirm, ConfirmDialog, Overlay },
  mixins: [ BarberMixin, OverlayMixin, SnackbarMixin ],
  data: () => ({
    items: [
      { id: 1, name: 'Basic', value: 'R$ 10,00', description: 'Ideal para quem trabalha sozinho', list: [
        { key: 'Usuários', value: 1 }, { key: 'Agendamentos', value: true },
      ]}/*,
      { id: 2, name: 'Pró', value: 'R$ 10,00', description: 'Ideal para pequenas barbearias', list: [
        { key: 'Usuários', value: 5 }, { key: 'Agendamentos', value: true },
      ]},
      { id: 3, name: 'Premium', value: 'R$ 20,00', description: 'Ideal para grandes barbearias', list: [
        { key: 'Usuários', value: 15 }, { key: 'Agendamentos', value: true },
      ]}*/
    ],
    confirmDialogTitle: '',
    choosedPlanId: null,
    barber: null,
    danger: false
  }),
  mounted () {
    this.setBarber()
  },
  methods: {
    cancelPlan () {
      this.showOverlay('Processando...')

      Axios.delete(`/barber/plan/${this.barber.id}`)
      .then(response => {
        if (response.data.codigo === 200) {
          let token = response.data.corpo.token
          this.storeBarber(token)
          this.setBarber()
          let text = 'Seu plano foi cancelado com sucesso!'
          this.hideOverlaySuccess(text)
          this.showSnackbar(text)
        } else this.setError(response.data.corpo)
      })
      .catch (() => this.setError('Não foi possível cancelar o seu plano!'))
    },
    choosed (id) {
      this.choosedPlanId = id

      if (this.choosedPlanId) {
        this.confirmDialogTitle = "Confirma a adesão deste plano?"
        this.danger = false
      } 
      else {
        this.confirmDialogTitle = "Confirma o cancelamento deste plano?"
        this.danger = true
      }
      this.$refs.dialog.showDialog()
    },
    confirm () {
      if (this.choosedPlanId) this.setPlan(this.choosedPlanId)
      else this.cancelPlan()
    },
    isBoolean (val) {
      return 'boolean' === typeof val
    },
    setBarber () {
      this.barber = this.getBarber()
    },
    setError (text) {
      this.showSnackbarErro(text)
      this.hideOverlayError(text)
    },
    setPlan (id) {
      this.showOverlay('Processando...')

      Axios.put(`/barber/plan/${this.barber.id}`, {
        plan_id: id
      })
      .then(response => {
        if (response.data.codigo === 200) {
          let token = response.data.corpo.token
          this.storeBarber(token)
          this.setBarber()
          let text = 'Seu plano foi alterado com sucesso!'
          this.hideOverlaySuccess(text)
          this.showSnackbar(text)
        } else this.setError(response.data.corpo)
      })
      .catch (() => this.setError('Não foi possível alterar o seu plano!'))
    },
    showBtn(id) {
      if (!this.barber.plan_id) return true
      return this.barber.plan_id != id ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.plans {
  .plans-title { font-size: 26px; color: $primary;
    span { color: $primaryDark; font-weight: 600; position: relative; font-size: 30px;
      &:after {
        content: '';
        height: 2px;
        background: $secondary;
        width: calc(100% - 30px);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }
  .plan-item {
    @include border-radius-mixin (5px);
    width: 300px;
    max-width: 100%;
    display: inline-block;
    margin: 0 10px 30px;
    overflow: hidden;
    &:hover { @include box-shadown-mixin (1); }
    header { background-color: $primaryDark; padding: 30px 15px; color: #fff;
      h2 { font-size: 24px; color: #fff; }
      .plan-item-price { font-size: 32px; color: $secondary;
        small { font-size: 12px; }
      }
      .plan-description { display: block; font-size: 14px; margin-top: 26px; }
    }

    content {
      color: #fff;
      padding: 30px 15px;
      display: block;
      background-color: lighten($color: $primaryLight, $amount: 40);
      table { margin: auto;
        .plan-list-item { margin-top: 15px;
          &:first-child td { padding: 0; }
          td { padding: 10px 0; }
          .plan-list-value { color: $primaryDark; font-size: 22px; }
          .plan-list-key { font-size: 16px; color: $primaryDark; }
        }
      }
    }
  }
}

@media all and (max-width: 600px) {
  .plans .plan-item { margin: 0 auto 30px; }
}
</style>