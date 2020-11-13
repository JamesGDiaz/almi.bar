'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const { productApi } = require('../../../../src/api/store/products')

router.get('/all', productApi.getAllProducts)
router.get('/:productId', productApi.getProduct)
router.post('/:productId/enable', productApi.enableProduct)
router.post('/:productId/disable', productApi.disableProduct)
router.delete('/:productId', productApi.deleteProduct)
router.patch('/:productId', productApi.updateProduct)
router.put('/new', productApi.addProduct)

module.exports = router
