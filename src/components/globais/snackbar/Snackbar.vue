<template>
  <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :color="type"
      light
      :multi-line="true"
      class="ma-2 snackbar"
      :class="'snackbar-' + type"
      right 
      top
    >
      {{ text }}
      <v-btn
        text
        @click="close()"
      >
        <v-icon>close</v-icon> 
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Snackbar',
  computed: {
    snackbar: {
      get () {
        return this.$store.getters['SnackbarStore/snackbar']
      },
      set () {
        this.close()
      }  
    },
    text () {
      return this.$store.getters['SnackbarStore/text']
    },
    type () {
      return this.$store.getters['SnackbarStore/type']
    }
  },
  methods: {
    close () {
      this.$store.dispatch('SnackbarStore/hideSnackbar').then(() => {})
    }
  }
}
</script>

<style lang="scss">
.snackbar-accent {
  .v-snack__content,
  .v-snack__content .v-btn--text {
    color: #242424 !important;
  }
}
</style>