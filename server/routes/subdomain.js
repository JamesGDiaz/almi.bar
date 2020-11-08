'use strict'

const express = require('express')
let router = express.Router()

router.get('/:domain/', function (req, res) {
  res.render('index', { message: req.params.domain })
  // res.end(req.params.domain + '.localhost')
})

module.exports = router
