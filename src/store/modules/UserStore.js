const state = {
  user: localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,
  userToken: localStorage.getItem('userToken') ? localStorage.getItem('userToken') : null
}

// getters
const getters = {
  user: (state) => {
    return state.user
  },
  tokenValido: (state, getters) => {
    if (getters.payloadToken) {
      if (getters.payloadToken.data_expiracao) {
        // verifica se o token ainda está na validade
        let date = Math.floor(Date.now() / 1000)
        let expDate = Math.floor(new Date(getters.payloadToken.data_expiracao) / 1000)
        if (expDate > date) return true
      }
    }
    return false
  },
  payloadToken: state => {
    if (state.userToken) {
      let partesToken = state.userToken.split('.')

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
    localStorage.removeItem('userToken')
    localStorage.removeItem('user')
    localStorage.removeItem('routePath')
    commit('limparSessao')
  },
  gravarDadosAutenticacaoSessao ({state}) {
    localStorage.setItem('user', JSON.stringify(state.user))
    localStorage.setItem('userToken', state.userToken)
  },
  logout ({dispatch}) {
    dispatch('limparDadosSessao')
  }
}

// mutations
const mutations = {
  limparSessao (state) {
    state.user = null
    state.userToken = null
  },
  gravarDadosAutenticacao (state, token) {
    state.userToken = token
    let user
    let partesToken = state.userToken.split('.')

    if (partesToken.length === 3) {
      try {
        user = JSON.parse(atob(partesToken[1])).usuario
      } catch (e) {
        user = null
      }
    }

    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
