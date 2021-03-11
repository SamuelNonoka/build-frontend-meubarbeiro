<template>
  <v-stepper-content :step="step" class="step-content">
    <v-row class="mb-4">
      <v-col cols="12">
        <div class="step-content-box">
          <slot></slot>
        </div>  
      </v-col>
    </v-row>

    <btn-secondary
      :block="false"
      :text="btnConfirmText" 
      @clicked="confirm"
      :disabled="disabled"
    />

    <v-btn
      text
      @click="cancel"
    >
      Cancel
    </v-btn>
  </v-stepper-content>
</template>

<script>
import BtnSecondary from '@/components/globais/buttons/secondary/BtnSecondary'

export default {
  name: 'RegisterScheduleStepContent',
  components: { BtnSecondary },
  props: {
    btnConfirmText: { default: 'Continuar' },
    step: { required: true },
    disabled: { default: true },
    confirmSchedule: { default: false }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.step-content { padding: 12px !important;
  .step-content-box,
  .step-cart { max-height: 300px; overflow: hidden; overflow-y: auto; }
  .step-cart { width: 100%; color: #fff;
    p { font-weight: 500; color: $primaryDark;
      &:last-child { font-size: 20px; }
    }
  }
}

@media all and (max-width: 959px) {
  .step-content { padding: 15px !important; }
}
</style>