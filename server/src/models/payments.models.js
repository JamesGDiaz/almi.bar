'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Create user schema
 */
const productImages = new Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 1000
    },
    images: [{ filename: String, url: String }]
  },
  { timestamps: true }
)

/**
 * Create a model using user schema
 */
module.exports = mongoose.model('ProductImages', productImages)
