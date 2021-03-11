const state = {
  barbershop: localStorage.getItem('barbershop') !== 'undefined' ? JSON.parse(localStorage.getItem('barbershop')) : null
}

// getters
const getters = {
  barbershop: (state) => {
    return state.barbershop
  }
}

// actions
const actions = {
  store ({commit, dispatch}, data) {
    dispatch('clearDataSession')
    commit('store', data)
    localStorage.setItem('barbershop', JSON.stringify(state.barber))
  },
  clearDataSession ({commit}) {
    localStorage.removeItem('barbershop')
    localStorage.removeItem('routePath')
    commit('clearDataSession')
  },
  logout ({dispatch}) {
    dispatch('clearDataSession')
  }
}

// mutations
const mutations = {
  clearDataSession (state) {
    state.barbershop = null
  },
  store (state, data) {
    state.barbershop = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
