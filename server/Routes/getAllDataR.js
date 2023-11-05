import express from 'express'
import getallD from '../controllers/getAlldataC.js'

let datas = express.Router()

datas.get('/gallery',getallD)

export default datas