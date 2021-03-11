const state = {
  notification: localStorage.getItem('barber') ?  localStorage.getItem(`${JSON.parse(localStorage.getItem('barber')).id}-notification`) : 0
}

// getters
const getters = {
  getNotification: state => {
    return state.notification
  }
}

// actions
const actions = {
  setNotification ({ commit }, data) {
    localStorage[`${JSON.parse(localStorage.getItem('barber')).id}-notification`] = data
    commit('setNotification', data)
  }
}

// mutations
const mutations = {
  setNotification (state, data) {
    state.notification = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
