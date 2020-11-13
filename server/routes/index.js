'use strict'

const defaultFrontendRoute = require('./defaultFrontend')
const paypalRoute = require('./paypal')
const errorRoute = require('./error')
const sellerFrontend = require('./sellerFrontend')
const linkRoute = require('./link')
const apiRoute = require('./api')

/**
 * Initializing routes
 */
const init = (app) => {
  app.use('/api/v1', apiRoute)
  // app.use('/subdomain/api/auth', authRoute)
  // app.use('/subdomain/api/user', userRoute)
  app.use('/subdomain/api/paypal', paypalRoute)
  app.use('/p', linkRoute)
  app.use('/subdomain', sellerFrontend)
  app.use('/', defaultFrontendRoute)
  app.use('*', errorRoute)
}

module.exports = {
  init
}
