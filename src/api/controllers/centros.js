const Centro = require('../models/centros')
const { deleteFile } = require('../../utlis/deleteFile')

const getCentros = async (req, res, next) => {
  try {
    const centros = await Centro.find().populate('provincia')
    return res.status(200).json(centros)
  } catch (error) {
    return res.status(400).json(`Error ocurred while getting Centros: ${error}`)
  }
}
const postCentro = async (req, res, next) => {
  try {
    const newCentro = new Centro(req.body)
    if (req.file) {
      newCentro.img = req.file.path
    }
    const savedCentro = await newCentro.save()
    return res
      .status(200)
      .json(`Successfully create new Centrp: ${savedCentro}`)
  } catch (error) {
    return res.status(400).json(`Error ocurred while posting Centro: ${error}`)
  }
}

const updateCentro = async (req, res, next) => {
  try {
    const { id } = req.params
    const newCentro = new Centro(req.body)
    const existingCentro = await Centro.findById(id)
    console.log(`current img is: ${existingCentro.img}`)

    if (req.file) {
      console.log('changing img')
      deleteFile(existingCentro.img)
    }
    newCentro.img = req.file.path
    console.log(`updated user igm is: ${newCentro.img}`)

    newCentro._id = id
    const centroUpdated = await Centro.findByIdAndUpdate(id, newCentro, {
      new: true
    })
    return res
      .status(200)
      .json(`Successfully updated centro: ${centroUpdated} `)
  } catch (error) {
    return res
      .status(400)
      .json(`Error ocurred while updatting Centro: ${error}`)
  }
}
const deleteCentro = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedCentro = await Centro.findByIdAndDelete(id)
    deleteFile(deletedCentro.img)
    return res.status(200).json(`Succesfully deleted centro: ${deletedCentro}`)
  } catch (error) {
    return res.status(400).json(`Error ocurred while deleting Centro: ${error}`)
  }
}
module.exports = { getCentros, postCentro, updateCentro, deleteCentro }
