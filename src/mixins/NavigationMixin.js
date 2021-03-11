const NavigationMixin = {
  methods: {
    goTo (routeName, routeParams = null) {
      let oldRouteName = this.$route.name
      if (routeName != oldRouteName) {
        if (routeParams) this.$router.push({ name: routeName, params: routeParams })
        else this.$router.push({ name: routeName })
      }
    },
    goToPath (routePath) {
      this.$router.push({ path: routePath })
    },
    goToBack () {
      this.$router.go(-1)
    }
  }
}

export default NavigationMixin