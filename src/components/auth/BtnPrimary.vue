<template>
  <v-btn
    class="btn-primary accent text-none"
    height="auto"
    dark
    @click="clicked"
  >
    <template v-if="loading">
      <v-progress-circular
        indeterminate
        width="2"
        color="primaryDark"
        small
      ></v-progress-circular>
    </template>
    <template v-else>
      {{ text }}
    </template>
  </v-btn>
</template>

<script>
export default {
  name: 'BtnPrimary',
  props: {
    loading: { default: false },
    text: { required: true }
  },
  methods: {
    clicked () {
      this.$emit('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-primary {
  color: #000 !important;
  border-radius: 30px;
  padding: 0 60px !important;
  height: 60px !important;
}
</style>