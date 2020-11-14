'use strict'

const express = require('express')
const router = express.Router()
const user = require('../../../src/api/user')
const { auth } = require('../../../src/middlewares')

router.post('/passchange', auth.protect, user.passChange)
router.post('/profileupdate', auth.protect, user.profileUpdate)
router.delete('/profileremove', auth.protect, user.profileRemove)

module.exports = router
