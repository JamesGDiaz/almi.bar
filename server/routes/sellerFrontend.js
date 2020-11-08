'use strict'

const express = require('express')
let router = express.Router()

router.get('/:username/', function (req, res) {
  res.render('index', { username: req.params.username })
})

module.exports = router
