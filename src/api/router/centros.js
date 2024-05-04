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
centrosRouter.put('/:id', updateCentro)
centrosRouter.delete('/:id', deleteCentro)

module.exports = centrosRouter
