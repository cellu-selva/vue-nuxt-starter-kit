import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import apiClient from './helper/api-client'
import httpProxy from 'http-proxy';
import http from 'http';
import config from './config'
import favicon from 'serve-favicon'
import path from 'path'
import compression from 'compression'
import cookieParser from 'cookie-parser'
// import api from './api'

const app = express()
const server = new http.Server(app);
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const targetUrl = `http://${config.API_HOST}:${config.API_PORT}`
const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  changeOrigin: true
});

app.use(cookieParser())
app.use(compression())
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')))

app.use(express.static(path.join(__dirname, '..', 'static')))

app.use((req, res, next) => {
  res.setHeader('X-Forwarded-For', req.ip)
  return next()
});

// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res, { target: targetUrl })
});

server.on('upgrade', (req, socket, head) => {
  proxy.ws(req, socket, head)
});

// added the error handling to avoid https://github.com/nodejitsu/node-http-proxy/issues/527
proxy.on('error', (error, req, res) => {
  if (error.code !== 'ECONNRESET') {
    console.error('proxy error', error)
  }
  if (!res.headersSent) {
    res.writeHead(500, { 'content-type': 'application/json' })
  }

  const json = { error: 'proxy_error', reason: error.message }
  res.end(JSON.stringify(json));
});

app.set('port', port)

// Import and Set Nuxt.js options
let nuxtConfig = require('../nuxt.config.js')
nuxtConfig.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(nuxtConfig)

// Build only in dev mode
if (nuxtConfig.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

process.on('unhandledRejection', error => console.error(error));
