import Vue from 'vue'
import Vuex from 'vuex'
import BarberStore from '@/store/modules/BarberStore'
import BarbershopStore from '@/store/modules/BarbershopStore'
import SnackbarStore from '@/store/modules/SnackbarStore'
import LoaderStore from '@/store/modules/LoaderStore'
import MenuStore from '@/store/modules/MenuStore'
import NotificationStore from '@/store/modules/NotificationStore'
import UserStore from '@/store/modules/UserStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    BarberStore,
    BarbershopStore,
    LoaderStore,
    MenuStore,
    NotificationStore,
    SnackbarStore,
    UserStore
  }
})
