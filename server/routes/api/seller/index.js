'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const productRoute = require('./products/productApi')
const productImagesRoute = require('./products/productImagesApi')

router.use('/products/:productId/images', productImagesRoute)
router.use('/products', productRoute)

module.exports = router
