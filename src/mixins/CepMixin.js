import Axios from '@/plugins/axios'

const CepMixin = {
  methods: {
    getCepApi (cep) {
      window.console.log('getCepApi: ' + cep)
      cep = cep.split('-').join('')
      cep = cep.split('.').join('')
      let url = `cep/${cep}`
      Axios.get(url)
      .then(response => {
        if (response.data.codigo === 200) {
          this.onGetCepApiSuccess(response.data.corpo)
        } else this.onGetCepApiError(response.data.corpo)
      })
      .catch ((err) => {
        window.console.log(err)
        this.onGetCepApiError('Não foi possível recuperar as informações do Cep!')
      })
    },
    onGetCepApiError (err) { window.console.log(err) },
    onGetCepApiSuccess (response) { window.console.log(response) }
  }
}

export default CepMixin