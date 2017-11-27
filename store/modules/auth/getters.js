export default {
  isAuthenticated: state => {
    return !!state.authUser
  },
  loggedUser: state => {
    return state.authUser && state.authUser.user
  }
}
