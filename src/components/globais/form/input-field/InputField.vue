<template>
  <v-text-field
    :ref="id"
    :id="id"
    v-model="valueModel"
    :value="valueModel"
    :label="label"
    :disabled="disabled"
    :rules="rules"
    :counter="counter"
    :hint="placeholder"
    color="success"
    :type="type"
    :success="success"
    v-on:keyup.enter="onKeyUpEnter"
    @keyup="onKeyUp"
    @keyup.enter="onEnter"
    validate-on-blur
    aria-autocomplete="false"
    autocomplete="off"
    required
  >
    <template v-slot:prepend-inner>
      <v-icon class="material-icons-outlined mr-2" dense>{{ icon }}</v-icon>
    </template>
  </v-text-field>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    label: { required: true },
    value: { default: '' },
    disabled: { default: false },
    counter: { default: null },
    rules: { default: Array },
    id: { default: null },
    placeholder: { default: '' },
    type: { default: null },
    icon: { default: null },
    success: { default: null }
  },
  data: () => ({
    valueModel: ''
  }),
  mounted () {
    this.valueModel = this.value
  },
  watch: {
    value (newValue) {
      this.valueModel = newValue
    }
  },
  methods: {
    onEnter () {
      this.$emit('onEnter')
    },
    onKeyUp () {
      this.$emit('onKeyUp', this.valueModel, this.id)
    },
    onKeyUpEnter () {
      this.$emit('onKeyUpEnter', this.valueModel, this.id)
    }
  }
}
</script>