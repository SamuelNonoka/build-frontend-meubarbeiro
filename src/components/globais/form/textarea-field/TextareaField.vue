<template>
  <v-textarea
    v-model="valueModel"
    :auto-grow="true"
    rows="1"
    :label="label"
    color="success"
    :success="success"
    @keyup="onKeyUp"
    validate-on-blur
  >
    <template v-slot:prepend-inner>
      <v-icon class="material-icons-outlined mr-2" dense>{{ icon }}</v-icon>
    </template>
  </v-textarea>
</template>

<script>
export default {
  name: 'TextareaField',
  props: {
    label: {
      required: true
    },
    value: {
      default: ''
    },
    id: {
      default: null
    },
    success: {
      default: null
    },
    icon: {
      default: null
    }
  },
  data: () => ({
    valueModel: ''
  }),
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