'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

require('mongoose-currency').loadType(mongoose)
var Currency = mongoose.Types.Currency

/**
 * Create user schema
 */
const feesSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 1000
    },
    feeCurrency: {
      type: String,
      enum: ['mxn', 'usd', 'ars'],
      default: 'mxn',
      required: true
    },
    feeType: {
      type: String,
      enum: ['discount', 'premium'],
      required: true,
      default: 'discount'
    },
    feePercent: {
      type: Number,
      required: true,
      default: 2
    },
    promoFeePercentt: {
      type: Number,
      default: 1
    },
    feeNominal: {
      type: Currency,
      default: 0
    }
  },
  { timestamps: true }
)

/**
 * Create a model using user schema
 */
module.exports = mongoose.model('Fees', feesSchema)
