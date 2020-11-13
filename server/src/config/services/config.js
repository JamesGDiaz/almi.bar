'use strict'

const path = require('path')
const crypto = require('crypto')
let basePath = path.join(__dirname, '../../../')
const env = process.env.NODE_ENV
if (env === 'production') {
  basePath = './'
}
const envPath = path.join(basePath, `.env/${env}.config.env`)
const envConfig = require('dotenv').config({
  path: envPath
})
if (envConfig.error) {
  throw envConfig.error
}
const redisSecret = crypto.randomBytes(48).toString('hex')

/**
 * Test config
 */
const test = {
  env,
  ip: process.env.IP,
  host: process.env.HOST,
  port: process.env.PORT,
  url: `http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`,
  redisUrl: process.env.REDIS_URL,
  redisSecret,
  emailAddress: process.env.EMAIL_ADDRESS,
  emailPassword: process.env.EMAIL_PASS,
  mongoUrl: `mongodb://${process.env.DB_USER}:${encodeURIComponent(
    process.env.DB_PASS
  )}@${process.env.DB_HOST}`,
  databaseName: 'almibar',
  defaultStaticFolder: path.join(basePath, 'frontend/default/build/static'),
  defaultBuildFolder: path.join(basePath, 'frontend/default/build'),
  dashboardStaticFolder: path.join(basePath, 'frontend/dashboard/dist/static'),
  dashboardBuildFolder: path.join(basePath, 'frontend/dashboard/dist'),
  paypalClientId: process.env.PAYPAL_CLIENT_ID || '',
  paypalClientSecret: process.env.PAYPAL_CLIENT_SECRET || '',
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  githubClientId: process.env.GITHUB_CLIENT_ID || '',
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET || ''
}

/**
 * Development config
 */
const development = {
  env,
  ip: process.env.IP,
  host: process.env.HOST,
  port: process.env.PORT,
  url: `http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`,
  apiUrl: `http://${process.env.HOST}:${process.env.PORT}/api/v1`,
  redisUrl: process.env.REDIS_URL,
  redisSecret,
  emailAddress: process.env.EMAIL_ADDRESS,
  emailPassword: process.env.EMAIL_PASS,
  mongoUrl: `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(
    process.env.DB_PASS
  )}@${process.env.DB_HOST}`,
  databaseName: 'almibar',
  defaultStaticFolder: path.join(basePath, 'frontend/default/build/static'),
  defaultBuildFolder: path.join(basePath, 'frontend/default/build'),
  dashboardStaticFolder: path.join(basePath, 'frontend/dashboard/build/static'),
  dashboardBuildFolder: path.join(basePath, 'frontend/dashboard/build'),
  paypalClientId: process.env.PAYPAL_CLIENT_ID || '',
  paypalClientSecret: process.env.PAYPAL_CLIENT_SECRET || '',
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  githubClientId: process.env.GITHUB_CLIENT_ID || '',
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET || ''
}

/**
 * Production config
 */
const production = {
  env,
  ip: process.env.IP,
  host: process.env.HOST,
  port: process.env.PORT,
  url: (user) => {
    return `https://${user}.almi.bar`
  },
  apiUrl: `http://api.almi.bar/v1`,
  redisUrl: process.env.REDIS_URL,
  redisSecret,
  emailAddress: process.env.EMAIL_ADDRESS,
  emailPassword: process.env.EMAIL_PASS,
  mongoUrl: `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(
    process.env.DB_PASS
  )}@${process.env.DB_HOST}`,
  databaseName: 'almibar',
  defaultStaticFolder: path.join(basePath, 'frontend/default/build/static'),
  defaultBuildFolder: path.join(basePath, 'frontend/default/build'),
  dashboardStaticFolder: path.join(basePath, 'frontend/dashboard/build/static'),
  dashboardBuildFolder: path.join(basePath, 'frontend/dashboard/build'),
  paypalClientId: process.env.PAYPAL_CLIENT_ID || '',
  paypalClientSecret: process.env.PAYPAL_CLIENT_SECRET || '',
  googleClientId: process.env.GOOGLE_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
  githubClientId: process.env.GITHUB_CLIENT_ID || '',
  githubClientSecret: process.env.GITHUB_CLIENT_SECRET || ''
}

const config = {
  test,
  development,
  production
}

module.exports = config[env]
