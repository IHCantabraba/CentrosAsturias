const jwt = require('jsonwebtoken')
const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}

module.exports = { generateToken, verifyToken }
