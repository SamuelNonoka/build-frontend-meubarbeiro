<template>
  <auth-template
    :title="null" 
    :isBarber="isBarber"
  >
    <h1 v-if="error">
      {{ error }}
    </h1>

    <alert v-if="success" icon="done">
      {{ success }}
    </alert>
    
    <btn-secondary
      v-if="success"
      class="confirm-register-btn mt-8 accent font-weight-bold"
      text="Fazer Login"
      :block="false"
      @clicked="goToLogin"
    />
  </auth-template>
</template>

<script>
import AuthTemplate from './AuthTemplate'
import BtnSecondary from './BtnSecondary'
import Alert from '@/components/globais/Alert'

import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'ConfirmRegister',
  components: { Alert, AuthTemplate, BtnSecondary },
  mixins: [ NavigationMixin ],
  props: {
    success: { default: null },
    error: { default: null },
    isBarber: { default: false }
  },
  methods: {
    goToLogin () {
      if (this.isBarber) this.goTo('login-barber')
      else this.goTo('login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.confirm-register { position: relative;
  .confirm-register-box {
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: fit-content;
    width: fit-content;
    h1 { color: #fff !important; margin: 0; font-size: 22px; }
    .confirm-register-btn { color: $primaryDark; }
  }
}
</style>