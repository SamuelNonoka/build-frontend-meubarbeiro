import Axios from '@/plugins/axios'

const BarbershopMixin = {
  computed: {
    barbershop: {
      set () {},
      get () {
        return this.$store.getters['BarbershopStore/barbershop']
      }
    }
  },
  methods: {
    storeBarbershop (barbershop) {
      this.$store.dispatch('BarbershopStore/store', barbershop)
    },
    getBarbershop () {
      return this.$store.getters['BarbershopStore/barbershop']
    },
    getBarbershopByIdOnService (id) {
      Axios.get(`/barbershop/${id}`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.onGetBarbershopByIdOnServiceSuccess(response.data.corpo)
        } else this.onGetBarbershopByIdOnServiceError(response.data.corpo)
      })
      .catch ((err) => {
        this.onGetBarbershopByIdOnServiceError('Não foi possível recuperar os dados da barbearia!')
        window.console.log(err)
      })
    },
    onGetBarbershopByIdOnServiceSuccess (response) {
      window.console.log('onGetBarbershopByIdOnServiceSuccess: ' + response)
    },
    onGetBarbershopByIdOnServiceError (msg) {
      window.console.log('onGetBarbershopByIdOnServiceError: ' + msg)
    },
    getBarbershopAllOnService () {
      Axios.get(`/barbershop`)
      .then(response => {
        if (response.data.codigo === 200) {
          this.onGetBarbershopAllOnServiceSuccess(response.data.corpo)
        } else this.onGetBarbershopAllOnServiceError(response.data.corpo)
      })
      .catch ((err) => {
        this.onGetBarbershopAllOnServiceError('Não foi possível recuperar os dados da barbearia!')
        window.console.log(err)
      })
    },
    onGetBarbershopAllOnServiceSuccess (response) {
      window.console.log('onGetBarbershopAllOnServiceSuccess: ' + response)
    },
    onGetBarbershopAllOnServiceError (msg) {
      window.console.log('onGetBarbershopAllOnServiceError: ' + msg)
    },
    updateBarbershopOnService (data, id) {
      let url = `barbershop/${id}`
      Axios.put(url, data)
      .then(response => {
        if (response.data.codigo === 200)
          this.onUpdateBarbershopOnServiceSuccess(response.data.corpo)
        else 
          this.onUpdateBarbershopOnServiceError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.onUpdateBarbershopOnServiceError('Não foi possível atualizar os dados da barbearia!')
      })
    },
    onUpdateBarbershopOnServiceSuccess (response) {
      window.console.log('onUpdateBarbershopOnServiceSuccess: ' + response)
    },
    onUpdateBarbershopOnServiceError (msg) {
      window.console.log('onUpdateBarbershopOnServiceError: ' + msg)
    },
  }
}

export default BarbershopMixin