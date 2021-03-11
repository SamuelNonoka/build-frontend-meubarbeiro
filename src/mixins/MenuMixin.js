const MenuMixin = {
  methods: {
    setDrawer (drawer) {
      window.console.log('setDrawer: ' + drawer)
      this.$store.dispatch('MenuStore/setDrawer', drawer)
    },
    getDrawer () {
      let drawer = this.$store.getters['MenuStore/getDrawer']
      return drawer === 'true'
    }
  }
}

export default MenuMixin
