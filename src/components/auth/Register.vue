<template>
	<auth-template
    title="Faça seu cadastro" 
    :isBarber="isBarber"
  >
    <template v-if="alertInfo">
      <alert icon="done">
        Obrigado por ter se cadastrado!
        <br>
        Verifique sua caixa de e-mail e confirme seu cadastro.
      </alert>

      <btn-secondary
          text="Voltar para o site"
          class="mt-12"
          @clicked="voltar"
          dark
        />
    </template>
    <template v-else>
      <form @submit.prevent="cadastrar">
        <div class="text-center mt-4">
          <btn-primary
            text="Cadastre-se com email"
            class="btn-cadastrar"
            @clicked="openFormDialog"
          />
        </div>

        <div class="text-center">
        <gbutton
          class="mt-6 mx-auto d-flex justify-center"
          :params="params"
          :renderParams="renderParams"
          :onSuccess="registerWithGoogle"
        >
          Cadastrar-se com o Google
        </gbutton>
        </div>

        <btn-secondary
          text="Voltar"
          class="mt-12"
          @clicked="voltar"
          dark
        />
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
              id="name"
              label="Nome"
              v-model="name"
              :rules="nameRules"
              :success="isNameValid(name)"
              dark
              v-on:keyup.enter="focusToNext('email')"
              autocomplete="off"
              clearable
              required
              validate-on-blur
            >
              <template v-slot:prepend-inner>
                <v-icon class="material-icons-outlined mr-2" dense>person</v-icon>
              </template>
            </v-text-field>
          </div>

          <div class="form-group">
            <v-text-field
              id="email"
              ref="email"
              v-model="email"
              label="E-mail"
              autocomplete="off"
              :disabled="emailDisabled"
              :rules="emailRules"
              :success="isNameValid(email)"
              dark
              prepend-inner-icon="mail"
              v-on:keyup.enter="focusToNext('password')"
              clearable
              required
              validate-on-blur
            >
              <template v-slot:prepend-inner>
                <v-icon class="material-icons-outlined mr-2" dense>mail</v-icon>
              </template>
            </v-text-field>
          </div>

          <div class="form-group">
            <v-text-field
              ref="password"
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              :rules="passwordRules"
              :success="isNameValid(password)"
              dark
              label="Senha"
              :append-icon="showPassword ? 'visibility_off' : 'remove_red_eye'"
              @click:append="showPassword = !showPassword"
              v-on:keyup.enter="focusToNext('confirmPassword')"
              clearable
              required
              validate-on-blur
            >
              <template v-slot:prepend-inner>
                <v-icon class="material-icons-outlined mr-2" dense>vpn_key</v-icon>
              </template>
            </v-text-field>
          </div>

          <div class="form-group">
            <v-text-field
              ref="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              v-model="confirmPassword"
              :rules="passwordRules"
              :success="isNameValid(confirmPassword)"
              dark
              label="Confirmar Senha"
              :append-icon="showConfirmPassword ? 'visibility_off' : 'remove_red_eye'"
              @click:append="showConfirmPassword = !showConfirmPassword"
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
              class="btnRegister"
              text="CADASTRAR"
              :loading="progressLoader"
              @clicked="register"
            />
          </div>  
        </div>
      </v-card>
    </v-dialog>
    </template>
  </auth-template>
</template>

<script>
import Alert from '@/components/globais/Alert'
import gbutton from 'vue-google-login'
import AuthTemplate from './AuthTemplate'
import BtnPrimary from './BtnPrimary'
import BtnSecondary from './BtnSecondary'

import FormMixin from '@/mixins/FormMixin'
import NavigationMixin from '@/mixins/NavigationMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import ValidationMixin from '@/mixins/ValidationMixin'

export default {
  name: 'Register',
  components: { Alert, AuthTemplate, BtnPrimary, BtnSecondary, gbutton },
  mixins: [ FormMixin, NavigationMixin, SnackbarMixin, ValidationMixin ],
  props: { 
    alertInfo: { default: true },
    isBarber: { default: false },
    progressLoader: { default: false },
    token: { default: '' }
  },
  data: () => ({
    formDialog: false,
    showPassword: false,
    showConfirmPassword: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    params: {
      client_id: '69364991955-nfb8lar5v22bfikoba0imp8vjmscr23h.apps.googleusercontent.com'
    },
    renderParams: {
      height: 45,
      width: 250,
      theme: 'dark'
    }
  }),
  watch: {
    token (val) {
      if (val) {
        let jwt = this.parseJwt(val)
        this.email = jwt.usuario.barber_mail
      }
    }
  },
  computed: {
    emailDisabled () {
      return this.token ? true : false
    }
  },
  methods: {
    enterClick () {
      this.register()
    },
    isFormValid () {
      if (!this.isNameValid(this.name)) return false
      else if (!this.isEmailValid(this.email)) return false
      else if (!this.isPasswordValid(this.password)) return false
      else if (!this.isPasswordValid(this.confirmPassword)) return false
      else if (this.confirmPassword !== this.password) return false
      return true
    },
    register () {
      if (this.isFormValid()) {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        this.$emit('register', data)
      } else this.showSnackbarErro('Preencha todos os campos corretamente!')
    },
    openFormDialog () {
      this.formDialog = true
      setTimeout(() => {
        document.querySelector('#name').focus()
      }, 500)
    },
    registerWithGoogle (googleUser) {
      const profile = googleUser.getBasicProfile()
      const data = {
        google_id: profile.getId(),
        name: profile.getName(),
        email: profile.getEmail()
      } 
      this.$emit('registerWithGoogle', data)
    },
    parseJwt (token) {
      let base64Url = token.split('.')[1]
      let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      /*let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))*/
      let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      }).join(''))
      return JSON.parse(jsonPayload)
    },
    voltar () {
      if (this.isBarber) this.goTo('login-barber')
      else this.goTo('login')
    }
  }
}
</script>

<style scoped>
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