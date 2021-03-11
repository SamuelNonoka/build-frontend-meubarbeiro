<template>
  <span class="app-error-span">
    {{ text }}
  </span>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: {
    text: {
      default: 'Preencha este campo corretamente'
    }
  }
}
</script>