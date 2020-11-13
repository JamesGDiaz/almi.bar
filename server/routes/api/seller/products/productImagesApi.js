'use strict'

const express = require('express')
const router = express.Router({ mergeParams: true })

const { productImagesApi } = require('../../../../src/api/store/products')
// const { imagePreprocessor } = require('../../../../src/common')

router.get('/all', productImagesApi.getAllImages)
router.get('/:i', productImagesApi.getOneImage)
router.get('/', productImagesApi.getAllImages)

router.post('/:i', productImagesApi.updateOneImage)

router.delete('/all', productImagesApi.deleteAllImages)
router.delete('/:i', productImagesApi.deleteOneImage)

module.exports = router
