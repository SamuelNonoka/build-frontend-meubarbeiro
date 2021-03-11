import Axios from '@/plugins/axios'

const BarbershopServiceMixin = {
  methods: {
    // Busca pelo Id
    getServicesByBarbershopId (barbershopId) {
      Axios.get(`/service/barbershop/${barbershopId}`)
      .then(response => {
        if (response.data.codigo === 200)
          this.onGetServicesByBarbershopIdSuccess(response.data.corpo)
        else this.onGetServicesByBarbershopIdError(response.data.corpo)
      })
      .catch ((err) => {
        this.onGetServicesByBarbershopIdError('Não foi possível recuperar os serviços da barbearia!')
        window.console.log(err)
      })
    },
    onGetServicesByBarbershopIdSuccess (response) {
      window.console.log(`onGetServicesByBarbershopIdSuccess: ${response}`)
    },
    onGetServicesByBarbershopIdError (error) {
      window.console.log(`onGetServicesByBarbershopIdError: ${error}`)
    },
    // Salva um serviço
    storeService (service) {
      Axios.post(`/service`, service)
      .then(response => {
        if (response.data.codigo === 200)
          this.onStoreServiceSuccess(response.data.corpo)
        else this.onStoreServiceError(response.data.corpo)
      })
      .catch ((err) => {
        this.onStoreServiceError('Não foi possível salvar o serviço!')
        window.console.log(err)
      })
    },
    onStoreServiceSuccess (response) {
      window.console.log(`onStoreServiceSuccess: ${response}`)
    },
    onStoreServiceError (error) {
      window.console.log(`onStoreServiceError: ${error}`)
    },
    // Atualiza um serviço
    updateService (service, id) {
      Axios.put(`/service/${id}`, service)
      .then(response => {
        if (response.data.codigo === 200)
          this.onUpdateServiceSuccess(response.data.corpo)
        else this.onUpdateServiceError(response.data.corpo)
      })
      .catch ((err) => {
        this.onUpdateServiceError('Não foi possível salvar o serviço!')
        window.console.log(err)
      })
    },
    onUpdateServiceSuccess (response) {
      window.console.log(`onUpdateServiceSuccess: ${response}`)
    },
    onUpdateServiceError (error) {
      window.console.log(`onUpdateServiceError: ${error}`)
    },
    // Remove um serviço
    destroyService (id) {
      Axios.delete(`/service/${id}`)
      .then(response => {
        if (response.data.codigo === 200)
          this.onDestroyServiceSuccess(response.data.corpo)
        else this.onDestroyServiceError(response.data.corpo)
      })
      .catch ((err) => {
        this.onDestroyServiceError('Não foi possível remover o serviço!')
        window.console.log(err)
      })
    },
    onDestroyServiceSuccess (response) {
      window.console.log(`onDestroyServiceSuccess: ${response}`)
    },
    onDestroyServiceError (error) {
      window.console.log(`onDestroyServiceError: ${error}`)
    }
  }
}

export default BarbershopServiceMixin