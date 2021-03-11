<template>
  <v-text-field
    v-model="valueModel"
    :label="label"
    :disabled="disabled"
    :rules="rules"
    :counter="counter"
    v-mask="'##.###-###'"
    @keyup="onKeyUp"
    validate-on-blur
    required
  ></v-text-field>
</template>

<script>
import {mask} from 'vue-the-mask'

export default {
  name: 'CepField',
  directives: {mask},
  props: {
    label: {
      default: 'Cep'
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
    }
  },
  data: () => ({
    valueModel: ''
  }),
  computed: {
    rules () {
      if (!this.required) return []

      return [v => (v && v.length == 10) || 'Informe um cep válido']
    }
  },
  watch: {
    value (newValue) {
      this.valueModel = newValue
    }
  },
  methods: {
    onKeyUp () {
      this.$emit('onKeyUp', this.valueModel, this.id)
    }
  }
}
</script>