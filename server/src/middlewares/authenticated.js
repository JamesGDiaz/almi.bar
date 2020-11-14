'use strict'

const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

const protect = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).send('Not authorized')
}

module.exports = { ensureAuthenticated, protect }
