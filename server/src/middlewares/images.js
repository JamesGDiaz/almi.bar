const multer = require('multer')
const MongoClient = require('mongodb')
const ObjectId = require('mongoose').Types.ObjectId
const GridFsStorage = require('multer-gridfs-storage')
const { default: ShortUniqueId } = require('short-unique-id')

const { config } = require('../config')

const imageId = new ShortUniqueId({ length: 10 })

const profilePictureStorage = new GridFsStorage({
  url: config.mongoUrl,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg']

    if (match.indexOf(file.mimetype) === -1) {
      return null
    }

    return {
      id: new ObjectId(`img-${imageId()}-${req.params.userId}`),
      bucketName: 'profilepictures',
      filename: `img-${imageId()}-${req.params.userId}`
    }
  }
})

const productImageStorage = new GridFsStorage({
  url: config.mongoUrl,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['image/png', 'image/jpeg']
    const { userId, productId, i } = req.params
    if (match.indexOf(file.mimetype) === -1) {
      const filename = `img-${userId}-${productId}-${i}`
      return filename
    }

    return {
      bucketName: 'productimages',
      filename: `img-${userId}-${productId}-${i}`
    }
  }
})

let upload = {
  profilePicture: multer({
    storage: profilePictureStorage,
    limits: 5 * 1024 * 1024 // 5MB
  }).single('image'),
  productImage: multer({
    storage: productImageStorage,
    limits: 5 * 1024 * 1024 // 5MB
  }).single('image')
}

const get = (collectionName, fileName, callback) => {
  // Connect to the MongoDB client

  MongoClient.connect(
    config.mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, client) {
      if (err) {
        return callback(new Error(err.errMsg), null)
      }
      const db = client.db(config.databaseName)
      const collection = db.collection(`${collectionName}.files`)
      const collectionChunks = db.collection(`${collectionName}.chunks`)

      collection.find({ filename: fileName }).toArray(function (err, docs) {
        if (err) {
          return callback(new Error(err.errMsg), null)
        }
        if (!docs || docs.length === 0) {
          return callback(new Error('File not found'), null)
        } else {
          // Retrieving the chunks from the db
          collectionChunks
            .find({ files_id: docs[0]._id })
            .sort({ n: 1 })
            .toArray(function (err, chunks) {
              if (err) {
                return callback(new Error(err.errMsg), null)
              }
              if (!chunks || chunks.length === 0) {
                // No data found
                return callback(new Error('No data found'), null)
              }

              const fileData = []
              for (let i = 0; i < chunks.length; i++) {
                // This is in Binary JSON or BSON format, which is stored
                // in fileData array in base64 endocoded string format

                fileData.push(chunks[i].data.toString('base64'))
              }

              // Display the chunks using the data URI format
              const finalFile =
                'data:' + docs[0].contentType + ';base64,' + fileData.join('')
              return callback(null, finalFile)
            })
        }
      })
    }
  )
}

module.exports = {
  upload,
  get
}
