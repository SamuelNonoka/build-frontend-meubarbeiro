<template>
	<auth-template title="Recuperar senha">
    <form @submit.prevent="cadastrar" class="form-group">
      <v-text-field
        id="email"
        v-model="email"
        label="Informe seu e-mail"
        :rules="emailRules"
        v-on:keyup.enter="enterClick" 
        class="email"
        dark
        :success="isEmailValid(email)"
        autocomplete="off"
        clearable
        required
        validate-on-blur
      >
        <template v-slot:prepend-inner>
          <v-icon class="material-icons-outlined mr-2" dense>mail</v-icon>
        </template>
      </v-text-field>
     
      <div class="text-center mt-4">
        <btn-primary
          text="Enviar"
          :disabled="btnDisabled"
          :loading="progressLoader"
          @clicked="onRecoveryPassword"
        />
      </div>

      <div class="text-center mt-12">
				<btn-secondary
					text="Voltar"
          @clicked="goToBack()"
        />
      </div>
    </form>
  </auth-template>
</template>

<script>
import AuthTemplate from './AuthTemplate'
import BtnPrimary from './BtnPrimary'
import BtnSecondary from './BtnSecondary'

import ValidationMixin from '@/mixins/ValidationMixin'
import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'RecoveryPassword',
  components: { AuthTemplate, BtnPrimary, BtnSecondary },
  mixins: [ NavigationMixin, ValidationMixin ],
  props: {
    progressLoader: { default: false }
  },
  data: () => ({
    email: ''  
  }),
  computed: {
    btnDisabled () {
      if (!this.isEmailValid(this.email)) return true
      return false
    }
  },
  mounted () {
    document.querySelector('#email').focus()
  },
  methods: {
    enterClick () {
      if (!this.btnDisabled) this.enviar()
      else this.showSnackbarErro('Informe seu e-mail!')
    },
    onRecoveryPassword () {
      this.$emit('onRecoveryPassword', { email: this.email })
    }
  }
}
</script>