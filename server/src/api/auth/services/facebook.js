'use strict'

const passport = require('passport')
const User = require('../../../models/user.model')
const { default: ShortUniqueId } = require('short-unique-id')

const shortId = new ShortUniqueId({
  dictionary: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  length: 9
})

/**
 * Passport google authentication
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const login = (req, res, next) => {
  passport.authenticate('facebook', {
    scope: ['profile', 'email'],
    session: true
  })(req, res, next)
}

/**
 * Passport google callback
 * @param {object} req
 * @param {object} res
 * @param {object} next
 */
const callback = (req, res, next) => {
  passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: true
  })(req, res, next)
}

/**
 * Passport facebook authenticated
 * @param {string} url
 * @param {object} req
 * @param {object} res
 */
const ready = (url, req, res) => {
  res.redirect(url)
}

/**
 * Register a new user with facebook
 * @function
 * @param {object} data
 * @param {callback} cb
 */
const register = (data, cb) => {
  const { username, name, email } = data
  const id = shortId()
  if (!name) {
    return cb(new Error('Parameters not found!'))
  }
  const user = new User({
    id,
    email,
    username,
    name,
    activation: null,
    active: false
  })
  user.save((err, user) => {
    if (!err && user) {
      return cb(null, user)
    } else {
      return cb(err)
    }
  })
}

module.exports = {
  login,
  callback,
  ready,
  register
}
