import express from 'express';
import tableCreation from '../controllers/tableCreate.js';


let tableR = express.Router();

tableR.get('/createTable',tableCreation)
export default tableR