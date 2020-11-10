'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Create user schema
 */
const preferencesSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 1000
    },
    colors: {
      primary: { type: String, minlength: 3, maxlength: 8 },
      secondary: { type: String, minlength: 3, maxlength: 8 },
      tertiary: { type: String, minlength: 3, maxlength: 8 },
      dark: { type: String, minlength: 3, maxlength: 8 },
      light: { type: String, minlength: 3, maxlength: 8 }
    },
    avatar: {
      rounded: { type: Boolean, default: true },
      position: { type: String, enum: ['LEFT', 'RIGHT'] },
      default: 'LEFT'
    }
  },
  { timestamps: true }
)

/**
 * Create a model using user schema
 */
module.exports = mongoose.model('Preferences', preferencesSchema)
