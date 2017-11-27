import {
  SET_USER,
  UNSET_USER
} from './mutation-type'

export default {
  /* eslint-disable*/
  [SET_USER](state, user) {
    state.authUser = user || null
    state.isAuthenticated = state.authUser ? true : false
  },
  [UNSET_USER](state) {
    state.authUser = null
  }
}
