<template>
  <div class="info-cadastro">
        <div class="text-right">
          <v-icon>check</v-icon>
        </div>
        <div class="conteudo">
          <slot></slot>
        </div>
      </div>
</template>

<script>
export default {
  name: 'AlertSuccess'
}
</script>

<style scoped>
.info-cadastro { 
  position: relative;
  text-align: left;
  padding: 16px;
  border-radius: 5px;
  font-size: 1.2rem;
  max-width: calc(100% - 16px);
  margin: auto;
}
.info-cadastro:before {
  background: #dcb975cc;
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.info-cadastro .conteudo { padding: 10px 20px 20px 30px; position: relative; color: #4F4F4F im !important; }
</style>