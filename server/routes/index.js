'use strict'

const defaultFrontendRoute = require('./defaultFrontend')
const authRoute = require('./auth')
const userRoute = require('./user')
const paypalRoute = require('./paypal')
const errorRoute = require('./error')
const subdomainRoute = require('./subdomain')
const linkRoute = require('./link')
/**
 * Initializing routes
 */
const init = (app) => {
  app.use('/subdomain/api/auth', authRoute)
  app.use('/subdomain/api/user', userRoute)
  app.use('/subdomain/api/paypal', paypalRoute)
  app.use('/subdomain', subdomainRoute)
  app.use('/p', linkRoute)
  app.use('/', defaultFrontendRoute)
  app.use('*', errorRoute)
}

module.exports = {
  init
}
