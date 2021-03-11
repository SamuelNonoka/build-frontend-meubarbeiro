<template>
  <div class="primaryDark d-flex justify-center align-center not-found">
    <span>
      Página não encontrada :(
    </span>
    <div>
      <btn-confirm
        class="mt-6"
        text="Voltar para a página inicial"
        @clicked="goTo('home')"
      />
    </div>
  </div>
</template>

<script>
import BtnConfirm from '@/components/globais/buttons/confirm/BtnConfirm'
import NavigationMixin from '@/mixins/NavigationMixin'
export default {
  name: 'NotFound',
  components: { BtnConfirm },
  mixins: [ NavigationMixin ]
}
</script>

<style lang="scss" scoped>
.not-found { height: 100vh; flex-direction: column;
  span { color: #fff; font-size: 2rem; }
}
</style>