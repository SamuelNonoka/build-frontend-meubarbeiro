<template>
  <v-app id="admin-template">
    <navigation-drawer
      ref="navigationDrawer"
      :alias="alias"
    />
    
    <topo
      :title="pageName"
      @toggleMenu="toggleMenu"
    />
    
    <v-content
      v-if="isPermissionAdmin"
      class="background main"
    >
      <v-container
        class="container"
        :class="cssClass"
        fluid
      >
        <div class="conteudo">
          <breadcrumb
            v-if="breadcrumbs"
            :items="breadcrumbs"
            class="mb-4 mt-0 py-0 d-none d-md-block" 
          />
          <v-row
            v-if="btnRegister"
            class="admin-register-content d-flex-center"
          >
            <v-spacer></v-spacer>
            <v-col cols="auto" class="align-self-center">
              <btn-secondary
                text="cadastrar barbearia"
                icon="add"
                class="btn-register"
                @clicked="registerBarbershop"
              />
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <slot v-if="content"></slot>
        </div>
      </v-container>
    </v-content>

    <register-barbershop-dialog ref="registerBarbershopDialog" />

    <app-footer
      class="app-footer"
      :items="footerItems" 
      @clicked="changePage"
      :bottomNav="alias"
    />
  </v-app>
</template>

<script>
// Modules
import './Template.scss'
import Axios from "@/plugins/axios"
// Components
import AppFooter from '@/components/admin/footer/Footer'
import Breadcrumb from '@/components/globais/breadcrumb/Breadcrumb'
import BtnSecondary from '@/components/globais/buttons/secondary/BtnSecondary'
import NavigationDrawer from '@/components/admin/navigation-drawer/NavigationDrawer'
import RegisterBarbershopDialog from '@/components/admin/barbershop/RegisterBarbershopDialog'
import Topo from '@/components/admin/topo/Topo'
// Mixins
import BarberMixin from '@/mixins/BarberMixin'
import BarbershopMixin from '@/mixins/BarbershopMixin'
import NavigationMixin from '@/mixins/NavigationMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'

export default {
  name: 'Template',
  mixins: [ BarberMixin, BarbershopMixin, NavigationMixin, SnackbarMixin ],
  components: { AppFooter, Breadcrumb, BtnSecondary, NavigationDrawer, RegisterBarbershopDialog, Topo },
  props: {
    alias: { default: '' },
    breadcrumbs: { default: Array },
    btnRegister: { default: false },
    cssClass: { default: 'px-4 px-sm-8' },
    pageName: { default: 'Meu Barbeiro' },
    content: { default: true }
  },
  data: () => ({
    footerItems: [
      { title: 'Dashboard', icon: 'home', value: 'dashboard', route: 'admin-dashboard' },
      { title: 'Minha Agenda', icon: 'calendar_today', value: 'schedule', route: 'admin-schedule' },
      { title: 'Perfil', icon: 'person', value: 'profile', route: 'admin-profile' }
    ],
    requiresAdmin: false
  }),
  computed: {
    menuOpen () {
      return this.getDrawer()
    },
    isAdmin () {
      if (this.barber && this.barbershop) {
        if (this.barber.id === this.barbershop.admin_id) return true
      }
      return false
    },
    isPermissionAdmin () {
      return !this.requiresAdmin || this.isAdmin
    }
  },
  created () {
    this.requiresAdmin = this.$route.meta.requiresAdmin
  },
  updated () {
    this.requiresAdmin = this.$route.meta.requiresAdmin
  },
  mounted () {
    let barber = this.getBarber()
    if (!this.isAutenticated()) {
      this.showSnackbarErro('Usuário não autenticado!')
      this.logout()
    }
    if (barber.barbershop_id) this.getBarberShopService()
  },
  methods: {
    getBarberShopService () {
      Axios.get('/barbershop/' + this.barber.barbershop_id)
      .then(response => {
        if (response.data.codigo === 200) {
          let barbershop = response.data.corpo
          this.storeBarbershop(barbershop)
        } else this.setError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.setError('Não foi possível recuperar os dados da barbearia!')
      })
    },
    toggleMenu () {
      this.$refs.navigationDrawer.toggleNavigationDrawer()
    },
    changePage (item) {
      this.goTo(item.route)
    },
    registerBarbershop () {
      this.$refs.registerBarbershopDialog.showDialog()
    },
    setError (text) {
      this.showSnackbarErro(text)
    }
  }
}
</script>