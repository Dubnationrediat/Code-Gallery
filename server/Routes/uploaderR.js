import express from 'express';
import uploaderC from '../controllers/uploaderC.js';
import multer from '../middleware/forMultiImage.js'

let uploaderR = express.Router();
uploaderR.post('/upload',multer,uploaderC)
export default uploaderR