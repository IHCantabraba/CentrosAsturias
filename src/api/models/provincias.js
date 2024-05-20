const mongoose = require('mongoose')

const provinciaSchema = new mongoose.Schema(
  {
    Nombre: { type: String, required: true, unique: true, trim: true },
    CCAA: { type: String, required: true, unique: true, trim: true },
    img: { type: String, required: true },
    folder: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
    collection: 'provincias'
  }
)

const Provincia = mongoose.model('provincias', provinciaSchema, 'provincias')

module.exports = Provincia
