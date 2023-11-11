import express from 'express'
import deleteImage from '../Resources/deleteImage.js'

let toDelete = express.Router()

toDelete.delete('/delete/:image_id',deleteImage)

export default toDelete