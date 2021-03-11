<template>
  <v-row>
    <v-col cols="auto" class="py-0">
      <div class="barber-item-image">
        <v-img
          v-if="barber.image_url"
          :src="`${$url_backend}${barber.image_url}`"
          :lazy-src="`${$url_backend}${barber.image_url}`"
          aspect-ratio="1"
          class="grey lighten-2"
        ></v-img>
      </div>
    </v-col>
    <v-col class="py-0 d-flex align-center">
      <span class="font-weight-bold">
        {{ barber.name }}
      </span>

      <v-checkbox
        class="mt-2 d-sm-none"
        v-model="choosed"
      ></v-checkbox>
    </v-col>
    <v-col cols="auto" class="d-none d-sm-flex">
      <v-checkbox
        class="mt-2"
        v-model="choosed"
      ></v-checkbox>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'RegisterScheduleStepBarberItem',
  props: {
    barber: { required: true }
  },
  computed: {
    choosed: {
      set (newValue) {
        this.barber.choosed = newValue
        this.$emit('toggle', this.barber)
      },
      get () {
        return this.barber.choosed
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.barber-item-image {
  @include border-radius-mixin (50%);
  overflow: hidden;
  width: 60px;
  background: #ccc;
  height: 60px;
  overflow: hidden;
}
 
@media all and (max-width: 600px) {
  .barber-item-image { width: 45px; height: 45px; }
}
</style>