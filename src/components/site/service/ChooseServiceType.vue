<template>
  <div class="choose-type">
    <v-chip
      :key="index"
      v-for="(serviceType, index) in servicesTypes"
      class="ma-2 mt-4"
      :class="{ secondary: value == serviceType.id, active: value == serviceType.id }"
      small
      @click="change(serviceType.id)"
    >
      {{ serviceType.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'ChooseServiceType',
  data: () => ({
    value: null,
    servicesTypes: [
      { id: null, name: 'Todos' },
      { id: 2, name: 'Barba' },
      { id: 1, name: 'Cabelo' },
      { id: 3, name: 'Combo' }
    ]
  }),
  methods: {
    change (id) {
      this.value = id
      this.$emit('change', id)
    }
  }
}
</script>

<style lang="scss" scoped>
.choose-type {
  .v-chip {
    &.active { color: #000 !important; }
  }
}
</style>