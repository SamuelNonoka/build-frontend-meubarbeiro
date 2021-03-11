const state = {
  drawer: localStorage.getItem('drawer') ?  localStorage.getItem('drawer') : true
}

// getters
const getters = {
  getDrawer: state => {
    return state.drawer
  }
}

// actions
const actions = {
  setDrawer ({ commit }, data) {
    localStorage.setItem('drawer',data)
    commit('setDrawer', data)
  }
}

// mutations
const mutations = {
  setDrawer (state, data) {
    state.drawer = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
