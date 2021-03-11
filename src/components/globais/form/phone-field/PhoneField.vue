<template>
  <v-text-field
    v-model="valueModel"
    :id="id"
    :label="label"
    :disabled="disabled"
    :rules="rules"
    :value="valueModel"
    :counter="counter"
    :success="success"
    color="success"
    v-mask="'(##) # ####-####'"
    @keyup="onKeyUp"
    validate-on-blur
    required
  >
    <template v-slot:prepend-inner>
      <v-icon class="material-icons-outlined mr-2" dense>{{ icon }}</v-icon>
    </template>
  </v-text-field>
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
  name: 'PhoneField',
  directives: {mask},
  props: {
    label: {
      required: true
    },
    value: {
      default: ''
    },
    disabled: {
      default: false
    },
    counter: {
      default: null
    },
    required: {
      default: false
    },
    id: {
      default: null
    },
    icon: {
      default: null
    },
    success: {
      default: null
    }
  },
  data: () => ({
    valueModel: null
  }),
  computed: {
    rules () {
      if (!this.required) return []
      return [v => (v && v.length >= 15) || 'Informe um número válido']
    }
  },
  watch: {
    value (newValue) {
      this.valueModel = newValue
    }
  },
  mounted () {
    this.valueModel = this.value
  },
  methods: {
    onKeyUp () {
      this.$emit('onKeyUp', this.valueModel, this.id)
    }
  }
}
</script>