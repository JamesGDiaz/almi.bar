'use strict'

const User = require('../../../models/user.model')

/**
 * Activate an existing user
 * @function
 * @param {object} data
 * @param {callback} callback
 */
const activate = (hash, callback) => {
  User.findOneAndUpdate({ activation: hash },
    {
      $set: {
        active: true,
        activation: null
      }
    },
    {
      new: true
    },
    (err, user) => {
      if (!err && user) {
        return callback(null, user)
      } else {
        return callback(err)
      }
    }
  )
}

module.exports = {
  activate
}
