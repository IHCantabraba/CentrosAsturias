const { deleteFile } = require('../../utlis/deleteFile')
const Provincia = require('../models/provincias')

const getProvincias = async (req, res, next) => {
  try {
    const provincias = await Provincia.find()
    return res.status(200).json(provincias)
  } catch (error) {
    return res
      .status(400)
      .json(`Error ocurred while getting Provincias: ${error}`)
  }
}
const postProvincia = async (req, res, next) => {
  try {
    const newProvincia = new Provincia(req.body)
    if (req.file) {
      newProvincia.img = req.file.path
    }
    const savedProvincia = await newProvincia.save()
    return res
      .status(200)
      .json(`Successfully create new Provincia: ${savedProvincia}`)
  } catch (error) {
    return res
      .status(400)
      .json(`Error ocurred while posting Provincia: ${error}`)
  }
}

const updateProvincia = async (req, res, next) => {
  try {
    const { id } = req.params
    const newProvincia = new Provincia(req.body)
    const existingProvincia = await Provincia.findById(id)

    if (req.file) {
      console.log('changing img')
      deleteFile(existingProvincia.img)
    }
    newProvincia.img = req.file.path
    console.log(`updated user igm is: ${newProvincia.img}`)
    newProvincia._id = id
    const ProvinciaUpdated = await Provincia.findByIdAndUpdate(
      id,
      newProvincia,
      {
        new: true
      }
    )
    return res
      .status(200)
      .json(`Successfully updated Provincia:${ProvinciaUpdated} `)
  } catch (error) {
    return res
      .status(400)
      .json(`Error ocurred while updatting Provincia: ${error}`)
  }
}
const deleteProvincia = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedProvincia = await Provincia.findByIdAndDelete(id)
    deleteFile(deletedProvincia.img)
    return res
      .status(200)
      .json(`Succesfully deleted Provincia: ${deletedProvincia}`)
  } catch (error) {
    return res
      .status(400)
      .json(`Error ocurred while deleting Provincia: ${error}`)
  }
}
module.exports = {
  getProvincias,
  postProvincia,
  updateProvincia,
  deleteProvincia
}
