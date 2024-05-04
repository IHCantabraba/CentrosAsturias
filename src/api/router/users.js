const { isAdmin, isAuth } = require('../../middleware/auth')
const upload = require('../../middleware/file')
const {
  getUsers,
  deleteUser,
  updateUser,
  register,
  login
} = require('../controllers/Users')

const usersRouter = require('express').Router()
usersRouter.get('/', [isAdmin], getUsers)
usersRouter.post('/register', upload.single('img'), register)
usersRouter.post('/login', login)
usersRouter.put('/:id', [isAuth], updateUser)
usersRouter.delete('/:id', [isAuth], deleteUser)

module.exports = usersRouter
