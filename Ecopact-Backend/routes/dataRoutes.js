const express=require('express');
const uploadFile = require('../middlewares/uploadFile');
const { addNewReport } = require('../controllers/dataController');

const dataRoutes=express.Router();

// add new report
dataRoutes.post('/add',uploadFile.single('file'),addNewReport);

module.exports={dataRoutes}