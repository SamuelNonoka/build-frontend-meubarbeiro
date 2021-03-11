<template>
  <div class="autenticacao">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Base'
}
</script>

<style scoped>
.autenticacao {
  min-height: 100vh;
  background-position: center;
  background-image: url(/fundo_autenticacao.png);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>