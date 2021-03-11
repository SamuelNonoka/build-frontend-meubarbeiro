<template>
 <v-text-field
  v-model="valueComputed"
  v-money="money"
  :label="label"
  :disabled="disabled"
  :rules="rules"
  :counter="counter"
  :hint="placeholder"
  @keyup="onKeyUp"
  validate-on-blur
  aria-autocomplete="false"
  required
></v-text-field>
</template>

<script>
 import {VMoney} from 'v-money'

export default {
  name: 'MoneyField',
  directives: {money: VMoney},
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
    rules: {
      default: Array
    },
    id: {
      default: null
    },
    placeholder: {
      default: ''
    }
  },
  data: () => ({
    valueModel: null,
    money: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      suffix: '',
      precision: 2,
      masked: false /* doesn't work with directive */
    }
  }),
  computed: {
    valueComputed: {
      set (val) {
        this.valueModel = val
      },
      get () {
        return this.value
      }
    }
  },
  methods: {
    onKeyUp () {
      this.$emit('onKeyUp', this.valueModel, this.id)
    }
  }
}
</script>