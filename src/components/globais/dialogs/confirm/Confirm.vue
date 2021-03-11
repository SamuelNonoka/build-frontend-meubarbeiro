<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400">
      <v-card 
        class="confirm-dialog py-2" 
        :class="{'danger': danger}"
        dark
      >
        <v-card-title class="headline">
          {{ title }}
        </v-card-title>
        <v-card-text v-if="description">
          {{ description }}
        </v-card-text>
        <v-card-actions class="px-4 mt-4">
          <v-spacer></v-spacer>
          <v-btn
            :color="danger ? 'primary' : 'secondary'"
            text
            @click="send('confirm')"
          >
            Confirmar
          </v-btn>
          <v-btn 
            color="light"
            text
            @click="send('cancel')"
          >
            Cancelar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
// Modules
import './Confirm.scss'

export default {
  name: 'Confirm',
  props: {
    title: {
      required: true
    },
    description: {
      required: false
    },
    danger: {
      default: false
    }
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
    },
    cardClass () {
      return this.danger ? 'muted' : 'primary'
    }
  }
}
</script>