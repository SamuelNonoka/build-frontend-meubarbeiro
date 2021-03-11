<template>
  <v-dialog 
    v-model="dialog"
    persistent
    max-width="300"
    dark
  >
    <v-card class="dialog pa-4">
      <h1 class="dialog-title font-weight-bold mb-4">
        Alterar senha
      </h1>

      <div class="conteudo">
        <input-field
          id="password"
          ref="password"
          label="Digite sua nova senha"
          type="password"
          :rules="passwordRules"
          @onKeyUp="onKeyUp" 
          @onKeyUpEnter="focusToNext('confirmPassword')" 
        />
        <input-field
          ref="confirmPassword"
          id="confirmPassword"
          label="Confirme a senha"
          type="password"
          :rules="passwordRules"
          @onKeyUp="onKeyUp" 
        />
      </div>
      <v-card-actions class="mt-4">
        <v-spacer></v-spacer>
        <v-btn
          class="primary"
          text
          dark
          :disabled="btnDisabled"
          @click="changePassword"
        >
          Confirmar
        </v-btn>
        <v-btn text @click="dialog = false">
          Cancelar
        </v-btn>
      </v-card-actions>
    </v-card>  
  </v-dialog>
</template>

<script>
import FormMixin from '@/mixins/FormMixin'
import InputField from '@/components/globais/form/input-field/InputField'
import SnackbarMixin from '@/mixins/SnackbarMixin'

export default {
  name: 'ChangePassword',
  components: { InputField },
  mixins: [ FormMixin, SnackbarMixin ],
  data: () => ({
    dialog: null,
    password: null,
    confirmPassword: null,
    passwordRules: [
      value => !!value || 'Informe a senha',
      value => value.length >= 6 || 'A senha deve ter no mínimo 6 caracteres'
    ]
  }),
  computed: {
    btnDisabled () {
      if (!this.password || !this.confirmPassword || this.password !== this.confirmPassword) return true
      else if (this.password.length < 6) return true
      return false
    }
  },
  methods: {
    changePassword () {
      this.$axios.post(`user/change-password`, { password: this.password })
      .then(response => {
        if (response.data.codigo === 200) {
          this.showSnackbar('Senha alterada com sucesso!')
          this.password = ''
          this.confirmPassword = ''
          this.dialog = false
        } else this.setErro(response.data.corpo)
      })
      .catch ((err) => {
        this.setErro('Não foi possível alterar a senha!')
        window.console.log(err)
      })
    },
    onKeyUp (value, id) {
      this.$data[id] = value
    },
    setErro (msg) {
      this.showSnackbarErro(msg)
    },
    showDialog () {
      this.dialog = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/theme.scss';

.dialog { background-color: $primaryDark; color: #fff; }
.dialog-title { font-size: 1.2rem; color: #fff; }
</style>