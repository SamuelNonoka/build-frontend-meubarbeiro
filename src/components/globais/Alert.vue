<template>
  <div class="alert">
    <v-icon v-if="icon" class="alert-icon">
      {{ icon }}
    </v-icon>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    icon: { default: 'warning' }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  max-width: calc(100% - 30px);
  width: 500px;
  background: #DCB975;
  padding: 40px;
  position: relative;

  .alert-icon {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
