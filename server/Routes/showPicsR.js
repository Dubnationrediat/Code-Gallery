import express from 'express'
import showFrontImage from "../controllers/showPics.js";


let imageToFront = express.Router()
imageToFront.get('/Resource/:imageName',showFrontImage)
export default imageToFront


