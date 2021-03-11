<template>
  <div class="app-breadcrumb">
    <v-breadcrumbs :items="items" large class="px-0 py-0">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
// Styles
import './Breadcrumb.scss'

export default {
  name: 'Breadcrumb',
  props: {
    items: {
      default: Array
    }
  }
}
</script>