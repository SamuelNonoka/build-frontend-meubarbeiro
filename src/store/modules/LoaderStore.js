const state = {
  loading: false
}

const getters = {
  isLoading: state => {
    return state.loading
  }
}

const actions = {
  setLoader ({ commit }, loading) {
    commit('setLoader', loading)
  }
}

const mutations = {
  setLoader (state, loading) {
    state.loading = loading
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}