<template>
  <v-navigation-drawer
    id="menu-lateral"
    color="primaryDark"
    :class="fullDrawer ? 'open' : ''"
    v-model="drawer"
    clipped
    :permanent="isPermanent"
    fixed
    app
  >
    <v-list dense>
      <template v-for="item in itemsMenu">
        <v-list-item
          class="btn-lateral my-1"
          :class="isActive(item.alias)"
          :key="item.text"
          @click="goTo(item.routeName)"
          rounded
          dark
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import './NavigationDrawer.scss'
import BarberMixin from '@/mixins/BarberMixin'
import BarbershopMixin from '@/mixins/BarbershopMixin'
import MenuMixin from '@/mixins/MenuMixin'
import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'NavigationDrawer',
  mixins: [ BarberMixin, BarbershopMixin, MenuMixin, NavigationMixin ],
  props: {
    alias: { default: '' }
  },
  data: () => ({
    isPermanent: true,
    drawer: false,
    fullDrawer: false
  }),
  computed: {
    itemsMenu () {
      let items = [{ icon: 'dashboard', text: 'Dashboard', routeName: 'admin-dashboard', alias: 'dashboard' }]

      if (this.barber.admin_id)
        items.push({ icon: 'pending_actions', text: 'Aguardando', routeName: 'admin-approval', alias: 'approval' })

      if (this.isAdmin) {
        items.push({ icon: 'people_alt', text: 'Barbeiros', routeName: 'admin-barber', alias: 'barber' })
        items.push({ icon: 'miscellaneous_services', text: 'Configurações', routeName: 'admin-barbershop', alias: 'barbershop' })
        items.push({ icon: 'build', text: 'Preços e Serviços', routeName: 'admin-service', alias: 'service' })
        // items.push({ icon: 'attach_money', text: 'Planos', routeName: 'admin-plans', alias: 'plans' })
      }

      items.push({ icon: 'help', text: 'Ajuda', routeName: 'admin-help', alias: 'help' })
      return items
    },
    isAdmin () {
      if (this.barber && this.barbershop) {
        if (this.barber.id === this.barbershop.admin_id) return true
      }
      return false
    }
  },
  mounted () {
    this.fullDrawer = this.getDrawer()
    this.isPermanent = window.innerWidth > 959 ? true : false
  },
  methods: {
    isActive (itemAlias) {
      return this.alias === itemAlias ? 'active' : ''
    },
    toggleNavigationDrawer () {
      this.drawer = !this.drawer
      this.fullDrawer = !this.fullDrawer
      this.setDrawer(this.fullDrawer)
    }
  }
}
</script>

<style scoped>
#menu-lateral { padding: 0 20px; }
#menu-lateral .app-logo { margin: 30px auto; max-width: 100%; display: block; }
</style>