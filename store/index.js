import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      authUser: null
    },
    getters: auth.getters,
    actions: auth.actions,
    mutations: auth.mutations
    // modules: {
    //   auth
    // }
  })
}

export default createStore
