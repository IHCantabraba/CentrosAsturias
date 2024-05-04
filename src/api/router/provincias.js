const upload = require('../../middleware/file')
const {
  getProvincias,
  postProvincia,
  deleteProvincia,
  updateProvincia
} = require('../controllers/Provincias')

const provinciasRouter = require('express').Router()

provinciasRouter.get('/', getProvincias)
provinciasRouter.post('/', upload.single('img'), postProvincia)
provinciasRouter.put('/:id', updateProvincia)
provinciasRouter.delete('/:id', deleteProvincia)

module.exports = provinciasRouter
