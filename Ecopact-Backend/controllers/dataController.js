const asyncHandler=require('express-async-handler');
const { validateData, Data } = require("../Models/Data");
const xlsx=require('xlsx');
const { default: mongoose } = require('mongoose');


/***---------------------------
 * @desc Add new data
 * @Route /api/data/add
 * @Request post
 * @access user logged in
-----------------------------*/
const addNewReport=asyncHandler(async(req,res)=>{
    const userId = '65e08f0e5140ec68f016bb76';
    if(!req.file){
        return res.status(400).send("no file provided");
     }
     const workbook=xlsx.read(req.file.buffer);
     const sheet = workbook.Sheets[workbook.SheetNames[0]];
     const jsonData = xlsx.utils.sheet_to_json(sheet, { raw: true });
     for(const row of jsonData){
        //console.log(row)
        const {error}=validateData({date:row.date,data:{dataName:row.dataType,dataRate:row.rate}});
        if(error) return res.status(400).send(`${error.details[0].message} in a field of your data`);
        const timeSerie= new Data({
           date:row.date,
           data:{
            dataName:row.dataType,
            dataRate:row.rate
           },
           user:userId 
        })
        await timeSerie.save();
     }
     return res.status(200).send("file uploaded successfully");
})

module.exports={addNewReport}