'use strict'

const mongoose = require('mongoose')
const { default: ShortUniqueId } = require('short-unique-id')
const { Schema } = mongoose

require('mongoose-currency').loadType(mongoose)
var Currency = mongoose.Types.Currency

const shortId = new ShortUniqueId({ length: 6 })

/**
 * Create user schema
 */
const productSchema = new Schema(
  {
    shortId: {
      type: String,
      unique: true,
      required: true,
      minlength: 4,
      maxlength: 9,
      default: shortId
    },
    sku: {
      type: String,
      required: false,
      minlength: 0,
      maxlength: 100
    },
    name: {
      type: String,
      required: true,
      unique: false,
      minlength: 5,
      maxlength: 100
    },
    description: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 100
    },
    price: {
      type: Currency,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 100
    },
    currency: {
      type: String,
      required: true,
      default: 'mxn',
      enum: ['mxn', 'usd', 'ars']
    },
    available: {
      type: Number,
      min: 0,
      required: true,
      default: 1
    },
    unique: {
      type: Boolean,
      required: true,
      default: false
    },
    enabled: {
      type: Boolean,
      required: true,
      default: false
    },
    ownerId: {
      type: String,
      required: true,
      unique: false
    },
    views: {
      type: Number,
      required: false,
      default: 0,
      min: 0
    }
  },
  { timestamps: true }
)

/**
 * Create a model using user schema
 */
module.exports = mongoose.model('Product', productSchema)
