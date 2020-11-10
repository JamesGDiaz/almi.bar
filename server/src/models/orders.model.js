'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose
const { default: ShortUniqueId } = require('short-unique-id')

require('mongoose-currency').loadType(mongoose)
var Currency = mongoose.Types.Currency
const shortId = new ShortUniqueId()

const orderIdOptions = {
  segment1: {
    length: 3,
    dictionary: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
  },
  segment2: {
    length: 9,
    dictionary: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  },
  segment3: {
    length: 2
  }
}

/**
 * Create user schema
 */
const salesSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 1000
    },
    orderId: {
      type: String,
      required: true,
      default: `${shortId(orderIdOptions.segment1)}-${shortId(
        orderIdOptions.segment2
      )}`
    },
    status: {
      type: String,
      required: true,
      enum: [
        'received',
        'awaiting-payment',
        'payment-approved',
        'awaiting-processing',
        'processing',
        'processed',
        'ready-for-shipping',
        'shipped',
        'delivered',
        'finished',
        'cancelled',
        'request-cancel',
        'errored',
        'undefined',
        'other'
      ]
    },
    items: [
      {
        productId: { type: String, required: true },
        qty: { type: Number, required: true, min: 1 },
        name: { type: String, required: true },
        price: { type: Currency, required: true }
      }
    ],
    paymentData: {
      provider: { type: String, required: true },
      id: { type: String, required: true },
      status: { type: String, required: true }
    },
    shippingData: {
      type: String
    },
    clientData: {
      name: {
        type: String,
        required: true
      },
      lastname: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        mobile: {
          type: String
        },
        landline: {
          type: String
        }
      },
      instagramUser: {
        type: String
      },
      facebookProfile: {
        type: String
      }
    },
    totals: {
      items: { type: Currency, required: true },
      shipping: { type: Currency, required: true },
      total: { type: Currency, required: true }
    },
    utmSource: {
      type: String
    }
  },
  { timestamps: true }
)

/**
 * Create a model using user schema
 */
module.exports = mongoose.model('Sales', salesSchema)
