import * as types from './mutation-type'
import axios from 'axios'
import { setToken, unsetToken } from '~/utils/auth'

/* eslint-disable*/
export default {
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit, state }, credential) {
    try {
      const { data } = await axios.post(`http://localhost:3001/api/users/login?include=user`, credential)
      commit(types.SET_USER, data)
      setToken(data)
      window.$nuxt.$router.replace({ path: '/' })
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }

  },
  async register ({ commit, state }, user) {
    try {
      const { data } = await axios.post(`http://localhost:3001/api/users`, user)
      window.$nuxt.$router.replace({ path: '/auth/login' })
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }

  },
  async logout({ commit, state }) {
   await axios.post('http://localhost:3001/api/users/logout?access_token='+ state.authUser.id)
   commit(types.UNSET_USER)
   unsetToken()
   window.$nuxt.$router.replace({ path: '/auth/login' })
 },
 async fetchUser({ commit, state }) {
   const authUser = JSON.parse(localStorage.getItem('user'))
   if(authUser) {
     const { data } = await axios.get('http://localhost:3001/api/AccessTokens/' + authUser.id +'?filter={"include": "user"}')
     commit(types.SET_USER, data)
   }
 }
 
}
