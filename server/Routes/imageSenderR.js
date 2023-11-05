import express from 'express'
import imageSender from "../controllers/imageSender.js";

let imageRoute = express.Router()

imageRoute.get('/gallery/:image_id',imageSender)

export default imageRoute;


