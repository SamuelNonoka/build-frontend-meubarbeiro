<template>
  <site-template>
    <router-view></router-view>
  </site-template>
</template>

<script>
import SiteTemplate from '@/components/site/Template'

export default {
  name: 'home',
  components: { SiteTemplate }
}
</script>