// const { show } = require('../../../config')
// const ProductImage = require('../../../models/productimages.model')
const images = require('../../../middlewares/images')

const getAllImages = (req, res) => {
  const { userId, productId } = req.params
  res.json({ userId, productId })
}

const getOneImage = (req, res) => {
  const { userId, productId, i } = req.params
  const filename = `img-${userId}-${productId}-${i}`
  images.get('productimages', filename, (err, file) => {
    if (err) {
      res.status(404).end()
    } else if (!err && file) {
      res.writeHead(200).render(`<html><img src="${file}"/></html>`)
    }
  })
}

const updateOneImage = (req, res) => {
  images.upload.productImage(req, res, (err) => {
    if (err) {
      console.error(err)
      return res.status(500).end('File not uploaded')
    }
    return res.status(201).end()
  })
}
const deleteOneImage = (req, res) => {
  const { userId, productId, i } = req.params

  res.json({ userId, productId, i })
}
const deleteAllImages = (req, res) => {
  const { userId, productId } = req.params

  res.json({ userId, productId })
}

module.exports = {
  getAllImages,
  getOneImage,
  updateOneImage,
  deleteOneImage,
  deleteAllImages
}
