const User = require('../models/users')
const { deleteFile } = require('../../utlis/deleteFile')
const bcrypt = require('bcrypt')
const { generateToken } = require('../../utlis/token')
const upload = require('../../middleware/file')
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(`Error ocurred while getting Users: ${error}`)
  }
}

const register = async (req, res, next) => {
  try {
    const user = new User({
      nombre: req.body.nombre,
      email: req.body.email,
      password: req.body.password,
      nacimiento: req.body.nacimiento,
      img: req.body.file,
      rol: req.body.rol
    })
    const userDuplicated = await User.findOne({
      nonbre: req.body.nombre
    })
    if (userDuplicated) {
      return res
        .status(409)
        .json(`UserName: ${req.body.nombre} is already in use`)
    }
    if (req.file) {
      user.img = req.file.path
    }
    const userSaved = await user.save()
    return res.status(200).json(`Successfully register user: ${userSaved}`)
  } catch (error) {
    return res.status(400).json(`Error while registeing user: ${error}`)
  }
}

const login = async (req, res, next) => {
  try {
    const { nombre, password } = req.body
    const user = await User.findOne({ nombre })
    if (!user) {
      return res.status(400).json(`User ${nombre} does not exists`)
    }
    if (bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user._id)
      return res.status(200).json({ token, user })
    } else {
      return res.status(400).json(`Password incorrect`)
    }
  } catch (error) {
    return res.status(400).json(`Error in login proccess: ${error}`)
  }
}
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const newUser = new User(req.body)
    const existingUser = await User.findById(id)
    console.log(`current img is: ${existingUser.img}`)
    if (req.file) {
      console.log('changing img')
      deleteFile(existingUser.img)
    }
    newUser.img = req.file.path
    console.log(`updated user igm is: ${newUser.img}`)
    newUser.rol = existingUser.rol
    newUser._id = id

    const UserUpdated = await User.findByIdAndUpdate(id, newUser, {
      new: true
    })
    return res.status(200).json(`Successfully updated User: ${UserUpdated} `)
  } catch (error) {
    return res.status(400).json(`Error ocurred while updating User: ${error}`)
  }
}
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id)
    deleteFile(deletedUser.img)
    return res.status(200).json(`Succesfully deleted User: ${deletedUser}`)
  } catch (error) {
    return res.status(400).json(`Error ocurred while deleting User: ${error}`)
  }
}
module.exports = { getUsers, register, login, updateUser, deleteUser }
