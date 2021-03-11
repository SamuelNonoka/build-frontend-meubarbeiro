<template>
  <div class="profile">
    <div class="conteudo-profile">
      <img src="/logo.png" class="logo" />
      <div v-if="barber" class="container">
        <div class="profile-card elevation-1">
          <v-row>
            <v-col cols="12" sm="5" md="4" class="text-center">
              <div class="profile-image-content d-inline-block text-center">
                <img v-if="imageUrl" :src="imageUrl">
              </div>

              <div class="btn-upload-box">
                <btn-secondary
                  text="Alterar Imagem"
                  class="mt-6"
                  icon="cloud_upload"
                  @clicked="toggleShow"
                />
              </div>

              <upload-image
                field="img"
                @crop-success="cropSuccess"
                @crop-upload-success="cropUploadSuccess"
                @crop-upload-fail="cropUploadFail"
                v-model="show"
                :width="300"
                :height="300"
                lang-type="pt-br"
                :url="uploadUrl"
                :params="params"
                :headers="headers"
                img-format="png"
              ></upload-image>
            </v-col>
            <v-col cols="12" sm="7" md="8" class="pl-lg-8">
              <v-form>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <input-field
                      label="Nome"
                      :rules="nameRules"
                      :value="name"
                      icon="person"
                      v-model="name"
                      @onKeyUp="setName"
                      :success="isNameValid"
                      counter="50"
                    />
                  </v-col>

                  <v-col cols="12" sm="12" md="7" class="py-0">
                    <input-field
                      label="E-mail"
                      icon="mail"
                      :disabled="true"
                      :value="barber.email"
                    />
                  </v-col>

                  <v-col cols="12" sm="12" md="5" class="py-0">
                    <phone-field
                      label="Telefone"
                      icon="phone"
                      :rules="phoneRules" 
                      :value="barber.phone"
                      :success="isPhoneValid"
                      @onKeyUp="setPhone"
                    />
                  </v-col>

                  <v-col cols="12" class="py-0">
                    <textarea-field
                      v-model="profile"
                      label="Perfil"
                      icon="home"
                      :rules="profileRules"
                      :value="barber.profile"  
                      :success="isProfileValid"
                      @onKeyUp="setProfile"
                    />
                  </v-col>
                  <v-row class="ma-0" align="center">
                    <v-spacer></v-spacer>
                    <v-col cols="12" sm="auto">
                      <btn-secondary
                        text="Salvar" 
                        class="mt-4"
                        icon="check"
                        :disabled="btnDisabled"
                        @clicked="updateBarber"
                      />
                    </v-col>
                    <v-col cols="12" sm="auto" class="pl-0">
                      <btn-text
                        text="Cancelar" 
                        class="mt-0 mt-sm-4"
                        :disabled="btnDisabled"
                        @clicked="updateBarber"
                      />  
                    </v-col>  
                  </v-row>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <overlay ref="overlay" />
  </div>
</template>

<script>
import Axios from '@/plugins/axios'
import BtnSecondary from '@/components/globais/buttons/secondary/BtnSecondary'
import BtnText from '@/components/globais/buttons/text/BtnText'
import InputField from '@/components/globais/form/input-field/InputField'
import Overlay from '@/components/globais/overlay/Overlay'
import PhoneField from '@/components/globais/form/phone-field/PhoneField'
import TextareaField from '@/components/globais/form/textarea-field/TextareaField'
import UploadImage from 'vue-image-crop-upload'
import BarberMixin from '@/mixins/BarberMixin'
import NavigationMixin from '@/mixins/NavigationMixin'
import OverlayMixin from '@/mixins/OverlayMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import TextMixin from '@/mixins/TextMixin'

export default {
  name: 'Profile',
  components: { BtnSecondary, BtnText, InputField, UploadImage, Overlay, PhoneField, TextareaField },
  mixins: [ BarberMixin, NavigationMixin, OverlayMixin, SnackbarMixin, TextMixin ],
  data: () => ({
    name: '',
    email: '',
    profile: '',
    phone: '',
    nameRules: [
      v => !!v || 'Informe seu nome',
      v => (v && v.length <= 50) || 'O campo nome deve ter no máximo 50 caracteres'
    ],
    phoneRules: [
      v => !!v || 'Informe seu telefone'
    ],
    profileRules: [
      v => (v && v.length <= 200) || 'O seu perfil deve ter no máximo 50 caracteres'
    ],
    show: false,
    params: {
      image: ''
    },
    headers: {
      token: '',
      smail: '*_~'
    },
    uploadUrl: '',
    imgDataUrl: '',
    imageKey: 0
  }),
  computed: {
    btnDisabled () {
      if (!this.isNameValid || !this.isPhoneValid) return true
      return false
    },
    imageUrl () {
      if (!this.barber.image_url) return null
      return `${this.$url_backend}${this.barber.image_url}`
    },
    isPhoneValid () {
      const phone = this.removeSimbols(this.phone)
      return this.phone && (phone.length === 10 || phone.length === 11)
    },
    isProfileValid () {
      return (this.profile && this.profile.length) ? true : false
    },
    isNameValid () {
      return this.name && this.name.length <= 50
    }
  },
  watch: {
    barber (val) {
      if (val) {
        this.setBarber()
      }
    }
  },
  mounted () {
    this.headers.token = localStorage.token
    this.uploadUrl = this.$url_api + '/barber/image'
    setTimeout(() => {
      this.setBarber()
    }, 300)
  },
  methods: {
    onOverlaySuccess (text) {
      this.showSnackbar(text)
    },
    setError (text) {
      this.showSnackbarErro(text)
      this.hideOverlayError(text)
    },
    setBarber () {
      this.name = this.barber.name
      this.email = this.barber.email
      this.phone = this.barber.phone
      this.profile = this.barber.profile
    },
    setPhone (val) {
      this.phone = val
    },
    setName (val) {
      this.name = val
    },
    setProfile (val) {
      this.profile = val
    },
    updateBarber () {
      this.showOverlay('Salvando dados')
      Axios.put(`/barber/${this.barber.id}`, {
        name: this.name,
        phone: this.removeSimbols(this.phone),
        profile: this.profile
      })
      .then(response => {
        if (response.data.codigo === 200) {
          let token = response.data.corpo.token
          this.storeBarber(token)
          this.getBarber()
          let text = 'Perfil alterado com sucesso!'
          this.hideOverlaySuccess(text)
        } else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        this.setError('Não foi possível alterar seus dados!')
        window.console.log(err)
      })
    },
    toggleShow() {
			this.show = !this.show
		},
    cropSuccess(imgDataUrl){
      this.imgDataUrl = imgDataUrl
      this.params.image = imgDataUrl
    },
    cropUploadSuccess (response) {
      let token = response.corpo
      this.storeBarber(token)
      this.barber = this.getBarber()
      this.hideOverlaySuccess('Imagem alterado com sucesso!')
    },
    cropUploadFail(status, field) {
      window.console.log('-------- upload fail --------')
      window.console.log(status)
      window.console.log('field: ' + field)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.profile { position: relative; display: block; }
.profile:before {
  content: '';
  background-image: url('/fundo_autenticacao.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh / 100 * 60);
  position: fixed;
  display: block;
  top: 64px;
  width: 100%;
} 
.conteudo-profile {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: calc(25vh - 90px);
}
.logo { width: 240px; }
.profile-card {
  background: #fff;
  padding: 40px 60px;
  border-radius: 15px;
  margin-top: 60px;
  margin-bottom: 60px;
}
.profile-image-content {
  background: #ccc;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

@media all and (max-width: 959px) {
  .profile:before { top: 54px; }
  .profile-card { padding: 20px; }
}

@media all and (max-width: 599px) {
  .logo { display: none; }
  .profile-card { margin-top: 0; margin-bottom: 30px; }
}
</style>