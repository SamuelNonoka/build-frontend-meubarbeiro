<template>
  <admin-template
    :pageName="pageName"
    :alias="alias"
    :breadcrumbs="breadcrumb"
    :cssClass="cssClass"
  >
    <router-view></router-view>
  </admin-template>
</template>

<script>
import AdminTemplate from '@/components/admin/template/Template'
export default {
  name: 'Admin',
  components: { AdminTemplate },
  data: () => ({
    alias: null,
    pageName: null,
    breadcrumb: null,
    cssClass: null
  }),
  mounted () {
    this.configTemplate()
  },
  updated () {
    this.configTemplate()
  },
  methods: {
    configTemplate () {
      this.alias = this.$route.meta.alias || ''
      this.pageName = this.$route.meta.pageName
      this.breadcrumb = this.$route.meta.breadcrumb || null
      this.cssClass = this.$route.meta.css || ''
    }
  }
}
</script>