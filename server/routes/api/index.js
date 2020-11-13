'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const accountApi = require('./account')
const authApi = require('./auth')
const sellerApi = require('./seller')

router.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})
router.use('/auth', authApi)
router.use('/account', accountApi)
router.use('/store/:userId', sellerApi)
router.use('*', (req, res) => {
  res.status(404).end('Not Found')
})
module.exports = router
