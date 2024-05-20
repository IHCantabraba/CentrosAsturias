const cloudinary = require('cloudinary').v2

const deleteFile = (imgUrl) => {
  try {
    // let imgPath = ''
    console.log(`url to deletes:${imgUrl}`)
    const array = imgUrl.split('/')
    const file = array.at(-1).split('.')[0]
    const folder = array.at(-2)
    // imgPath += `${folder}/${file}`
    console.log(`About to delete img:  ${folder}/${file}`)
    cloudinary.uploader.destroy(`${folder}/${file}`)
  } catch (error) {
    console.log(`Error occurred trying to delete image ${folder}/${path}`)
  }
}

module.exports = { deleteFile }
