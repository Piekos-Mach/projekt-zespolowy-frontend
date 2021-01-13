import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    JWToken: undefined,
    user: undefined
  },
  getters: {
    getJWToken: state => {
      return state.JWToken
    },
    getUser: state => state.user
  },
  mutations: {
    setJWToken: (state, token) => state.JWToken = token,
    setUser: (state, user) => state.user = user,
    logout: state => {
      state.user = undefined
      state.JWToken = undefined
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({ storage: sessionStorage})
  ]
})
