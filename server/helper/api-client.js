import axios from 'axios'
import config from '../config'

export default function apiClient (req) {
  let token
  const instance = axios.create({
    baseURL: req ? `http://${config.API_HOST}:${config.API_PORT}` : '/api'
  })

  instance.setJwtToken = newToken => {
    token = newToken
  }

  instance.getJwtToken = () => token

  instance.interceptors.request.use(
    conf => {
      if (req) {
        if (req.header('cookie')) {
          conf.headers.Cookie = req.header('cookie')
        }
        if (req.header('authorization')) {
          conf.headers.authorization = token || req.header('authorization') || ''
        }
      }
      return conf
    },
    error => Promise.reject(error)
  )

  instance.interceptors.response.use(
    response => response,
    error => Promise.reject(error.response ? error.response.data : error)
  )

  return instance
}
