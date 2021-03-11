<template>
  <v-card>
    <p
      v-if="title"
      class="title card-title pa-2 pb-0 mb-0"
    >
      <v-icon
        v-if="icon"
        class="mb-1"
        :color="iconClass"
      >
        {{ icon}}
      </v-icon> {{ title }}
    </p>

    <div class="pa-4" :class="cssClass">
      <slot></slot>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { default: null },
    icon: { default: null },
    iconClass: { default: 'secondary' },
    cssClass: { default: '' }
  }
}
</script>