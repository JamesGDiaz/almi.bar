// const { show, config } = require('../../../../config')

/**
 * Create a product
 * @param {String} sellerId Seller account id
 * @param {String} productId (Optional) Product id
 */
const addProduct = async (sellerId, productId, data) => {
  return { info: 'yeah' }
}

/**
 * Get product information
 * @param {String} sellerId Seller account id
 * @param {String} productId Product id
 */
const getProduct = async (sellerId, productId) => {
  return { info: 'yeah' }
}

/**
 * Update product information
 * @param {String} sellerId Seller account id
 * @param {String} productId Product id
 * @param {Object} data Product data
 */
const updateProduct = async (sellerId, productId, data) => {
  return { info: 'yeah' }
}

/**
 * Enable a product
 * @param {String} sellerId Seller account id
 * @param {String} productId Product id
 */
const enableProduct = async (sellerId, productId) => {
  return { info: 'yeah' }
}

/**
 * Disable a product
 * @param {String} sellerId Seller account id
 * @param {String} productId Product id
 */
const disableProduct = async (sellerId, productId) => {
  return { info: 'yeah' }
}

/**
 * Permanently delete a product
 * @param {String} sellerId Seller account id
 * @param {String} productId Product id
 */
const deleteProduct = async (sellerId, productId) => {
  return { info: 'yeah' }
}

module.exports = {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
  enableProduct,
  disableProduct
}
