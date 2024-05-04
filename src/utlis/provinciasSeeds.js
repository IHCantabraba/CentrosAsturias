const Provincia = require('../api/models/provincias')
const provincias = require('../data/seeds/provinciasSeeds')
const mongoose = require('mongoose')

const lanzarProvincias = async () => {
  /* mongodb+srv://inigocanta:ugIpcnvbrR0Y3wzD@cluster0.lqdqrhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 */
  try {
    await mongoose.connect(
      'mongodb+srv://inigocanta:ugIpcnvbrR0Y3wzD@cluster0.lqdqrhd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )

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
