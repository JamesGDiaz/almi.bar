'use strict'

// const path = require('path')
const local = require('./services/local')
const google = require('./services/google')
const github = require('./services/github')
const facebook = require('./services/facebook')
const logout = require('./services/logout')
const password = require('./services/password')
const { activate } = require('./services/activate')
const { recovery, recoveryHash } = require('./services/recovery')
const mail = require('../../common/services/email/email')
const { config, show } = require('../../config')
const action = {}
action.google = {}
action.github = {}
action.facebook = {}

/**
 * Check login
 */
action.check = (req, res) => {
  show.debug('Checking login status...')
  if (req.isAuthenticated()) {
    show.debug('Logged in!')
    const { user } = req
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      age: user.age,
      location: user.location,
      active: user.active
    }
    res.json({
      success: true,
      user: data
    })
  } else {
    show.debug('Not logged in!')
    const data = {
      success: false
    }
    res.json(data)
  }
}

/**
 * Login
 */
action.login = (req, res, next) => {
  show.debug('Logging in...')
  local.login(req, res, next, (err, user) => {
    if (!err && user) {
      show.debug('Login success!')
      const data = {
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age,
        location: user.location,
        active: user.active
      }
      return res.json({
        success: true,
        user: data
      })
    } else if (!err && !user) {
      show.debug('User not found!')
      return res.json({
        success: false
      })
    } else {
      show.debug('Login error!')
      return res.json({
        success: false
      })
    }
  })
}

/**
 * Login with Google
 */
action.google.login = (req, res, next) => {
  show.debug('Logging in with google...')
  google.login(req, res, next)
}

/**
 * Login with Google callback
 */
action.google.callback = (req, res, next) => {
  show.debug('Login with google callback...')
  google.callback(req, res, next)
}

/**
 * Login with Google cb
 */
action.google.ready = (req, res) => {
  show.debug('Login with google ready.')
  google.ready(config.url, req, res)
}

/**
 * Login with Github
 */
action.github.login = (req, res, next) => {
  show.debug('Logging in with github...')
  github.login(req, res, next)
}

/**
 * Login with Github callback
 */
action.github.callback = (req, res, next) => {
  show.debug('Login with github callback...')
  github.callback(req, res, next)
}

/**
 * Login with Github cb
 */
action.github.ready = (req, res) => {
  show.debug('Login with github ready.')
  github.ready(config.url, req, res)
}

/**
 * Login with Facebook
 */
action.facebook.login = (req, res, next) => {
  show.debug('Logging in with facebook...')
  facebook.login(req, res, next)
}

/**
 * Login with Facebook callback
 */
action.facebook.callback = (req, res, next) => {
  show.debug('Login with facebook callback...')
  facebook.callback(req, res, next)
}

/**
 * Login with Facebook cb
 */
action.facebook.ready = (req, res) => {
  show.debug('Login with facebook ready.')
  facebook.ready(config.url, req, res)
}

/**
 * Logout
 */
action.logout = (req, res, next) => {
  show.debug('Logging out...')
  logout(req, (err) => {
    if (!err) {
      show.debug('Logout success!')
      return res.json({
        success: true
      })
    } else {
      show.debug('Logout failed!')
      return res.json({
        success: false
      })
    }
  })
}

/**
 * Registration
 */
action.registration = (req, res, next) => {
  show.debug('Registrating...')
  const data = req.body
  local.register(data, (err, user) => {
    if (!err && user) {
      show.debug('Registration success!')
      mail
        .send({
          message: {
            to: data.email
          },
          template: 'registration', // path.join(__dirname, '../../common/services/email/templates/registration'),
          locals: {
            activationUrl: `${config.apiUrl}/auth/activation/${user.activation}`,
            name: data.name
          }
        })
        .then((response) => {
          return res.json({
            success: true
          })
        })
        .catch((err) => {
          show.error(err)
          return res.json({
            success: true
          })
        })
    } else {
      show.debug('Registration failed!')
      return res.json({
        success: false
      })
    }
  })
}

/**
 * Registration finish (set password)
 */
action.finish = (req, res, next) => {
  const data = req.body
  show.debug('Setting password...')
  password.set(data, (err, user) => {
    if (!err && user) {
      show.debug('Password set up success!')
      const data = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        age: user.age,
        location: user.location,
        active: user.active
      }
      return res.json({
        success: true,
        user: data
      })
    } else {
      show.debug('Password set up failed!')
      return res.json({
        success: false
      })
    }
  })
}

/**
 * Activation
 */
action.activation = (req, res, next) => {
  const hash = req.params.hash
  show.debug('Activating...')
  activate(hash, (err, user) => {
    if (!err && user) {
      show.debug('Activation success!')
      show.debug(user)
      if (config.env === 'development') {
        return res.redirect(`https://${user.name}.almi.bar`)
      } else {
        return res.json({
          success: true
        })
      }
    } else {
      show.debug('Activation failed!')
      show.error(err)
      return res.json({
        success: false
      })
    }
  })
}

/**
 * Password reset
 */
action.recovery = (req, res, next) => {
  const data = req.body
  show.debug('Recovery...')
  if (!data.hash) {
    recovery(data, (err, user) => {
      if (!err && user) {
        mail.send(
          {
            message: {
              to: user.email
            },
            template: 'recovery',
            locals: {
              url: `${config.apiUrl}/auth/recovery/${user.recovery}`,
              user
            }
          },
          (err, sent) => {
            if (!err && sent) {
              show.debug('Recovery success!')
              return res.json({
                success: true
              })
            } else {
              show.debug('Recovery failed!')
              return res.json({
                success: false
              })
            }
          }
        )
      } else {
        show.debug('Recovery failed!')
        return res.json({
          success: false
        })
      }
    })
  } else {
    recoveryHash(data, (err, user) => {
      if (!err && user) {
        show.debug('Recovery success!')
        return res.json({
          success: true
        })
      } else {
        show.debug('Recovery failed!')
        return res.json({
          success: false
        })
      }
    })
  }
}

module.exports = action
