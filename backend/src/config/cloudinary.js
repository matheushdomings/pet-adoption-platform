require("dotenv").config()

const cloudinary = require("cloudinary").v2

console.log("Cloudinary env:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? "existe" : "não existe",
  api_secret: process.env.CLOUDINARY_API_SECRET ? "existe" : "não existe"
})

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

module.exports = cloudinary