const cloudinary = require('cloudinary').v2
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: (req) => {
      if (req.body.nombre) {
        return 'CentrosInterpretacion/users'
      } else if (req.body.CCAA) {
        return 'CentrosInterpretacion/provincias'
      } else {
        return 'CentrosInterpretacion/centros'
      }
    },
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif']
  }
})

const upload = multer({ storage })

module.exports = upload
