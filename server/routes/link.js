'use strict'

const express = require('express')
let router = express.Router()

router.get('/:shortId/', function (req, res) {
  res.end(req.params.shortId)
})

module.exports = router
