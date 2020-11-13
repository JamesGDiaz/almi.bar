const { show } = require('../../../config')
const Product = require('../../../models/product.model')
const ObjectId = require('mongoose').Types.ObjectId

/**
 * Get product information
 *
 */
const getProduct = async (req, res, next) => {
  const { userId, productId } = req.params
  if (!userId || !productId) {
    // res.status(400)
    console.log('Bad Request')
    return res.status(400).end('Bad Request')
  }
  Product.findOne()
    .or([
      { ownerId: userId, shortId: productId },
      {
        ownerId: userId,
        _id: new ObjectId(productId.length < 12 ? '123456789012' : productId)
      }
    ])
    .then((product) => {
      console.log(product)
      return res.status(200).json(product)
    })
    .catch((error) => {
      console.log(error)
      return res.status(500).end('Internal Server Error')
    })
}

const getAllProducts = async (req, res, next) => {
  const { userId } = req.params
  if (!userId) {
    console.log('Bad Request')
    return res.status(400).end('Bad Request')
  }
  Product.find({ ownerId: userId }, (error, products) => {
    if (error) {
      console.log(error)
      return res.status(500).end('Internal Server Error')
    } else if (!error && products) {
      console.log(products)
      return res.status(200).json(products)
    }
  })
}

const addProduct = async (req, res, next) => {
  const data = req.body
  console.log(data)
  const product = new Product(data)
  product.save((error, newProduct) => {
    if (error) {
      show.error(error)
      return res.status(400).end('Bad Request')
    } else {
      return res.status(201).end()
    }
  })
  return res.status(200).end()
}

const updateProduct = async (req, res) => {
  const { userId, productId } = req.params
  const data = req.body
  if (!userId || !productId) {
    // res.status(400)
    console.log('Bad Request')
    return res.status(400).end('Bad Request')
  }
  let product = await Product.findOneAndUpdate(
    {
      $or: [
        { ownerId: userId, shortId: productId },
        {
          ownerId: userId,
          _id: new ObjectId(productId.length < 12 ? '123456789012' : productId)
        }
      ]
    },
    data,
    {
      new: true,
      rawResult: true
    }
  )
  return res.status(200).json({
    lastErrorObject: product.lastErrorObject,
    value: product.value,
    ok: product.ok
  })
}

const enableProduct = async (req, res) => {
  const { userId, productId } = req.params
  if (!userId || !productId) {
    // res.status(400)
    console.log('Bad Request')
    return res.status(400).end('Bad Request')
  }
  Product.findOneAndUpdate(
    {
      $or: [
        { ownerId: userId, shortId: productId },
        {
          ownerId: userId,
          _id: new ObjectId(productId.length < 12 ? '123456789012' : productId)
        }
      ]
    },
    { enabled: true },
    {
      new: true
    }
  )
    .then((product) => {
      res.status(200).json({
        _id: product._id,
        shortId: product.shortId,
        enabled: product.enabled
      })
    })
    .catch((error) => {
      show.error(error)
      res.status(500).end(error)
    })
}

const disableProduct = async (req, res) => {
  const { userId, productId } = req.params
  if (!userId || !productId) {
    // res.status(400)
    console.log('Bad Request')
    return res.status(400).end('Bad Request')
  }
  Product.findOneAndUpdate(
    {
      $or: [
        { ownerId: userId, shortId: productId },
        {
          ownerId: userId,
          _id: new ObjectId(productId.length < 12 ? '123456789012' : productId)
        }
      ]
    },
    { enabled: false },
    {
      new: true
    }
  )
    .then((product) => {
      res.status(200).json({
        _id: product._id,
        shortId: product.shortId,
        enabled: product.enabled
      })
    })
    .catch((error) => {
      show.error(error)
      res.status(500).end(error)
    })
}

const deleteProduct = async (req, res) => {
  const { userId, productId } = req.params
  if (!userId || !productId) {
    // res.status(400)
    console.log('Bad Request')
    return res.status(400).end('Bad Request')
  }
  Product.deleteOne()
    .or([
      { ownerId: userId, shortId: productId },
      {
        ownerId: userId,
        _id: new ObjectId(productId.length < 12 ? '123456789012' : productId)
      }
    ])
    .then((result) => {
      console.log(result)
      return res.status(200).json({
        n: result.n,
        ok: result.ok,
        deletedCount: result.deletedCount
      })
    })
    .catch((error) => {
      console.log(error)
      return res.status(500).end('Internal Server Error')
    })
}

module.exports = {
  addProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  enableProduct,
  disableProduct
}
