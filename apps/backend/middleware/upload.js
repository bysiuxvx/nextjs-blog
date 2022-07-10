const aws = require("aws-sdk")
const { S3 } = require("aws-sdk")
const multer = require("multer")
const multerS3 = require("multer-s3")
const path = require("path")

const s3UploadV2 = async (file) => {
  const s3 = new S3()

  const param = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `posts/${Date.now().toString()}-${file.originalname}`,
    Body: file.buffer,
  }
  return await s3.upload(param).promise()
}

module.exports = s3UploadV2
