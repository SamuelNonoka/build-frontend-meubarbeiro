import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import Axios from './plugins/axios'
import router from './routes'
import vuetify from './plugins/vuetify'
import store from './store'
import VueCarousel from 'vue-carousel'
import VueTheMask from 'vue-the-mask'
//import './registerServiceWorker'

Vue.use(VueCarousel)
Vue.use(VueTheMask)

// Propotype
Vue.prototype.$axios = Axios
// Vue.prototype.$url_backend = 'http://localhost:8000'
// Vue.prototype.$url_api = 'http://localhost:8000/api'
Vue.prototype.$url_backend = 'https://api.appmeubarbeiro.com.br'
Vue.prototype.$url_api = 'https://api.appmeubarbeiro.com.br/api'

Vue.prototype.$SCHEDULE_STATUS = {
  APROVADO: 1,
  CANCELADO: 2,
  AGUARDANDO: 3,
  REPROVADO: 4
}

Vue.prototype.$BARBER_STATUS = {
  AGUARDANDO: 1,
  ATIVO: 2,
  BLOQUEADO: 3
}

Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
