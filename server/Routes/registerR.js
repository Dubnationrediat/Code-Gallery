import express from 'express'
import registerC from '../controllers/registgerC.js'

let registerR = express.Router()

registerR.post('/regUser',registerC)

export default registerR