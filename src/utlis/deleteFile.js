const cloudinary = require('cloudinary').v2

const deleteFile = (imgUrl) => {
  try {
    let imgPath = ''
    const array = imgUrl.split('/')
    const file = array.at(-1).split('.')[0]
    const folder = array.at(-2)
    imgPath += `${folder}/${file}`

    cloudinary.uploader.destroy(`${folder}/${file}`)
  } catch (error) {}
}

module.exports = { deleteFile }
