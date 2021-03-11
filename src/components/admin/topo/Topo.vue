<template>
  <v-app-bar
    id="topo"
    clipped-left
    app
    color="primary"
    dark
  >
    <v-btn text @click="toggleMenu()">
      <v-icon>
        menu
      </v-icon> 
    </v-btn>

    <v-toolbar-title class="ml-4">
      {{ title }}
      <small class="d-none d-md-inline barbershopname ml-2">
        {{barberName() }}
      </small>
    </v-toolbar-title>
    
    <v-spacer></v-spacer>
     
    <v-badge
      color="primaryLight"
      :content="notificationItems"
      :value="notificationItems > 0"
      overlap
    >
      <div class="notification-icon" @click="goTo('admin-approval')">
        <v-icon class="d-inline">
          notifications
        </v-icon>
      </div>
    </v-badge>

    <v-divider
      inset
      class="mt-2 mr-6 ml-6 mb-4 d-none d-md-inline"
      vertical
    ></v-divider>
      
    <v-menu
      class="btn-avatar"
      transition="slide-y-transition"
      bottom
    >
      <template v-slot:activator="{ on }">
        <div
          class="btn-avatar"
          dark
          v-on="on"
        >
          <v-avatar
            v-if="avatar"
            size="32px"
            item
          >
            <v-img
              :src="avatar"
              alt="Vuetify"
            >
            </v-img>
          </v-avatar>

          <v-icon v-if="!avatar" class="d-none d-md-inline">
            account_circle
          </v-icon>

          <span class="ml-2 d-none d-md-inline">
            {{ getBarber().name }}
          </span>

          <v-icon class="ml-2 d-none d-md-inline">
            keyboard_arrow_down
          </v-icon>

          <v-icon class="ml-2 d-inline d-sm-inline d-md-none">
            more_vert
          </v-icon>
        </div>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="clickMenu(item)"
        >
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import Axios from "@/plugins/axios"
// Modules
import '@/components/admin/topo/Topo.scss'
// Mixins
import BarberMixin from '@/mixins/BarberMixin'
import BarbershopMixin from '@/mixins/BarbershopMixin'
import NavigationMixin from '@/mixins/NavigationMixin'

export default {
  name: 'Topo',
  mixins: [ BarberMixin, BarbershopMixin, NavigationMixin ],
  props: {
    title: {
      default: 'Meu Barbeiro'
    },
  },
  data: () => ({
    items: [
      { title: 'Meus Dados', alias: 'admin-profile' },
      { title: 'Sair', alias: 'logout' }
    ],
    avatar: null
  }),
  computed: {
    notificationItems: {
      set () {},
      get () {
        return this.$store.getters['NotificationStore/getNotification']
      }
    }
  },
  mounted () {
    this.barbershop = this.getBarbershop()
    this.avatar = this.getBarber().avatar

    this.getSchedules()
      setTimeout(() => {
        this.getSchedules()
      }, 60000)
  },
  methods: {
    barberName () {
      if (this.barbershop) return this.barbershop.name
      return ''
    },
    getSchedules () {
      Axios.get(`/schedule/barbershop/${this.barber.barbershop_id}/pending`)
      .then(response => {
        if (response.data.codigo === 200) {
          let items = response.data.corpo.length
          this.$store.dispatch('NotificationStore/setNotification', items)
        } else window.console.log(response.data.corpo)
      })
      .catch ((err) => { window.console.log(err) })
    },
    toggleMenu () {
      this.$emit('toggleMenu')
    },
    clickMenu (item) {
      if (item.alias === 'logout') this.logout()
      else this.goTo(item.alias)
    }
  }
}
</script>