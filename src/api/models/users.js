const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    nacimiento: { type: Number, required: true },
    img: { type: String, required: true },
    rol: { type: String, enum: ['admin', 'user'], required: true }
  },
  {
    timestamps: true,
    collection: 'provincias'
  }
)

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('users', userSchema, 'users')

module.exports = User
