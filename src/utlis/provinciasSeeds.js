const Provincia = require('../api/models/provincias')
const provincias = require('../data/seeds/provinciasSeeds')
const mongoose = require('mongoose')

const lanzarProvincias = async () => {
  try {
    await mongoose.connect()

    await Provincia.collection.drop()
    console.log('Provincias eliminadas')
    await Provincia.insertMany(provincias)
    await mongoose.disconnect()
  } catch (error) {
    console.log(`Error occurred: ${error}`)
    await mongoose.disconnect()
    console.log('desconectado')
  }
}

lanzarProvincias()
