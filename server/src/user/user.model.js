'use strict'

const mongoose = require('mongoose')
const { Schema } = mongoose

/**
 * Create user schema
 */
const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 1000
  },
  googleId: {
    type: String,
    minlength: 5,
    maxlength: 1000
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 100
  },
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 100
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    maxlength: 1000
  },
  salt: {
    type: String,
    minlength: 5,
    maxlength: 20
  },
  active: {
    type: Boolean,
    default: false
  },
  admin: {
    type: Boolean,
    default: false
  },
  activation: {
    type: String,
    default: ''
  },
  recovery: {
    type: String,
    default: ''
  },
  age: {
    type: String,
    minlength: 3,
    maxlength: 5
  },
  location: {
    country: { type: String, lowercase: true, maxlength: 2, minlength: 2 },
    state: { type: String, lowercase: true, maxlength: 2, minlength: 2 },
    city: { type: String, lowercase: true, maxlength: 2, minlength: 2 },
    neighborhood: { type: String, lowercase: true, maxlength: 2, minlength: 2 },
    postalCode: { type: String, lowercase: true, maxlength: 2, minlength: 2 }
  },
  instagram: String,
  facebook: String,
  created_at: Date,
  updated_at: Date
})

/**
 * Create a model using user schema
 */
module.exports = mongoose.model('User', userSchema)
