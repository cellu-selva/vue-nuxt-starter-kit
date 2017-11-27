import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

export default function ({ store, redirect, isServer, req }) {
  if (isServer && !req) return
  const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()
  store.commit('SET_USER', loggedUser)
  if (store.state.authUser) {
    redirect('/')
    // redirect(store.app.router.history.current.fullPath)
  } else {
    return true
  }
}
