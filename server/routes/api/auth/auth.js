'use strict'

const express = require('express')
const router = express.Router()
const auth = require('../../../src/api/auth')

router.post('/check', auth.check)
router.post('/login/local', auth.login)
router.get('/login/google', auth.google.login)
router.get('/login/google/callback', auth.google.callback, auth.google.ready)
router.get('/login/facebook', auth.facebook.login)
router.get('/login/facebook/callback', auth.facebook.callback, auth.facebook.ready)
router.post('/logout', auth.logout)
router.put('/registration', auth.registration)
router.post('/registration/finish', auth.finish)
router.get('/activation/:hash', auth.activation)
router.post('/recovery', auth.recovery)

module.exports = router
