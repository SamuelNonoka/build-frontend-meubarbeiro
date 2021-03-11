<template>
	<auth-template
    title="Login"
    :alert="alertInfo"
    :isBarber="isBarber"
    goBackRoute="home"
  >
    <form @submit.prevent="logar">
      <div class="text-center">
        <btn-primary 
          text="Logar com e-mail e senha"
          :loading="progressLoader"
          @clicked="openFormDialog"
        />
      </div>
      
      <gbutton
        class="mt-4 mx-auto d-inline-block"
        :params="params"
        :renderParams="renderParams"
        :onSuccess="loginWithGoogle"
      >
        Logar com o Google
      </gbutton>

      <div class="d-block mt-12">
        <btn-secondary
          text="Recuperar senha"
          dark
          @clicked="recoveryPassword"
        />
      </div>

			<div class="mt-4 d-block">
        <btn-secondary
          text="Cadastrar-se"
          @clicked="register()"
        />
      </div>
    </form>

    <v-dialog
      v-model="formDialog"
      transition="dialog-bottom-transition"
      width="350"
      persistent
    >
      <v-card dark class="modal-content pa-4">
        <div class="text-right">
          <v-btn
            icon
            dark
            @click="formDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <div>
          <div class="text-center">
            <img src="/logo.png" class="logo" />
          </div>
          <div class="form-group">
            
            <v-text-field
              id="email"
              v-model="email"
              class="email"
              dark
              label="E-mail"
              :rules="emailRules"
              v-on:keyup.enter="focusToNext('password')"
              :success="isEmailValid(email)"
              autocomplete="off"
              clearable
              required
              validate-on-blur 
            >
              <template v-slot:prepend-inner>
                <v-icon class="outlined material-icons-outlined mr-2" dense>mail</v-icon>
              </template>
            </v-text-field>
          </div>

          <div class="form-group">
            <v-text-field
              id="password"
              ref="password"
              v-model="password"
              :success="isPasswordValid(email)"
              dark
              :type="showPassword ? 'text' : 'password'"
              label="Senha"
              color="success"
              :append-icon="showPassword ? 'visibility_off' : 'remove_red_eye'"
              :rules="passwordRules"
              @click:append="showPassword = !showPassword"
              v-on:keyup.enter="enterClick"
              clearable
              required
              validate-on-blur 
            >
              <template v-slot:prepend-inner>
                <v-icon class="material-icons-outlined mr-2" dense>vpn_key</v-icon>
              </template>
            </v-text-field>
          </div>

          <div class="text-center mt-6">
            <btn-primary 
              class="btnLogin"
              text="LOGAR"
              :loading="progressLoader"
              @clicked="login"
            />
          </div>  
        </div>
      </v-card>
    </v-dialog>
  </auth-template>
</template>

<script>
import gbutton from 'vue-google-login'

import AuthTemplate from './AuthTemplate'
import BtnPrimary from './BtnPrimary'
import BtnSecondary from './BtnSecondary'

import BarbershopMixin from '@/mixins/BarbershopMixin'
import FormMixin from '@/mixins/FormMixin'
import NavigationMixin from '@/mixins/NavigationMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import UserMixin from '@/mixins/UserMixin'
import ValidationMixin from '@/mixins/ValidationMixin'

export default {
  name: 'Login',
  components: { AuthTemplate, BtnPrimary, BtnSecondary, gbutton },
  mixins: [ BarbershopMixin, FormMixin, NavigationMixin, SnackbarMixin, UserMixin, ValidationMixin ],
  props: {
    progressLoader: { default: false },
    alertInfo: { default: false },
    isBarber: { default: false }
  },
  data: () => ({
    showPassword: false,
    email: '',
    formDialog: false,
    password: '',
    params: {
      client_id: '69364991955-nfb8lar5v22bfikoba0imp8vjmscr23h.apps.googleusercontent.com'
    },
    renderParams: {
      height: 45,
      width: 200,
      theme: 'dark'
    }
  }),
  methods: {
    loginWithGoogle (googleUser) {
      const profile = googleUser.getBasicProfile()
      const data = {
        google_id: profile.getId(),
        name: profile.getName(),
        email: profile.getEmail()
      } 
      this.$emit('loginWithGoogle', data)
    },
    enterClick () {
      this.login()
    },
    isFormValid () {
      if (!this.isEmailValid(this.email)) return false
      if (!this.isPasswordValid(this.password)) return false
      return true
    },
    login () {
      if (this.isFormValid()) {
        let data = {
          email: this.email,
          password: this.password
        }
        this.$emit('login', data)
      } else this.showSnackbarErro('Preencha todos os dados corretamente!')
    },
    openFormDialog () {
      this.formDialog = true
      setTimeout(() => {
         document.querySelector('#email').focus()
      }, 500)
    },
    register () {
      if (this.isBarber) this.goTo('register-barber')
      else this.goTo('register')
    },
    recoveryPassword () {
      if (this.isBarber) this.goTo('barber-recovery-password')
      else this.goTo('recovery-password')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-content {
  background: #000000fa;
  padding: 24px !important;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  margin: auto;
}
.btnLogin { width: 180px; }
.logo { width: 200px; max-width: 100%; }
</style>