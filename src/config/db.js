const mongoose = require('mongoose')

const connect2DB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log(`Successfully connected to DB 😆`)
  } catch (error) {
    console.log(`Error occurred while conecting to DB 😬`)
  }
}

module.exports = { connect2DB }
