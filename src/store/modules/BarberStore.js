const state = {
  barber: localStorage.getItem('barber') !== 'undefined' ? JSON.parse(localStorage.getItem('barber')) : null,
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null
}

// getters
const getters = {
  barber: (state) => {
    return state.barber
  },
  tokenValido: (state, getters) => {
    if (getters.payloadToken) {
      if (getters.payloadToken.data_expiracao) {
        // verifica se o token ainda está na validade
        let date = Math.floor(Date.now() / 1000)
        let expDate = Math.floor(new Date(getters.payloadToken.data_expiracao) / 1000)
        if (expDate > date) {
          return true
        }
      }
    }
    return false
  },
  payloadToken: state => {
    if (state.token) {
      let partesToken = state.token.split('.')

      if (partesToken.length === 3) {
        try {
          return JSON.parse(atob(partesToken[1]))
        } catch (e) {
          return null
        }
      }
    }
    return null
  }
}

// actions
const actions = {
  autenticar ({commit, dispatch}, token) {
    dispatch('limparDadosSessao')
    commit('gravarDadosAutenticacao', token)
    dispatch('gravarDadosAutenticacaoSessao')
  },
  limparDadosSessao ({commit}) {
    localStorage.removeItem('token')
    localStorage.removeItem('barber')
    localStorage.removeItem('barbershop')
    localStorage.removeItem('routePath')
    commit('limparSessao')
  },
  gravarDadosAutenticacaoSessao ({state}) {
    localStorage.setItem('barber', JSON.stringify(state.barber))
    localStorage.setItem('token', state.token)
  },
  logout ({dispatch}) {
    dispatch('limparDadosSessao')
  }
}

// mutations
const mutations = {
  limparSessao (state) {
    state.barber = null
    state.token = null
  },
  gravarDadosAutenticacao (state, token) {
    state.token = token
    let barber
    let partesToken = state.token.split('.')

    if (partesToken.length === 3) {
      try {
        barber = JSON.parse(atob(partesToken[1])).usuario
      } catch (e) {
        barber = null
      }
    }

    state.barber = barber
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
