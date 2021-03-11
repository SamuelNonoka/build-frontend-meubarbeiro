<template>
  <div class="offline">
    <p>
      Você está offline, conecte-se a internet.
    </p>
    <v-btn
      dark
      class="py-3 px-6 primaryDark"
      height="auto"
      @click="goTo('home')"
    >
      <v-icon class="mr-2">autorenew</v-icon> Tentar Novamente
    </v-btn>
  </div>
</template>

<script>
import NavigationMixin from '@/mixins/NavigationMixin'
export default {
  name: 'Offline',
  mixins: [ NavigationMixin ]
}
</script>

<style lang="scss" scoped>
.offline {
  height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p { color: #fff; font-weight: 400; }
</style>