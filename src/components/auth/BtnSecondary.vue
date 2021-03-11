<template>
  <v-btn
    class="btn-secondary accent text-none"
    height="auto"
    dark
    @click="clicked"
  >
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  name: 'BtnSecondary',
  props: {
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
.btn-secondary {
  color: #000 !important;
  border-radius: 30px;
  padding: 0 30px !important;
  height: 40px !important;
}
</style>