<template>
  <div class="auth-template">
    <div v-if="alert">
      <alert>
        <span v-html="alert"></span>
      </alert>

      <btn-secondary
        class="btn-voltar mt-8"
        @clicked="goTo('home')"
        text='Voltar para o site'
      />
    </div>

    <div v-else class="text-center">
      <h1 class="titulo">
        {{ title }}
      </h1>
      <img src="/logo.png" class="logo my-8" />
      <slot></slot>
      <div
        v-if="goBackRoute"
        class="mt-6"
      >
        <btn-text
          text="Voltar"
          class="d-inline-block"
          :dark="true"
          @clicked="goTo(goBackRoute)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/globais/Alert'
import BtnText from '@/components/globais/buttons/text/BtnText'
import BtnSecondary from './BtnSecondary'

import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  components: { Alert, BtnSecondary, BtnText },
  mixins: [ NavigationMixin ],
  props: {
    alert: { default: null },
    goBackRoute: { default: null },
    title: { required: true }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/theme.scss';

.titulo { color: #fff !important; font-weight: 400; font-size: 1.5rem; }
.alert { max-width: 100%; width: 320px; margin-top: 30px; }
.btn-voltar { margin: 15px auto 0; display: block; }
.auth-template .form-content {
  background: #00000080;
  padding: 32px;
}
.logo { width: 250px; }
</style>