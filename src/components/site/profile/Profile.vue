<template>
  <v-dialog 
    v-model="dialog"
    persistent
    max-width="300"
    dark
  >
    <v-card class="dialog pa-4" v-if="user">
      <h1 class="dialog-title font-weight-bold mb-4">
        Meu Perfil
      </h1>

      <div class="conteudo">
        <input-field
          id="name"
          label="Nome"
          :rules="nameRules"
          :value="user.name"
          @onKeyUp="onKeyUp" 
          @onKeyUpEnter="focusToNext('phoneNumber')" 
        />
        <phone-field
          id="phoneNumber"
          label="Telefone"
          :value="this.setPhoneMask(phoneNumber)"
          :required="true"
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
          @click="save"
        >
          Salvar
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
import PhoneField from '@/components/globais/form/phone-field/PhoneField'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import TextMixin from '@/mixins/TextMixin'
import UserMixin from '@/mixins/UserMixin'

export default {
  name: 'Profile',
  components: { InputField, PhoneField },
  mixins: [ FormMixin, SnackbarMixin, TextMixin, UserMixin ],
  data: () => ({
    dialog: null,
    name: null,
    phoneNumber: null,
    nameRules: [ value => !!value || 'Informe o nome' ]
  }),
  computed: {
    btnDisabled () {
      let phoneNumber = this.removeMask(this.phoneNumber)
      if (!this.name || phoneNumber.length < 10) return true
      return false
    }
  },
  mounted () {
    if (this.user) {
      this.name = this.user.name
      this.phoneNumber = this.user.phone_number
    }
  },
  methods: {
    save () {
      this.$axios.put(`user/${this.user.id}`,{
        name: this.name,
        phone_number: this.removeMask(this.phoneNumber)
      })
      .then(response => {
        if (response.data.codigo === 200) {
          this.showSnackbar('Perfil salvar com sucesso!')
          this.storeUser(response.data.corpo)
          this.name = ''
          this.phoneNumber = ''
          this.dialog = false
        } else this.setErro(response.data.corpo)
      })
      .catch ((err) => {
        this.setErro('Não foi possível alterar o perfil!')
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