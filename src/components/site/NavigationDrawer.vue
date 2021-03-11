<template>
  <v-navigation-drawer
    id="menu-lateral"
    color="primaryDark"
    class="fullDrawer open"
    v-model="drawer"
    absolute
    temporary
    app
  >
    <v-list dense>
      <template v-for="item in items">
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
      <v-divider color="white" class="my-1 mx-2"></v-divider>
      <v-list-item
        class="btn-lateral"
        :class="isActive('dashboard')"
        key="barberiros"
        @click="goTo('admin')"
        rounded
        dark
      >
        <v-list-item-action>
          <v-icon>east</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            Para barbeiros
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Mixins
import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'NavigationDrawer',
  mixins: [ NavigationMixin ],
  props: {
    alias: {
      default: ''
    }
  },
  data: () => ({
    drawer: false,
    items: [
      { icon: 'home', text: 'Página Inicial', routeName: 'home', alias: 'dashboard' },
      { icon: 'calendar_today', text: 'Meus Agendamentos', routeName: 'site-schedule', alias: 'schedule' }
    ]
  }),
  methods: {
    isActive (itemAlias) {
      return this.alias === itemAlias ? 'active' : ''
    },
    toggleNavigationDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>