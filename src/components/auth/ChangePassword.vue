<template>
	<auth-template title="Alterar senha">
    <form @submit.prevent="cadastrar">
      <v-text-field
        ref="senha"
        id="password"
        :type="exibirSenha ? 'text' : 'password'"
        v-model="senha"
        label="Informe sua nova senha"
        :rules="passwordRules"
        :append-icon="exibirSenha ? 'visibility_off' : 'remove_red_eye'"
        @click:append="exibirSenha = !exibirSenha"
        v-on:keyup.enter="focusToNext('confimaSenha')"
        dark
        :success="isPasswordValid(senha)"
        clearable
        required
        validate-on-blur
      >
        <template v-slot:prepend-inner>
          <v-icon class="material-icons-outlined mr-2" dense>vpn_key</v-icon>
        </template>
      </v-text-field>
      
      <v-text-field
        ref="confimarSenha"
        id="confirmaSenha"
        :type="exibirSenha2 ? 'text' : 'password'"
        v-model="confirmaSenha"
        label="Confirmar Senha"
        :rules="passwordRules"
        :append-icon="exibirSenha2 ? 'visibility_off' : 'remove_red_eye'"
        @click:append="exibirSenha2 = !exibirSenha2"
        v-on:keyup.enter="focusToNext('code')"
        dark
        prepend-inner-icon="vpn_key"
        :success="isPasswordValid(confirmaSenha)"
        clearable
        required
        validate-on-blur
      >
        <template v-slot:prepend-inner>
          <v-icon class="material-icons-outlined mr-2" dense>vpn_key</v-icon>
        </template>
      </v-text-field>

      <v-text-field
      id="code"
        ref="code"
        v-model="code"
        label="Informe o código de confirmação"
        maxLength="4"
        append-icon="lock"
        v-on:keyup.enter="enterClick"
        :success="isCodeValid"
        dark
        clearable
        required
        validate-on-blur
      ></v-text-field>
  
      <div class="text-center mt-8">
        <btn-primary
          text="Alterar Senha"
          :disabled="btnDisabled"
          :loading="progressLoader"
          @clicked="cadastrar"
        />
      </div>
    </form>
  </auth-template>
</template>

<script>
import AuthTemplate from './AuthTemplate'
import BtnPrimary from './BtnPrimary'

import FormMixin from '@/mixins/FormMixin'
import NavigationMixin from '@/mixins/NavigationMixin'
import ValidationMixin from '@/mixins/ValidationMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'

export default {
  name: 'ChangePassword',
  components: { AuthTemplate, BtnPrimary },
  mixins: [ FormMixin, NavigationMixin, SnackbarMixin, ValidationMixin ],
  props: { 
    progressLoader: { default: false } 
  },
  data: () => ({
    exibirSenha: false,
    exibirSenha2: false,
    senha: '',
    confirmaSenha: '',
    code: null  
  }),
  computed: {
    btnDisabled () {
      if (!this.isPasswordValid(this.senha)) return true
      else if (!this.isPasswordValid(this.confirmaSenha)) return true
      else if (this.senha !== this.confirmaSenha) return true
      return false
    },
    isCodeValid () {
      return this.code && this.code.length === 4
    }
  },
  mounted () {
    document.querySelector('#password').focus()
  },
  methods: {
    enterClick () {
      if (!this.btnDisabled) this.cadastrar()
      else this.showSnackbarErro('Preencha todos os dados corretamente!')
    },
    cadastrar () {
      let data = { 
        token: this.$route.params.token,
        password: this.senha,
        code: this.code 
      }
      this.$emit('onChangePassword', data)
    }
  }
}
</script>