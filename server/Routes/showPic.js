import express from 'express';
import showPics from '../controllers/showPics.js';

let imageToFront = express.Router()
imageToFront.get('Resources/:imageName',showPics)


export default imageToFront