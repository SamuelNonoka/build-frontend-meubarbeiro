<template>
  <div class="barbershop-page">
    <profile-image
      :mainImage="mainImage"
      :backgroundImage="backgroundImage"
      mainUploadSrc='barbershop/image'
      backgroundUploadSrc='barbershop/background'
      @onCropUploadSuccess="onMainImageUploaded"
      @onCropUploadBackgroundImageSuccess="onBackgroundImageUploaded"
    />
    <div class="px-4">
      <!-- Informações Báicas -->
      <card
        title="Perfil" 
        icon="account_circle"  
      >
        <v-row>
          <v-col cols="12" sm="8" md="9" class="py-0">
            <input-field
              v-model="name"
              id="name"
              label="Nome:"
              @onKeyUp="setInputValue"
            />
          </v-col>

          <v-col cols="12" sm="4" md="3" class="py-0">
            <phone-field
              v-model="phone"
              id="phone"
              label="Telefone:" 
              :required="false"
              @onKeyUp="setInputValue"
            />
          </v-col>

          <v-col cols="12" sm="6" class="py-0">
            <input-field
              v-model="instagramUrl"
              id="instagramUrl"
              label="Instagram:"
              @onKeyUp="setInputValue"
            />
          </v-col>

          <v-col cols="12" sm="6" class="py-0">
            <input-field
              v-model="facebookUrl"
              id="facebookUrl"
              label="Facebook:"
              @onKeyUp="setInputValue"
            />
          </v-col>

          <v-col cols="12" class="py-0">
            <textarea-field
              v-model="profile"
              id="profile"
              label="Perfil:" 
              @onKeyUp="setInputValue"
            />
          </v-col>
        </v-row>
      </card>
      <!-- Fim das informações básicas -->

      <!-- Endereço -->
      <card
        title="Endereço"
        icon="place"
        class="mt-8" 
      >
        <v-row>
          <v-col cols="12" sm="3" lg="2" class="py-0">
            <cep-field
              v-model="cep"
              id="cep"
              @onKeyUp="setInputValue"
            />
          </v-col>
          <v-col cols="12" sm="9" md="7" lg="9" class="py-0">
            <input-field
              v-model="publicPlace"
              id="publicPlace"
              label="Endereço:"
              @onKeyUp="setInputValue"
            />
          </v-col>
          <v-col cols="12" sm="3" md="2" lg="1" class="py-0">
            <input-field
              v-model="number"
              id="number"
              label="Nº:"
              @onKeyUp="setInputValue"
            />
          </v-col>
          <v-col cols="12" sm="9" md="4" lg="5" class="py-0">
            <input-field
              v-model="complement"
              id="complement"
              label="Complemento:"
              @onKeyUp="setInputValue"
            />
          </v-col>
          <v-col cols="12" sm="4" md="3" lg="3" class="py-0">
            <input-field
              v-model="neighborhood"
              id="neighborhood"
              label="Bairro:"
              :disabled="true"
              @onKeyUp="setInputValue"
            />
          </v-col>
          <v-col cols="12" sm="4" md="3" lg="3" class="py-0">
            <input-field
              v-model="city"
              id="city"
              label="Cidade:"
              :disabled="true"
              @onKeyUp="setInputValue"
            />
          </v-col>
          <v-col cols="12" sm="2" md="2" lg="1" class="py-0">
            <input-field
              v-model="uf"
              id="uf"
              label="Uf:"
              :disabled="true"
              @onKeyUp="setInputValue"
            />
          </v-col>
          <v-col cols="12" sm="12" md="12" class="py-0">
            <input-field
              v-model="mapUrl"
              id="mapUrl"
              label="Link do mapa:"
              @onKeyUp="setInputValue"
            />
          </v-col>
        </v-row>
      </card>
      <!-- Fim do endereço -->
      
      <!-- Horários -->
      <schedules
        ref="schedules"
        class="mt-8"
        :schedulesDays="schedulesDays"
      />

      <v-row class="mt-8">
        <v-spacer></v-spacer>
        <v-col cols="12" sm="auto">
          <btn-secondary
            text="SALVAR" 
            @clicked="save"
            :disabled="!enableSaveBtn"
          />
        </v-col>

        <v-col cols="12" sm="auto" class="pl-0">
          <btn-text
            text="Cancelar" 
            @clicked="cancel"
          />
        </v-col>
      </v-row>
    </div>
    <overlay ref="overlay" />
  </div>
</template>

<script>
import BtnSecondary from '@/components/globais/buttons/secondary/BtnSecondary'
import BtnText from '@/components/globais/buttons/text/BtnText'
import Card from '@/components/globais/Card'
import InputField from '@/components/globais/form/input-field/InputField'
import CepField from '@/components/globais/form/cep-field/CepField'
import Overlay from '@/components/globais/overlay/Overlay'
import PhoneField from '@/components/globais/form/phone-field/PhoneField'
import ProfileImage from '@/components/admin/profile-image/ProfileImage'
import Schedules from '@/components/admin/schedules/Schedules'
import TextareaField from '@/components/globais/form/textarea-field/TextareaField'
import BarberMixin from '@/mixins/BarberMixin'
import BarbershopMixin from '@/mixins/BarbershopMixin'
import CepMixin from '@/mixins/CepMixin'
import NavigationMixin from '@/mixins/NavigationMixin'
import OverlayMixin from '@/mixins/OverlayMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import TextMixin from '@/mixins/TextMixin'

export default {
  name: 'Barbershop',
  components: { 
    BtnSecondary,
    BtnText,
    Card,
    CepField,
    InputField,
    Overlay,
    PhoneField,
    ProfileImage,
    Schedules,
    TextareaField
  },
  mixins: [ BarberMixin, BarbershopMixin, CepMixin, NavigationMixin, OverlayMixin, SnackbarMixin, TextMixin ],
  data: () => ({
    id: null,
    name: null,
    phone: null,
    instagramUrl: null,
    facebookUrl: null,
    profile: null,
    address_id: null,
    cep: null,
    publicPlace: null,
    number: null,
    complement: null,
    neighborhood: null,
    city: null,
    uf: null,
    mapUrl: null,
    imageUrl: null,
    backgroundUrl: null,
    schedulesDays: []
  }),
  computed: {
    mainImage () {
      if (!this.imageUrl) return null
      return this.$url_backend + this.imageUrl
    },
    backgroundImage () {
      if (!this.backgroundUrl) return null
      return this.$url_backend + this.backgroundUrl
    },
    showContent () {
      return this.barber.barbershop_id
    },
    enableSaveBtn () {
      if (!this.name) return false
      else if (!this.phone) return false
      else if (!this.instagramUrl) return false
      else if (!this.facebookUrl) return false
      else if (!this.cep) return false
      else if (this.cep.length !== 10) return false
      else if (!this.publicPlace) return false    
      else if (!this.neighborhood) return false
      else if (!this.city) return false
      else if (!this.uf) return false
      return true
    }
  },
  watch: {
    cep: function (val) {
      if (val && val.length === 10)
        this.getCepApi(val)
    }
  },
  created () {
    if (this.getBarber().barbershop_id)
      this.getBarberShopService()
  },
  methods: {
    cancel () {
      this.goTo('admin')
    },
    getBarberShopService () {
      this.getBarbershopByIdOnService(this.getBarber().barbershop_id)
    },
    onGetBarbershopByIdOnServiceSuccess (response) {
      this.onBarbershopSuccess(response)
    },
    onGetBarbershopByIdOnServiceError (msg) {
      this.onBarbershopError(msg)
    },
    onBarbershopSuccess (response) {
      this.id = response.id
      this.address_id = response.address_id
      this.name = response.name
      this.phone = this.setPhoneMask(response.phone_number)
      this.instagramUrl = response.instagram_url
      this.facebookUrl = response.facebook_url
      this.profile = response.description

      if (response.address) {
        let address = response.address
        this.cep = this.setCepMask(address.cep) || null
        this.publicPlace = address.public_place || null
        this.number = address.number || null
        this.complement = address.complement || null
        this.neighborhood = address.neighborhood || null
        this.city = address.city || null
        this.uf = address.uf || null
        this.mapUrl = address.map_url || null
      }

      if (response.schedule_days) {
        this.schedulesDays = response.schedule_days
      }

      this.imageUrl = response.image_url
      this.backgroundUrl = response.background_url
    },
    onBarbershopError (msg) {
      this.showSnackbarErro(msg)
    },
    onGetCepApiSuccess (response) { 
      this.publicPlace = response.logradouro
      this.complement = response.complemento || this.complement
      this.neighborhood = response.bairro
      this.city = response.localidade
      this.uf = response.uf
    },
    onMainImageUploaded (imageUrl) {
      this.imageUrl = imageUrl
    },
    onBackgroundImageUploaded (imgUrl) {
      this.backgroundUrl = imgUrl
    },
    save () {
      this.showOverlay('Salvando...')
      let data = {
        name: this.name,
        phone_number: this.removeMask(this.phone),
        instagram_url: this.instagramUrl,
        facebook_url: this.facebookUrl,
        profile: this.profile,
        address_id: this.address_id,
        address: {
          cep: this.removeMask(this.cep),
          public_place: this.publicPlace,
          number: this.number,
          complement: this.complement,
          neighborhood: this.neighborhood,
          city: this.city,
          uf: this.uf,
          map_url: this.mapUrl
        },
        schedules_days: this.$refs.schedules.barbershopDays
      }

      this.updateBarbershopOnService(data, this.id)
    },
    onUpdateBarbershopOnServiceSuccess (response) {
      let barbershop = response.barbershop
      this.onBarbershopSuccess(barbershop)
      this.showSnackbar('Dados atualizados com sucesso!')
      this.hideOverlaySuccess('')
    },
    onUpdateBarbershopOnServiceError (msg) {
      this.onBarbershopError(msg)
    },
    setInputValue (val, name) {
      this.$data[name] = val
    }
  }
}
</script>

<style lang="scss" scoped>
@media all and (max-width: 1263px) {
  .barbershop-page { padding-bottom: 45px; }
}
</style>