'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Create user schema
 */
const profilePictures = new Schema(
  {
    userId: {
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
module.exports = mongoose.model('ProfilePictures', profilePictures)
