<template>
  <div class="uk-alert-success uk-border-rounded" uk-alert>
    <a
      class="uk-alert-close"
      uk-close></a>
    <p>{{ mensagem }}</p>
  </div>
</template>

<script>
export default {
  name: 'AlertSucesso',
  props: {
    mensagem: {
      required: true
    }
  }
}
</script>