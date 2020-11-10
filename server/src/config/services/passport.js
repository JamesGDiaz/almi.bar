'use strict'

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Password = require('../../api/auth/services/password')
const User = require('../../models/user.model')
// const show = require('./logging')

/**
 * Find an active user by email and password
 * @function
 * @param {string} email
 * @param {string} password
 * @param {callback} callback
 */
const findUser = (email, password, callback) => {
  Password.check(email, password, (err, user) => {
    if (!err && user) {
      return callback(null, user)
    } else {
      return callback(null)
    }
  })
}

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findOne({ id }, (err, user) => {
    if (err) {
      return done(err)
    }
    done(null, user)
  })
})

/**
 * Passport localstrategy
 */
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    (email, password, done) => {
      if (!email || !password) {
        return done(null, false)
      }
      findUser(email, password, (err, user) => {
        if (err) {
          return done(err, null)
        }
        if (!user || user === undefined || user.length === 0) {
          return done(null, false)
        }
        return done(null, user)
      })
    }
  )
)

/**
 * Passport googlestrategy
 */

/**
 * Passport instagramstrategy
 */

/**
 * Initialize passport
 * @function
 */
const init = (app) => {
  app.use(passport.initialize())
  app.use(passport.session())
}

module.exports = {
  init
}
