const upload = require('../../middleware/file')
const {
  getProvincias,
  postProvincia,
  deleteProvincia,
  updateProvincia
} = require('../controllers/provincias')

const provinciasRouter = require('express').Router()

provinciasRouter.get('/', getProvincias)
provinciasRouter.post('/', upload.single('img'), postProvincia)
provinciasRouter.post('/:id', upload.single('img'), updateProvincia)
provinciasRouter.delete('/:id', deleteProvincia)

module.exports = provinciasRouter
