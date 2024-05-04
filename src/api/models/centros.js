const mongoose = require('mongoose')

const centroSchema = new mongoose.Schema({
  Nombre: { type: String, required: true, unique: true },
  Direccion: { type: String, required: true },
  añoApertura: { type: Number, required: false },
  img: { type: String, required: true },
  telefono: { type: String, required: true },
  email: { type: String, reuqired: false },
  provincia: { type: mongoose.Types.ObjectId, ref: 'provincias' },
  horarioM: { type: String, required: true },
  horarioT: { type: String, required: true }
})

const Centro = mongoose.model('centros', centroSchema, 'centros')

module.exports = Centro
