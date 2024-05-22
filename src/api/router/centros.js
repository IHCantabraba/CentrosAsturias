const upload = require('../../middleware/file')
const {
  getCentros,
  postCentro,
  deleteCentro,
  updateCentro
} = require('../controllers/centros')
const centrosRouter = require('express').Router()

centrosRouter.get('/', getCentros)
centrosRouter.post('/', upload.single('img'), postCentro)
centrosRouter.post('/:id', upload.single('img'), updateCentro)
centrosRouter.delete('/:id', deleteCentro)

module.exports = centrosRouter
