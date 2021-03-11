<template>
  <v-select
    v-model="valueModel"
    :label="label"
    :disabled="disabled"
    :items="items"
    item-text="text"
    item-value="value"
    :rules="rules"
    @change="onChange"
    validate-on-blur
    required
  ></v-select>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    id: {
      default: null
    },
    label: {
      default: null
    },
    value: {
      default: ''
    },
    disabled: {
      default: false
    },
    required: {
      default: false
    },
    icon: {
      default: null
    },
    items: {
      default: Array
    },
    rules: {
      default: Array
    }
  },
  data: () => ({
    valueModel: ''
  }),
  watch: {
    value (newValue) {
      this.valueModel = newValue
      this.onChange()
    }
  },
  mounted () {
    this.valueModel = this.value
  },
  methods: {
    onChange () {
      this.$emit('onChange', this.valueModel, this.id)
    }
  }
}
</script>