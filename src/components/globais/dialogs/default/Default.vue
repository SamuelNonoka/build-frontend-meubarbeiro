<template>
  <v-row justify="center" v-if="dialog">
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card 
        class="confirm-dialog py-2" 
        light
      >
        <v-card-title class="headline">
          {{ title }}
        </v-card-title>
        <v-card-text v-if="description">
          {{ description }}
        </v-card-text>
        <v-card-text class="pb-2">
          <slot></slot>
        </v-card-text>
        <v-card-actions class="px-4">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="auto" class="text-center pa-0">
              <btn
              class="btn-confirm"
              :block="false"
              :disabled="btnDisabled"
              @clicked="send('confirm')"
              text="Confirmar"
            />
            </v-col>
            <v-col cols="12" sm="auto" class="text-center py-0">
              <btn-text 
              class="btn-cancel"
              :block="false"
              text="Cancelar"
              @clicked="send('cancel')"
            />
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Btn from '@/components/globais/buttons/secondary/BtnSecondary'
import BtnText from '@/components/globais/buttons/text/BtnText'

export default {
  name: 'Default',
  components: { Btn, BtnText },
  props: {
    btnDisabled: { default: false },
    title: { required: true },
    description: { required: false },
    danger: { default: false }
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    send (emit) {
      this.dialog = false
      this.$emit(emit)
    },
    showDialog () {
      this.dialog = true
    }
  }
}
</script>