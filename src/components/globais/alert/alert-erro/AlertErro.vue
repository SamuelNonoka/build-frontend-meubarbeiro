<template>
  <div class="uk-alert-danger uk-border-rounded" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p>{{ mensagem }}</p>
  </div>
</template>

<script>
export default {
  name: 'AlertErro',
  props: {
    mensagem: {
      required: true
    }
  }
}
</script>