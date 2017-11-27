import { getUserFromCookie, getUserFromLocalStorage } from '~/utils/auth'

export default function ({ store, route, redirect, isClient, isServer, req }) {
  if (isServer && !req) return
  const loggedUser = isServer ? getUserFromCookie(req) : getUserFromLocalStorage()
  store.commit('SET_USER', loggedUser)
  if (!store.state.authUser) {
    redirect('/auth/login')
  } else {
    return true
  }
}
