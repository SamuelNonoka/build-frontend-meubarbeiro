<template>
  <div class="loader primary">
    <v-progress-circular
      class="progress-circular"
      :size="50"
      color="accent"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
import './Progress.scss'

export default {
  name: 'Progress'
}
</script>